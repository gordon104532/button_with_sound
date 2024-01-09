<template>
    <div>
      <div id="snow-animation-container"></div>
    </div>
  </template>

<script>
import { gsap } from 'gsap'

export default {
  data () {
    return {
      MAX_SNOW_SPEED: 6,
      MAX_SNOW_SIZE: 7,
      MAX_SNOW: 200
    }
  },
  mounted () {
    this.snowStart()
  },
  methods: {
    snowStart () {
      for (let i = 0; i < this.MAX_SNOW; i++) {
        const appendItem = this.getRandomItem(i)
        document.getElementById('snow-animation-container').innerHTML += appendItem
        const animateItem = document.querySelector('.snow' + i)
        const randomTime = Math.random() * 6
        this.goAnimate(animateItem, i, randomTime)
        this.goAnimate2(animateItem)
      }
    },
    goAnimate (item, id, randomTime) {
      gsap.to(item, randomTime, {
        css: {
          marginTop: '+=100'
        },
        ease: 'none',
        onComplete: () => {
          const topPosition = item.getBoundingClientRect().top
          if (topPosition > window.innerHeight) {
            this.changePosition(item)
            randomTime = Math.random() * this.MAX_SNOW_SPEED
            this.goAnimate(item, id, randomTime)
          } else {
            this.goAnimate(item, id, randomTime)
          }
        }
      })
    },
    goAnimate2 (item) {
      const directionTime = 1 + Math.floor(Math.random() * 5)
      const randomDirection = 1 + Math.floor(Math.random() * 4)
      const delayTime = 1 + Math.floor(Math.random() * 3)
      if (randomDirection === 1) {
        gsap.to(item, directionTime, {
          css: {
            marginLeft: '+=100'
          },
          ease: 'ease-out',
          onComplete: () => {
            gsap.to(item, directionTime, {
              css: {
                marginLeft: '-=100'
              },
              delay: delayTime,
              ease: 'ease-out',
              onComplete: () => {
                this.goAnimate2(item)
              }
            })
          }
        })
      } else if (randomDirection === 2) {
        gsap.to(item, directionTime, {
          css: {
            marginLeft: '-=100'
          },
          ease: 'ease-out',
          onComplete: () => {
            gsap.to(item, directionTime, {
              css: {
                marginLeft: '+=100'
              },
              delay: delayTime,
              ease: 'ease-out',
              onComplete: () => {
                this.goAnimate2(item)
              }
            })
          }
        })
      } else if (randomDirection === 3) {
        gsap.to(item, directionTime, {
          css: {
            marginLeft: '+=100'
          },
          ease: 'ease-out',
          onComplete: () => {
            this.goAnimate2(item)
          }
        })
      } else if (randomDirection === 4) {
        gsap.to(item, directionTime, {
          css: {
            marginLeft: '-=100'
          },
          ease: 'ease-out',
          onComplete: () => {
            this.goAnimate2(item)
          }
        })
      }
    },
    changePosition (item) {
      const _width = Math.floor(Math.random() * this.MAX_SNOW_SIZE)
      const _height = _width
      const _blur = Math.floor(Math.random() * 5 + 2)
      const _left = Math.floor(Math.random() * (window.width - _width))
      const _top = -window.height + Math.floor(Math.random() * (window.height - _height))

      item.style.width = _width + 'px'
      item.style.height = _height + 'px'
      item.style.marginLeft = _left + 'px'
      item.style.marginTop = _top + 'px'
      item.style.webkitFilter = 'blur(' + _blur + 'px)'
      item.style.mozFilter = 'blur(' + _blur + 'px)'
      item.style.oFilter = 'blur(' + _blur + 'px)'
      item.style.msFilter = 'blur(' + _blur + 'px)'
      item.style.filter = 'blur(' + _blur + 'px)'
    },
    getRandomItem (id) {
      const _width = Math.floor(Math.random() * this.MAX_SNOW_SIZE)
      const _height = _width
      const _blur = Math.floor(Math.random() * 5 + 2)
      const _left = Math.floor(Math.random() * (window.width - _width))
      const _top = -window.height + Math.floor(Math.random() * (window.height - _height))
      const _id = id

      return this.getSmallSnow(_width, _height, _blur, _left, _top, _id)
    },
    getSmallSnow (width, height, blur, left, top, id) {
      const item = '<div class="snow' + id + '" style="position:absolute margin-left: ' + left + 'px margin-top: ' + top + 'px width: ' + width + 'px height: ' + height + 'px border-radius: 50% background-color: white -webkit-filter: blur(' + blur + 'px) -moz-filter: blur(' + blur + 'px) -o-filter: blur(' + blur + 'px) -ms-filter: blur(' + blur + 'px) filter: blur(' + blur + 'px)"></div>'
      return item
    }
  }
}
</script>

<style scoped>
  @import '@/assets/css/snow.css'
</style>
