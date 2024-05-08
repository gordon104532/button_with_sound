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
      soundList: [
        { name: '波黑', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1142119861464608779/BoHey.mp3' },
        { name: '好吃', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1143238789515456512/delicious.mp3' },
        { name: '沒愛', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145053604521193502/NoI.mp3' },
        { name: '真的', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145053719113777313/true.mp3' },
        { name: '歐虧', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145054503792562256/ok.mp3' },
        { name: '駿ㄍ', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145057822783045784/muchun0930.mp3' },
        { name: '哇塞', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145059067027525723/WaSay.mp3' },
        { name: '到底', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1145063347427999846/afterAll.mp3' },
        { name: '亂講', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1169315259627081869/oBaiGon.mp3' },
        { name: '好想', path: 'https://cdn.discordapp.com/attachments/1142059224608809040/1158796107216846879/ca1f405328c8ffeb.mp3' }
      ],
      buttonBgColor: '#1582f0',
      navbarBgColor: '#1582f0',
      counter: 0,
      hbd_song: `${process.env.VUE_APP_BACKEND_URL}/media/soundpad/生日快樂歌.mp3`,
      laugh_song: `${process.env.VUE_APP_BACKEND_URL}/media/soundpad/笑.mp3`

    }
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
