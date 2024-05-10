<template>
<BackToQuiz></BackToQuiz>
<img style="padding:5px" width="15%" height="15%" alt="logo" src="../assets/img/logo.png" v-on:click="clickIcon">
<div id="easter-ai-view" class="container mt-3">
  <h1>認識了波普貓，再來是建造波普貓</h1>
    *請注意: 以下都不是波普貓唱的
  <br>

  <PlayList :links="soundList.slice(0, 8)"></PlayList>
  <br>
  <br>

  <div v-if="esterEggCount>4">
    <h3>以下有些瑕疵，但還是可以聽一下</h3>
    <PlayList :links="soundList.slice(8, 22)"></PlayList>

  </div>
  <br>
  <br>

  <div v-if="esterEggCount>13">
    <h3>以下些的太鬧了，拿來笑一下用</h3>
    <PlayList :links="soundList.slice(22, 33)"></PlayList>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import PlayList from '@/components/PlayList.vue'
import BackToQuiz from '@/components/BackToQuiz.vue'

export default {
  name: 'EasterAiView',
  components: {
    PlayList,
    BackToQuiz
  },
  created () {
    this.staticDomain = `${process.env.VUE_APP_BACKEND_URL}/media/ai`
    this.soundList = [
      // tier1
      { text: 'So This Is Love', url: this.staticDomain + '/tier1/0430_so_this_is_love.mp3' },
      { text: 'Paper Hearts', url: this.staticDomain + '/tier1/0430_paper_heart.mp3' },
      { text: 'Paramore Decode', url: this.staticDomain + '/tier1/0505_Paramore_Decode.mp3' },
      { text: 'Such A Boy', url: this.staticDomain + '/tier1/0418_Such_A_Boy.mp3' },
      { text: 'Cupid', url: this.staticDomain + '/tier1/0430_Cupid.mp3' },
      { text: 'Melt Bitter', url: this.staticDomain + '/tier1/0430_melt_bitter.mp3' },
      { text: 'Sunshine Girl', url: this.staticDomain + '/tier1/0505_Sunshine_Girl.mp3' },
      { text: 'Stellar Stellar', url: this.staticDomain + '/tier1/0430_stellar_stellar.mp3' },
      // tier2
      { text: 'Past Lives', url: this.staticDomain + '/tier2/0418_past_lives.mp3' },
      { text: '大器晚成', url: this.staticDomain + '/tier2/0418_大器晚成.mp3' },
      { text: '悲傷的五個步驟', url: this.staticDomain + '/tier2/0418_悲傷的五個步驟.mp3' },
      { text: 'LOST IN PARADISE', url: this.staticDomain + '/tier2/0419_LOST_IN_PARADISE_short_ver.mp3' },
      { text: 'My Love Mine All Mine', url: this.staticDomain + '/tier2/0430_My_Love_Mine_All_Mine.mp3' },
      { text: 'Paper Hearts short ver.', url: this.staticDomain + '/tier2/0430_paper_heart_short.mp3' },
      { text: 'Vampire', url: this.staticDomain + '/tier2/0430_vampire_Serafina.mp3' },
      { text: '白日 short ver.', url: this.staticDomain + '/tier2/0430_白日_short.mp3' },
      { text: '沒空理你', url: this.staticDomain + '/tier2/0430_沒空理你.mp3' },
      { text: '花になって', url: this.staticDomain + '/tier2/0430_花になって.mp3' },
      { text: 'Lover Boy', url: this.staticDomain + '/tier2/0505_Lover_Boy.mp3' },
      { text: '你要的愛 short ver.', url: this.staticDomain + '/tier2/0505_你要的愛_short.mp3' },
      { text: '怪獣の花唄', url: this.staticDomain + '/tier2/0505_怪獣の花唄.mp3' },
      { text: '現在想要見你', url: this.staticDomain + '/tier2/0505_現在想要見你.mp3' },
      // tier3
      { text: '也不是第一次死了', url: this.staticDomain + '/tier3/0412_也不是第一次死了.mp3' },
      { text: 'Apollo short ver.', url: this.staticDomain + '/tier3/0417_Apollo_short_ver.mp3' },
      { text: '蘑菇蘑菇', url: this.staticDomain + '/tier3/0417_mushroom.mp3' },
      { text: '與浪之間', url: this.staticDomain + '/tier3/0417_與浪之間.mp3' },
      { text: 'Bécane', url: this.staticDomain + '/tier3/0430_Bécane_ng.mp3' },
      { text: 'Until I Found You', url: this.staticDomain + '/tier3/0430_Until_I_Found_You_ng.mp3' },
      { text: 'Vampire-Olivia', url: this.staticDomain + '/tier3/0430_vampire_Olivia.mp3' },
      { text: '少女A', url: this.staticDomain + '/tier3/0430_少女A_初音感.mp3' },
      { text: 'Amorfoda', url: this.staticDomain + '/tier3/0505_Amorfoda_ng.mp3' },
      { text: '不敢哭', url: this.staticDomain + '/tier3/0505_不敢哭_ng.mp3' },
      { text: '你要的愛', url: this.staticDomain + '/tier3/0505_你要的愛_ng.mp3' }
    ]
  },
  data () {
    return {
      esterEggCount: 0,
      staticDomain: '',
      soundList: []
    }
  },
  methods: {
    clickIcon () {
      this.esterEggCount += 1
    }
  }
}
</script>
