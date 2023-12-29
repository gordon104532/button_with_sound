<template>
    <div id="instants_container" style="display: flex; flex-wrap: wrap;">
        <div class="instant" v-for="file in files" :key="file.name" style="margin-right: 10px; margin-bottom: 5px;">
            <div class="circle small-button-background" :style="{ backgroundColor: buttonBgColor }"></div>
            <button class="small-button" v-on:click="play(file.path)" type="button"></button>
            <div class="small-button-shadow"></div>
            <a class="instant-link link-secondary">{{file.name}}</a>
        </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      canPause: false,
      hasErrors: false,
      lastUrl: '',
      audio: new Audio()
    }
  },
  props: {
    files: {
      type: Array,
      required: true
    },
    buttonBgColor: {
      type: String,
      required: true
    }
  },
  methods: {
    play: function (filePath) {
      this.playAudio(filePath)
    },
    playAudio (url) {
      if (this.canPause) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      if (this.lastUrl !== url || this.hasErrors) {
        this.audio.src = url
        this.lastUrl = url
        this.hasErrors = false
        this.canPause = false
        this.audio.onerror = function () {
          this.hasErrors = true
        }
      }
      const playPromise = this.audio.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          this.canPause = true
        }
        ).catch(error => {
          this.hasErrors = true
          console.log(error)
        }
        )
      }
    }
  }
}

</script>
