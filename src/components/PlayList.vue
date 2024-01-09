<template>
    <div>
      <img style="padding:5px" width="15%" height="15%" alt="logo" src="../assets/logo.png" v-on:click="clickIcon">

      <h2 style="padding:5px">罐製ㄉ播放器</h2>
      <!-- 歌名 -->
      <div v-show="isPlaying">
        <Vue3Marquee class="marquee">
          <h3>{{ nowPlaying }}</h3>
        </Vue3Marquee>
      </div>

      <audio ref="audio" controls="controls" @ended="skip">
        HTML5 MP3 audio required (Chrome, Safari, IE 9?)
      </audio>

      <div v-show="this.showPlayListCount >= 5">
        <div style="padding:5px">
          <!-- 分享按鈕 -->
          <button type="button" class="btn btn-light" v-on:click="copyToClipboard">分享連結</button>
        </div>

        <!-- 歌單 -->
        <ul :style="getListStyle" >
          <li v-for="(link, index) in links" :key="index">
            <a @click.prevent="playAudio(link)">{{ link.text }}</a>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  data () {
    return {
      links: [
        { text: '自然-How Far Ill Go', url: '/814901851975057408/1181220338110046249/20220513__How_Far_Ill_Go' },
        { text: '自然-好喜歡這首', url: '/1077652500578050048/1189222748011122739/20231222__' },
        // { text: '自然-還不是因為你長得不好看', url: '/814901851975057408/1172986670950395975/20211111__' },
        { text: '自然-Reflection', url: '/814901851975057408/1171483933385433239/20231029__Reflection' },
        { text: '自然-I Really Want To Stay At Your House', url: '/814901851975057408/1171452735812534272/20231029__i_really_want_to_stay_at_your_house' },
        { text: '自然-Golden Hour', url: '/814901851975057408/1171456606387576852/20231029__golden_hour' },
        { text: '自然-Price Tag', url: '/814901851975057408/1171460108660781167/20231029__Price_Tag' },
        { text: '自然-Old Town Road', url: '/814901851975057408/1171464772282224650/20231029__Old_Town_Road' },
        { text: '自然-Uptown Funk', url: '/814901851975057408/1171463442637537280/20231029__Uptown_Funk' },
        { text: '自然-Into the Unknown', url: '/814901851975057408/1189221205358673920/20231222__Into_the_Unknown' },
        { text: '自然-Flashlight', url: '/1190754641458241606/1190757854521593948/20231222__Flashlight' },
        { text: '自然-If I Ain\'t Got You', url: '/1190754641458241606/1190757622446563479/20231222__If_I_Aint_Got_You' },
        { text: '自然-Love Story', url: '/1190754641458241606/1190757264575963218/20231222__Love_Story' },
        { text: '自然-Pay phone', url: '/1190754641458241606/1190756224959008799/20231222__Pay_phone' },
        { text: '自然-River', url: '/1190754641458241606/1190754703626223709/20231222__River' },
        { text: '自然-The Loneliest Girl', url: '/1190754641458241606/1190756546012004352/20231222__The_Loneliest_Girl' },
        { text: 'Mix-The Loneliest Girl', url: '/1077652500578050048/1189237709605191800/20231222_Mix_The_Loneliest_Girl' },
        { text: '自然-萬千花蕊慈母悲哀', url: '/1077652500578050048/1084187713558810715/20211103__' },
        { text: '自然-Flos', url: '/1077652500578050048/1083399203222458458/20230309__Flos' },
        { text: '自然-妄想代償聯盟', url: '/1077652500578050048/1082375872897634374/20230306__' },
        { text: '自然-ジェニ', url: '/814901851975057408/1171476299391438869/20231029__' },
        { text: '自然-不可幸力', url: '/1190754641458241606/1190755321648517150/20231222__' },
        { text: '自然-デスぺレート', url: '/1190754641458241606/1190755848637645001/20231222__' },
        { text: '自然-謎', url: '/1190754641458241606/1190760239348338698/20231222__' },
        { text: '拿喔-恐山ル・ヴォワール', url: '/846404573064200246/1181256513394843648/20211112__' },
        { text: '拿喔-我好想你', url: '/846404573064200246/1180568898995757077/20211204__' },
        { text: '拿喔-無法度安奈', url: '/1177468099444871229/1177635054466383902/-' },
        { text: '拿喔-月夜愁', url: '/846404573064200246/1184892093970256032/20211112__' },
        { text: '拿喔-(我也不知道叫甚麼)', url: '/846404573064200246/1175835909548154920/20211120__' },
        { text: '拿喔-寄り酔い', url: '/994991815650443357/1180580061506703514/20211204__' },
        { text: '拿喔-Last Christmas', url: '/846404573064200246/1185244876783230976/20211204__Last_Christmas' },
        { text: '拿喔-德國下雪了', url: '/846404573064200246/1188483293759414282/20211213__' },
        { text: '納納-本色', url: '/994991815650443357/1181241150464589864/20211225__' },
        { text: '納納-乾燥花', url: '/1190754641458241606/1190786240690270258/20211225__' },
        { text: '納納-幸福了然後呢', url: '/1190754641458241606/1190785751110127637/20211020__' },
        { text: '納納-悲傷的五個步驟', url: '/1190754641458241606/1190784411667533844/20220903__' },
        { text: '納納-Somewhere Over the Rainbow', url: '/1152726183906119830/1188506832331866202/20211225__Somewhere_Over_the_Rainbow_pure' },
        { text: '納Na-The Loneliest Girl', url: '/833015408357146634/1078347095888629770/20211213-Na-The_Loneliest_Girl' },
        { text: '納納-寄り酔い', url: '/1190754641458241606/1190784936593084427/20211225__' },
        { text: '波普拿-Wish You Were Gay', url: '/994991815650443357/1078346557100929126/20211213__wish_you_were_gay' },
        { text: '波普貓-When I Was Your Man', url: '/915614796014059520/1175484638840496148/20211219__When_I_Was_Your_Man' },
        { text: '波普貓-夜空中最亮的星', url: '/915614796014059520/1172935269704548442/20211215__' },
        { text: '波普貓-水星記', url: '/915614796014059520/1111357106017292478/20230406__' },
        { text: '波普貓-正想著你呢', url: '/915614796014059520/1084214581271998464/20220310__' },
        { text: '波普貓-你怎麼可以安心地睡著', url: '/915614796014059520/1083860338816069743/20220310__' },
        { text: '波普貓-Golden Hour', url: '/1077652500578050048/1088146757667532851/20230113__Golden_hour' },
        { text: '波普貓-Heartache', url: '/915614796014059520/1159163595435814922/20211215_Heartache' },
        { text: '波普貓-Driver License', url: '/915614796014059520/1140702668654915717/20220219__driver_license' },
        { text: '波普貓-Get Jinxed', url: '/915614796014059520/1143241215341494292/-GetJinxed' },
        { text: '波普貓-When The Party\'s Over', url: '/915614796014059520/1158790020702949448/20230406__when_the_partys_over' },
        { text: '波普貓-Wish You Were Gay', url: '/915614796014059520/1095452749518340136/20220408__wish_you_were_gay' },
        { text: '波普貓-It\'s Okay', url: '/915614796014059520/1104502926854078494/20221005__its_ok' },
        { text: '波普貓-Perfect', url: '/915614796014059520/1096843298028671077/20211219__Perfect' },
        { text: '波普貓-A Thousand Years', url: '/915614796014059520/1090339882766975056/20211219__A_thousand_years' },
        { text: '波普貓-I Love You 3000', url: '/915614796014059520/1087446024546693152/20220219__I_love_you_3000' },
        { text: '波普貓-All We Know', url: '/915614796014059520/1096493514415677470/20211219__All_we_know' },
        { text: '波普貓-All I Want', url: '/915614796014059520/1096116348796547142/20211219__All_i_want' },
        { text: '波普貓-Bad Liar', url: '/915614796014059520/1181252651875307520/20211224__Bad_Liar' },
        { text: '波普貓-I Really Like You', url: '/915614796014059520/1098661901321375804/20211219__I_really_like_you' },
        { text: '波普貓-Love Story', url: '/915614796014059520/1171871485179211856/20211224__Love_Story' },
        { text: '波普貓-Innocence', url: '/915614796014059520/1184528115406475304/20211219__Innocence' },
        { text: '波普貓-Last Christmas', url: '/915614796014059520/1185244888841863259/20211224__Last_christmas' },
        { text: '波普貓-冷冷der聖誕節', url: '/915614796014059520/1188485697179504731/20211224__der' },
        { text: '霜霜-不敢哭', url: '/980418546385444970/1094359359611490434/20230408__' },
        { text: '霜霜-永遠のあくる日', url: '/980418546385444970/1188490784387903488/20230408__' },
        { text: '霜霜-摸豆漿豆', url: '/980418546385444970/1184490237280407643/20230408__' },
        { text: '阿呀捏-刻在心底的名字', url: '/1000047863016992831/1104425644399525938/-' },
        { text: '阿呀捏-下雨的聲音', url: '/1000047863016992831/1104425618508103831/-' },
        { text: '阿呀捏-Someday or One Day', url: '/1000047863016992831/1104425571569635328/-Someday_or_One_Day' },
        { text: '阿呀捏-下雨天', url: '/1000047863016992831/1104425542767353887/-' },
        { text: '阿呀捏-你要的愛', url: '/1000047863016992831/1104425511779848242/-' },
        { text: '阿呀捏-杰哥音樂劇', url: '/1000047863016992831/1104422336951767081/-' },
        { text: '林梅-成功的人', url: '/1152726183906119830/1188509765609984140/20230309__' },
        { text: '林梅-Talking To The Moon', url: '/1152726183906119830/1188509766041993348/20230309__Talking_To_The_Moon' },
        { text: '林梅-失重前幸福', url: '/994991815650443357/1078341526997979217/-Ivy_-_' }
      ],
      nowPlaying: '',
      nowPlayingUrl: '',
      isPlaying: false,
      currentPlayingIndex: -1,
      showPlayListCount: 0,
      isSinglePlay: false,
      columnCount: 2 // Initial column count
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
          audio.src = 'https://cdn.discordapp.com/attachments' + link.url + '.mp3'
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
          audio.src = 'https://cdn.discordapp.com/attachments' + link.url + '.mp3'
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
