<template>
<img style="padding:5px" width="15%" height="15%" alt="logo" src="../assets/img/logo.png" v-on:click="clickIcon">
<h2 v-show="showMsg.length > 0">
  {{ showMsg }} <br>
  {{ countDownMsg }}
</h2>
<div class="quiz">
    <QuizPage></QuizPage>
</div>
</template>

<script>
// @ is an alias to /src
import QuizPage from '@/components/QuizPage.vue'

export default {
  name: 'QuizView',
  data () {
    return {
      showMsg: '',
      countDownMsg: '',
      countDownInterval: null,
      esterEggCount: 0
    }
  },
  components: {
    QuizPage
  },
  methods: {
    clickIcon () {
      this.esterEggCount += 1
      if (this.esterEggCount === 5) {
        fetch(`${process.env.VUE_APP_BACKEND_URL}/api/easter_egg`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (data.ok) {
              this.$router.push('/easter_egg')
            } else {
              this.showMsg = '\\我知道你很急，但你先別急/\n'
              if (data.start_at > 0) {
                this.countDown(data.start_at)

                this.countDownInterval = setInterval(() => {
                  this.countDown(data.start_at)
                }, 1000)
              }
              this.esterEggCount = 0

              setTimeout(() => {
                // 清除倒數計時器
                clearInterval(this.countDownInterval)

                this.showMsg = ''
                this.countDownMsg = ''
              }, 10000)
            }
          })
          .catch(error => {
            console.error('fetch /api/easter_egg Error:', error)
          })
      }
    },
    countDown (StartAt) {
      const unixTimestamp = StartAt
      const now = Math.floor(Date.now() / 1000) // 現在的 UNIX 時間戳
      const countdown = unixTimestamp - now // 剩餘秒數

      const hours = Math.floor(countdown / 3600)
      const minutes = Math.floor((countdown % 3600) / 60)
      const seconds = countdown % 60

      this.countDownMsg = `倒數: ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒\n`
    }
  }
}
</script>
