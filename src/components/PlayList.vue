<template>
    <div>
      <!-- 歌名 -->
      <div v-show="isPlaying">
        <Vue3Marquee class="marquee">
          <h3>{{ nowPlaying }}</h3>
        </Vue3Marquee>
      </div>

      <audio ref="audio" controls="controls" @ended="skip">
        HTML5 MP3 audio required (Chrome, Safari, IE 9?)
      </audio>

      <!-- <div v-show="this.showPlayListCount >= 5"> -->
      <div>
        <!-- <div style="padding:5px">
          <button type="button" class="btn btn-light" v-on:click="copyToClipboard">分享連結</button>
        </div> -->

        <!-- 歌單 -->
        <div class="container col-8 mt-3">
          <ul :style="getListStyle" >
            <li v-for="(link, index) in links" :key="index">
              <a @click.prevent="playAudio(link)">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  data () {
    return {
      nowPlaying: '',
      nowPlayingUrl: '',
      isPlaying: false,
      currentPlayingIndex: -1,
      showPlayListCount: 0,
      isSinglePlay: false,
      columnCount: 2 // Initial column count
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    isMobile () {
      return window.innerWidth <= 768 // Adjust this breakpoint as needed
    },
    getListStyle () {
      return {
        fontSize: 'large',
        textAlign: 'left',
        '-webkit-column-count': this.columnCount,
        '-moz-column-count': this.columnCount,
        'column-count': this.columnCount
      }
    }
  },
  methods: {
    playAudio (link) {
      this.$nextTick(() => {
        const audio = this.$refs.audio
        if (audio) {
          audio.src = link.url
          audio.play()
          this.currentPlayingIndex = this.links.indexOf(link)
          this.nowPlaying = link.text
          this.nowPlayingUrl = link.url
          this.isPlaying = true
          this.isSinglePlay = false
        }
      })
    },
    singlePlayAudio (link) {
      this.$nextTick(() => {
        const audio = this.$refs.audio
        if (audio) {
          audio.src = link.url
          audio.play()
          this.currentPlayingIndex = this.links.indexOf(link)
          this.nowPlaying = link.text
          this.isPlaying = true
        }
      })
    },
    skip () {
      if (this.isSinglePlay) {
        return
      }
      this.nowPlaying = ''
      this.currentPlayingIndex++
      if (this.currentPlayingIndex < this.links.length) {
        this.playAudio(this.links[this.currentPlayingIndex])
      } else { // 循環播放
        this.currentPlayingIndex = 0
        this.playAudio(this.links[this.currentPlayingIndex])
      }
    },
    clickIcon () {
      this.showPlayListCount += 1
    },
    handleResize () {
      if (window.innerWidth <= 768) {
        this.columnCount = 1 // For mobile, set to 1 column
      } else if (window.innerWidth > 1280) {
        this.columnCount = 3
      } else {
        this.columnCount = 2 // For desktop, set to 2 columns
      }
    },
    // 組成要複製到剪貼簿的文字
    generateClipboardText () {
      // 組成 URL
      const parts = this.nowPlayingUrl.split('/')
      const copiedText = `https://gordon104532.github.io/button_with_sound/#/?channel=${parts[1]}&msg=${parts[2]}&file=${parts[3]}`
      return copiedText
    },
    // 複製文字到剪貼簿
    async copyToClipboard () {
      if (!this.nowPlayingUrl) {
        console.error('nowPlayingUrl不存在')
        return
      }

      const el = document.createElement('textarea')
      el.value = this.generateClipboardText()
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)

      el.select()
      el.setSelectionRange(0, 99999) // For mobile devices

      try {
        const successful = document.execCommand('copy')
        const message = successful ? '已成功複製到剪貼簿' : '複製失敗'
        console.log(message)
      } catch (error) {
        console.error('複製失敗', error)
      }

      document.body.removeChild(el)
    }
  },
  components: {
    Vue3Marquee
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    // 從 URL 查詢字串中擷取參數的函式
    const getParameterByName = (name, url) => {
      if (!url) url = window.location.href
      name = name.replace(/[[\]]/g, '\\$&')
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      const results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }

    // 從網址參數中獲取所需的值
    const channel = getParameterByName('channel')
    const msg = getParameterByName('msg')
    const file = getParameterByName('file')

    if (channel && msg && file) {
      const path = `/${channel}/${msg}/${file}`
      for (let i = 0; i < this.links.length; i++) {
        if (path === this.links[i].url) {
          this.nowPlaying = this.links[i].text
          this.nowPlayingUrl = this.links[i].url
          this.singlePlayAudio(this.links[i])
          this.isSinglePlay = true
          break
        }
      }
    }
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
  li:hover {
    text-decoration: underline
  }

  li.playing {
    font-weight: bold
  }

  marquee {
    width: 150px
  }
</style>
