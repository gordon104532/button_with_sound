<template>
  <BackToQuiz></BackToQuiz>
  <img style="padding:5px" width="65%" height="65%" alt="logo" src="../assets/img/wall_v1.jpg" v-on:click="clickIcon">
  <div class="empty mt-3" v-on:click="portal">
  <h3>夢迴2023 傳送門</h3>
  <h3>死去的記憶突然攻擊你</h3>
  </div>
</template>

<script>
import soundEffect from '../assets/audio/laugh.mp3'
import BackToQuiz from '@/components/BackToQuiz.vue'

export default {
  name: 'EasterEggView',
  components: {
    BackToQuiz
  },
  data () {
    return {
      esterEggCount: 0
    }
  },
  methods: {
    clickIcon () {
      this.esterEggCount += 1
      this.playSoundEffect()
      if (this.esterEggCount > 2) {
        this.$router.push('/easter_ai')
      }
    },
    portal () {
      window.open('/#/pope_hbd_2023')
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
