<template>
    <div>
      <h2>罐製ㄉ播放器</h2>
      <h3>{{ nowPlaying }}</h3>
      <audio ref="audio" controls="controls" @ended="skip">
        HTML5 MP3 audio required (Chrome, Safari, IE 9?)
      </audio>

      <ul style="font-size: large; text-align:left;">
        <li v-for="(link, index) in links" :key="index">
          <a @click.prevent="playAudio(link)">{{ link.text }}</a>
        </li>
      </ul>

    </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { text: '自然-How Far Ill Go', url: '/814901851975057408/1181220338110046249/20220513__How_Far_Ill_Go' },
        { text: '自然-萬千花蕊慈母悲哀', url: '/1077652500578050048/1084187713558810715/20211103__' },
        { text: '自然-Flos', url: '/1077652500578050048/1083399203222458458/20230309__Flos' },
        { text: '自然-妄想代償聯盟', url: '/1077652500578050048/1082375872897634374/20230306__' },
        { text: '自然-ジェニ', url: '/814901851975057408/1171476299391438869/20231029__' },
        // { text: '自然-還不是因為你長得不好看', url: '/814901851975057408/1172986670950395975/20211111__' },
        { text: '自然-Reflection', url: '/814901851975057408/1171483933385433239/20231029__Reflection' },
        { text: '自然-I Really Want To Stay At Your House', url: '/814901851975057408/1171452735812534272/20231029__i_really_want_to_stay_at_your_house' },
        { text: '自然-Golden Hour', url: '/814901851975057408/1171456606387576852/20231029__golden_hour' },
        { text: '自然-Price Tag', url: '/814901851975057408/1171460108660781167/20231029__Price_Tag' },
        { text: '自然-Old Town Road', url: '/814901851975057408/1171464772282224650/20231029__Old_Town_Road' },
        { text: '自然-Uptown Funk', url: '/814901851975057408/1171463442637537280/20231029__Uptown_Funk' },
        { text: '拿喔-恐山ル・ヴォワール', url: '/846404573064200246/1181256513394843648/20211112__' },
        { text: '拿喔-我好想你', url: '/846404573064200246/1180568898995757077/20211204__' },
        { text: '拿喔-無法度安奈', url: '/1177468099444871229/1177635054466383902/-' },
        { text: '拿喔-(我也不知道叫甚麼)', url: '/846404573064200246/1175835909548154920/20211120__' },
        { text: '納納-本色', url: '/994991815650443357/1181241150464589864/20211225__' },
        { text: '納Na-The Loneliest Girl', url: '/833015408357146634/1078347095888629770/20211213-Na-The_Loneliest_Girl' },
        { text: '波普拿-Wish You Were Gay', url: '/994991815650443357/1078346557100929126/20211213__wish_you_were_gay' },
        { text: '波普貓-When I Was Your Man', url: '/915614796014059520/1175484638840496148/20211219__When_I_Was_Your_Man' },
        { text: '波普貓-夜空中最亮的星', url: '/915614796014059520/1172935269704548442/20211215__' },
        { text: '波普貓-水星記', url: '/915614796014059520/1111357106017292478/20230406__' },
        { text: '波普貓-正想著你呢', url: '/915614796014059520/1084214581271998464/20220310__' },
        { text: '波普貓-你怎麼可以安心地睡著', url: '/915614796014059520/1083860338816069743/20220310__' },
        { text: '波普貓-Golden Hour', url: '/1077652500578050048/1088146757667532851/20230113__Golden_hour' },
        { text: '波普貓-Heartache', url: '/915614796014059520/1159163595435814922/20211215_Heartache' },
        { text: '波普貓-Driver License', url: '/915614796014059520/1140702668654915717/20220219__driver_license' },
        { text: '波普貓-Get Jinxed', url: '/915614796014059520/1143241215341494292/-GetJinxed.mp3' },
        { text: '波普貓-When The Party\'s Over', url: '/915614796014059520/1158790020702949448/20230406__when_the_partys_over' },
        { text: '波普貓-Wish You Were Gay', url: '/915614796014059520/1095452749518340136/20220408__wish_you_were_gay' },
        { text: '波普貓-It\'s Okay', url: '/915614796014059520/1104502926854078494/20221005__its_ok' },
        { text: '波普貓-Perfect', url: '/915614796014059520/1096843298028671077/20211219__Perfect' },
        { text: '波普貓-A Thousand Years', url: '/915614796014059520/1090339882766975056/20211219__A_thousand_years' },
        { text: '波普貓-I Love You 300', url: '/915614796014059520/1087446024546693152/20220219__I_love_you_3000' },
        { text: '波普貓-All We Know', url: '/915614796014059520/1096493514415677470/20211219__All_we_know' },
        { text: '波普貓-All I Want', url: '/915614796014059520/1096116348796547142/20211219__All_i_want' },
        { text: '波普貓-Bad Liar', url: '/915614796014059520/1181252651875307520/20211224__Bad_Liar' },
        { text: '波普貓-I Really Like You', url: '/915614796014059520/1098661901321375804/20211219__I_really_like_you' },
        { text: '波普貓-Love Story', url: '/915614796014059520/1171871485179211856/20211224__Love_Story' },
        { text: '阿呀捏-刻在心底的名字', url: '/1000047863016992831/1104425644399525938/-' },
        { text: '阿呀捏-下雨的聲音', url: '/1000047863016992831/1104425618508103831/-' },
        { text: '阿呀捏-Someday or One Day', url: '/1000047863016992831/1104425571569635328/-Someday_or_One_Day' },
        { text: '阿呀捏-下雨天', url: '/1000047863016992831/1104425542767353887/-' },
        { text: '阿呀捏-你要的愛', url: '/1000047863016992831/1104425511779848242/-' },
        { text: '阿呀捏-杰哥音樂劇', url: '/1000047863016992831/1104422336951767081/-' }
      ],
      nowPlaying: '',
      currentPlayingIndex: -1
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
        }
      })
    },
    skip () {
      this.nowPlaying = ''
      this.currentPlayingIndex++
      if (this.currentPlayingIndex < this.links.length) {
        this.playAudio(this.links[this.currentPlayingIndex])
      } else { // 循環播放
        this.currentPlayingIndex = 0
        this.playAudio(this.links[this.currentPlayingIndex])
      }
    }
  }
}

</script>
  <style scoped>
  ul {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  li:hover {
    text-decoration: underline;
  }

  li.playing {
    font-weight: bold;
  }
</style>
