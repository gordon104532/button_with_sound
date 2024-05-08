<template>
<div class="pope-hbd">
<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-bar" :style="{ backgroundColor: navbarBgColor }">
    <div class="container-fluid justify-content-between flex-row" style="user-select: none">
        <div class="my-1">
        <a id="brand" class="navbar-brand ms-3" v-on:click="esterEgg">2023 ㄅㄅㄅㄕㄖㄎㄌ</a>
        </div>
    </div>
</nav>
<div>
        <div v-if="counter > 4 && counter < 49">
          <div style="font-size: xx-large">
            <img src="https://media.discordapp.net/stickers/948615150016020480.png?size=160" alt="popeCat rose" style="width:8%;height:8%;">
            生日快樂歌
            <img src="https://media.discordapp.net/stickers/948615150016020480.png?size=160" alt="popeCat rose" style="width:8%;height:8%;">
          </div>
          <audio controls>
            <source :src=hbd_song type="audio/mpeg">
          </audio>
        </div>

        <div v-if="counter > 18 && counter < 49">
          <br>
          <div style="font-size: xx-large">小彩蛋</div>
          <audio controls>
            <source :src=laugh_song type="audio/mpeg">
          </audio>
        </div>

        <div v-if="counter > 23  && counter < 34  ">
          <br>
          <div>ﾚ(ﾟ∀ﾟ;)ﾍ 沒有了啦 ﾍ( ﾟ∀ﾟ;)ﾉ</div>
        </div>

        <div v-if="counter > 33 && counter < 49">
          <br>
          <div>(๑•ั็ω•็ั๑) 沒有了吧 (๑•ั็ω•็ั๑)</div>
        </div>

        <div v-if="counter > 68">
          <br>
          <div>ლ(•ω •ლ) 沒有了 ლ(•ω •ლ)</div>
        </div>

        <div v-if="counter > 99">
          <br>
          <div>好了啦 你已經按一百下了</div>
          <div>(*´▽`*)</div>
        </div>
</div>
<div class="SoundPad">
    <div id="content" style="background-color: inherit; max-width: 90%;">
    <SoundPad :files="soundList" :button-bg-color="buttonBgColor"></SoundPad>
    </div>
</div>
</div>
</template>

<script>
import SoundPad from '@/components/SoundPad.vue'

export default {
  name: 'PopeHBD2023',
  components: {
    SoundPad
  },
  data () {
    return {
      staticDomain: '',
      soundList: [],
      buttonBgColor: '#1582f0',
      navbarBgColor: '#1582f0',
      counter: 0,
      hbd_song: '',
      laugh_song: ''
    }
  },
  created () {
    this.staticDomain = `${process.env.VUE_APP_BACKEND_URL}/media/soundpad`
    this.soundList = [
      { name: '好想', path: this.staticDomain + '/好想卯咪.mp3' },
      { name: '生日快熱', path: this.staticDomain + '/生日快熱.mp3' },
      { name: '喵喵喵', path: this.staticDomain + '/喵喵喵.mp3' },
      { name: '打狗狗巴掌', path: this.staticDomain + '/打狗狗巴掌.mp3' },
      { name: '汪汪', path: this.staticDomain + '/卯咪汪汪.mp3' },
      { name: '我沒看到', path: this.staticDomain + '/我沒看到.mp3' },
      { name: '駿ㄍ', path: this.staticDomain + '/駿我大哥.mp3' },
      { name: '哇塞', path: this.staticDomain + '/哇賽2.mp3' },
      { name: '亂念', path: this.staticDomain + '/亂念.mp3' },
      { name: '還有十分鐘', path: this.staticDomain + '/還有十分鐘.mp3' },
      { name: '看錯時間了', path: this.staticDomain + '/看錯時間了.mp3' },
      { name: '聊天室等我一下', path: this.staticDomain + '/聊天室等我一下.mp3' },
      { name: '現在是VOD嗎', path: this.staticDomain + '/現在是VOD嗎.mp3' },
      { name: '記得吃飯', path: this.staticDomain + '/邊哭邊提醒大家要記得吃飯.mp3' }
    ]
    this.hbd_song = this.staticDomain + '/生日快樂歌.mp3'
    this.laugh_song = this.staticDomain + '/笑.mp3'
  },
  methods: {
    esterEgg () {
      this.counter += 1
    }
  }
}
</script>

<style scoped>
  /* 在這裡添加您的 CSS 样式 */
  </style>
