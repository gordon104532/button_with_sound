<template>
  <div class="SoundPad">
    <div id="content" style="background-color: antiquewhite; width: 100%;">
      <SoundPad :files="soundList" :button-bg-color="buttonBgColor"></SoundPad>
    </div>
  </div>
</template>

<script>
import SoundPad from '@/components/SoundPad.vue'

export default {
  name: 'soundPad',
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
      buttonBgColor: '#1582f0'
    }
  }
}
</script>
