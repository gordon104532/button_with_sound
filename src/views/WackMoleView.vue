<template>
<BackToQuiz :nickname="this.nickname"></BackToQuiz>
<div id="mole">
  <div>
    <h1>蘑菇? 蘑菇!<br>
      <span class="score">0</span>
      </h1>
      <div class="d-grid gap-2 d-md-block mx-auto">
        <button @click="startGame" class="btn btn-primary mt-3 mx-2">開始蘑菇</button>
        <button @click="getLeaderBoard" class="btn btn-primary mt-3">排行榜</button>
        </div>
    </div>

  <div class="game" v-show="!turnOff">
    <div v-for="index in this.holeCount" :key="index" :class="'hole hole' + index">
      <div class="mole"></div>
      </div>
    </div>
  </div>

  <!-- 遮罩層 -->
  <div class="overlay" v-if="leaderBoard.length > 0">
    <!-- 排行榜容器 -->
    <div class="LeaderBoard">
      <!-- 關閉按鈕 -->
      <button @click="closeLeaderBoard" class="btn btn-danger close-btn">×</button>
      <!-- 排行榜 -->
      <div v-for="(player, index) in leaderBoard" :key="index" class="player-score">
        <h3>第{{ index + 1 }}名: {{ player.username }}: {{ player.score }}分</h3>
      </div>
      ......
      <br>
      <div v-if="currentScore>0">
        <h3 v-if="currentRank>0">你是 第{{ currentRank }}名: {{ nickname }}: {{ currentScore }}分</h3>
        <div v-else>
          <div>輸入名稱才可以上排行榜喔!</div>
          <div class="form-group">
            <input type="text" class="col-4 mx-auto form-control" v-model="nicknameInput" placeholder="輸入名稱">
          </div>
          <button class="btn btn-primary mt-2" @click="setNicknameAndUploadScore">確定名稱</button>
        </div>
      </div>
    </div>
  </div>

  <dif class="credit">credit: 一尾懶鯉魚</dif>
  </template>

<script>
import bgm from '../assets/audio/mushroom.mp3'
import soundEffect from '../assets/audio/nope.mp3'
import BackToQuiz from '@/components/BackToQuiz.vue'

export default {
  el: '#mole',
  components: {
    BackToQuiz
  },
  data () {
    return {
      nickname: '',
      holeCount: 9,
      currentScore: 0,
      currentRank: 0,
      isStart: false,
      turnOff: false,
      lastHole: null,
      moles: [],
      bgmAudio: new Audio(bgm),
      leaderBoard: {},
      staticLeaderBoard: {
        leader_board: [
          {
            username: '波普貓',
            score: 57
          },
          {
            username: '維尼',
            score: 52
          },
          {
            username: '管理員伯伯',
            score: 52
          },
          {
            username: '魚',
            score: 51
          },
          {
            username: '波堡',
            score: 51
          },
          {
            username: '白澤',
            score: 50
          },
          {
            username: '洋蔥',
            score: 50
          },
          {
            username: '卡門',
            score: 50
          },
          {
            username: '冰',
            score: 50
          },
          {
            username: 'airmark',
            score: 48
          },
          {
            username: '紅鯉魚',
            score: 47
          },
          {
            username: 'Isola',
            score: 47
          },
          {
            username: '六分鐘ㄉ惡夢',
            score: 46
          },
          {
            username: '漂浮黑喵',
            score: 37
          }
        ]
      }
    }
  },
  mounted () {
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
    if (getParameterByName('username')) {
      this.nickname = getParameterByName('username')
    }

    if (window.innerWidth <= 768) { // For mobile
      const game = document.querySelector('.game')
      game.style = 'width: ' + window.outerWidth + 'px; height: ' + window.outerHeightHeight + 'px;'
    }

    this.moles = document.querySelectorAll('.mole')
    this.moles.forEach(mole => {
      mole.addEventListener('click', this.score)
    })
  },
  beforeRouteLeave (to, from, next) {
    // Stop playing the background music
    this.bgmAudio.pause()
    next()
  },
  methods: {
    startGame () {
      // lock
      if (this.isStart) return

      this.isStart = true
      this.currentScore = 0
      this.currentRank = 0
      this.closeLeaderBoard()
      document.querySelector('.score').textContent = this.currentScore
      this.popUp()
      this.bgmAudio.play()
      setTimeout(() => {
        this.turnOff = true
        this.isStart = false

        this.uploadScore()
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
    },
    uploadScore () {
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'true') {
        if (this.currentScore !== 0 && this.nickname !== '') {
          fetch(`${process.env.VUE_APP_BACKEND_URL}/api/mole?score=${this.currentScore}&username=${this.nickname}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => {
              this.currentRank = data.rank
            })
            .catch(error => {
              console.error('uploadScore Error:', error)
            })
        }
      } else {
        this.currentRank = 514
      }
      setTimeout(() => {
        this.getLeaderBoard()
      }, 1000)
    },
    getLeaderBoard () {
      if (this.isStart) return
      this.turnOff = true
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'false') {
        this.leaderBoard = this.staticLeaderBoard.leader_board
        return
      }

      fetch(`${process.env.VUE_APP_BACKEND_URL}/api/mole`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          if (data.leader_board.length === 0) {
            this.leaderBoard = [{
              username: '還沒有玩家',
              score: 0
            }]
            return
          }
          this.leaderBoard = data.leader_board
        })
        .catch(error => {
          this.turnOff = false
          console.error('getLeaderBoard Error:', error)
        })
    },
    closeLeaderBoard () {
      this.turnOff = false
      this.leaderBoard = {}
    },
    setNicknameAndUploadScore () {
      this.nickname = this.nicknameInput.trim()
      if (this.nickname === '') {
        return
      }

      this.uploadScore()
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.LeaderBoard {
  background-color: #4e4e4e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 5;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.player-score {
  margin-bottom: 10px;
}
</style>
