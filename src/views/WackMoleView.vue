<template>
<div id="mole">
  <div>
    <h1>蘑菇? 蘑菇!<br>
      <span class="score">0</span>
      </h1>
      <div class="d-grid gap-2 d-md-block mx-auto">
        <button @click="startGame" class="btn btn-primary mt-3">開始蘑菇</button>
        </div>
    </div>

  <div class="game">
    <div v-for="index in this.holeCount" :key="index" :class="'hole hole' + index">
      <div class="mole"></div>
      </div>
    </div>
  </div>

  <dif class="credit">credit: 一尾懶鯉魚</dif>
  </template>

<script>
import bgm from '../assets/audio/mushroom.mp3'
import soundEffect from '../assets/audio/nope.mp3'

export default {
  el: '#mole',
  data () {
    return {
      holeCount: 9,
      currentScore: 0,
      isStart: false,
      turnOff: false,
      lastHole: null,
      moles: [],
      bgmAudio: new Audio(bgm)
    }
  },
  mounted () {
    if (window.innerWidth <= 768) { // For mobile
      const game = document.querySelector('.game')
      game.style = 'width: ' + window.outerWidth + 'px; height: ' + window.outerHeightHeight + 'px;'
    }

    this.moles = document.querySelectorAll('.mole')
    this.moles.forEach(mole => {
      mole.addEventListener('click', this.score)
    })
  },
  methods: {
    startGame () {
      // lock
      if (this.isStart) return

      this.isStart = true
      this.currentScore = 0
      document.querySelector('.score').textContent = this.currentScore
      this.popUp()
      this.bgmAudio.play()
      setTimeout(() => {
        this.turnOff = true
        this.isStart = false
      }, 37000)
    },
    popUp () {
      const time = this.randomTime(500, 900)
      const hole = this.randomHoles()
      if (!hole) {
        return // 如果 hole 為 undefined，不執行任何操作
      }

      hole.classList.add('up')
      setTimeout(() => {
        hole.classList.remove('up')
        if (this.turnOff === false) {
          this.popUp()
        } else {
          this.turnOff = false
        }
      }, time)
    },
    randomTime (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    randomHoles () {
      const holes = document.querySelectorAll('.hole')
      const index = Math.floor(Math.random() * this.holeCount)
      const currentHole = holes[index]
      if (currentHole === this.lastHole) {
        return this.randomHoles()
      } else {
        this.lastHole = currentHole
        return currentHole
      }
    },
    score (event) {
      if (!event.isTrusted) return
      this.playSoundEffect()
      this.currentScore++
      document.querySelector('.score').textContent = this.currentScore
      event.target.parentNode.classList.remove('up')
    },
    playSoundEffect () {
      const soundEffectAudio = new Audio(soundEffect)
      let hasErrors = false
      let canPause = false
      if (canPause) {
        soundEffectAudio.pause()
        soundEffectAudio.currentTime = 0
      }

      if (hasErrors) {
        hasErrors = false
        canPause = false
        soundEffectAudio.onerror = function () {
          hasErrors = true
        }
      }

      const playPromise = soundEffectAudio.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          canPause = true
        }
        ).catch(_ => {
          hasErrors = true
        }
        )
      }
    }
  }
}
</script>

<style scoped>
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
  font-size: 3rem;
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
  height: 600px;
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
  background: url('../assets/img/dirt.svg') bottom center no-repeat;
  background-size: contain;
  content: '';
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 2;
  bottom: -25px;
}

.mole {
  background:url('../assets/img/mushroom.gif') bottom center no-repeat;
  background-size: 90%;
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

.hole.up .mole {
  top: 0;
}

.credit {
  position: fixed;
  right: 20px;
  bottom: 10px;
}
</style>
