<template>
  <div></div>
<h1>Whack-a-mole!
  <span class="score">0</span>
</h1>
<button onClick="startGame()">Start!</button>
<!-- <div class="game">
  <div class="hole hole1">
    <div class="mole"></div>
  </div>
  <div class="hole hole2">
    <div class="mole"></div>
  </div>
  <div class="hole hole3">
    <div class="mole"></div>
  </div>
  <div class="hole hole4">
    <div class="mole"></div>
  </div>
  <div class="hole hole5">
    <div class="mole"></div>
  </div>
  <div class="hole hole6">
    <div class="mole"></div>
  </div>
</div> -->

</template>

<script>
export default {
  data () {
    return {
      currentScore: 0,
      turnOff: false,
      lastHole: null,
      moles: []
    }
  },
  // mounted () {
  //   console.log('mounted')
  //   this.moles = document.querySelectorAll('.mole')
  //   this.moles.forEach(mole => {
  //     console.log('addEventListener')
  //     mole.addEventListener('click', this.score)
  //   })
  // },
  methods: {
    // score (event) {
    //   console.log('score')
    //   if (!event.isTrusted) return
    //   this.currentScore++
    //   document.querySelector('.score').textContent = this.currentScore
    //   event.target.parentNode.classList.remove('up')
    // },
    startGame () {
      console.log('1')
      // this.currentScore = 0
      // document.querySelector('.score').textContent = this.currentScore
      // console.log('2')
      // console.log(document.querySelector('.score').textContent)
      // this.popUp()
      // console.log('3')
      // setTimeout(() => {
      //   console.log('4')
      //   this.turnOff = true
      // }, 10000)
    }
    // randomTime (min, max) {
    //   console.log('randomTime')
    //   return Math.floor(Math.random() * (max - min) + min)
    // },
    // randomHoles () {
    //   console.log(' randomHoles ()')
    //   const holes = document.querySelectorAll('.hole')
    //   const index = Math.floor(Math.random() * 6)
    //   const currentHole = holes[index]
    //   if (currentHole === this.lastHole) {
    //     console.log('currentHole === this.lastHole')
    //     return holes[0]
    //     // return this.randomHoles()
    //   } else {
    //     console.log('else')
    //     this.lastHole = currentHole
    //     return currentHole
    //   }
    // },
    // popUp () {
    //   const time = this.randomTime(500, 900)
    //   const holes = document.querySelectorAll('.hole')
    //   const hole = holes[0]
    //   // const hole = this.randomHoles()
    //   console.log('pop')
    //   if (!hole) {
    //     return // 如果 hole 為 undefined，不執行任何操作
    //   }
    //   console.log('up')
    //   hole.classList.add('up')
    //   setTimeout(() => {
    //     console.log('remove')
    //     hole.classList.remove('up')
    //     if (this.turnOff === false) {
    //       hole.classList.add('this.turnOff === false')
    //       this.popUp()
    //     } else {
    //       hole.classList.add('else {')
    //       this.turnOff = false
    //     }
    //   }, time)
    // }
  }
}
</script>

<style scoped>
  html {
    box-sizing: border-box;
    font-size: 10px;
    background: #ffc600;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

body {
  padding: 0;
  margin: 0;
  font-family: 'Amatic SC', cursive;
}

h1 {
  text-align: center;
  font-size: 10rem;
  line-height: 1;
  margin-bottom: 0;
}

.score {
  background: rgba(255,255,255,0.2);
  padding: 0 3rem;
  line-height: 1;
  border-radius: 1rem;
}

.game {
  width: 600px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.hole {
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;
}

.hole:after {
  display: block;
  background: url('../assets/dirt.svg') bottom center no-repeat;
  background-size: contain;
  content: '';
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 2;
  bottom: -30px;
}

.mole {
  background:url('../assets/dirt.svg') bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}

.hole.up .mole {
  top: 0;
}

button {
  position: absolute;
  left: 30px;
  top: 30px;
}
</style>
