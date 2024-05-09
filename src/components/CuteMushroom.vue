<template>
  <div v-on:click="clickMushroom">
    <img id="cuteGif" src="../assets/img/mushroom.gif" alt="Mushroom GIF" style="width: 200px; height: 200px;">
  </div>
  </template>

<script>
export default {
  name: 'CuteMushroom',
  data () {
    return {
      cuteGif: null
    }
  },
  mounted () {
    this.cuteGif = document.getElementById('cuteGif')
    // 每30秒執行一次動畫
    setTimeout(() => {
      this.animate()
    }, 30000)
  },
  methods: {
    clickMushroom () {
      this.$router.push('/mole?username=' + this.username)
    },
    animate () {
      let x = -200
      const step = 3 // 移動的步數

      // 開始動畫時設置圖片初始位置
      this.cuteGif.style.display = 'block'
      this.cuteGif.style.left = '-200px'
      this.cuteGif.style.bottom = '0'

      // 開始動畫
      const timer = setInterval(() => {
        // 移動圖片
        x += step
        this.cuteGif.style.left = x + 'px'

        // 當圖片移動到右下角時，停止動畫
        if (x >= window.innerWidth) {
          clearInterval(timer)
          this.cuteGif.style.display = 'none' // 隱藏圖片

          // 設定在 30 秒後再次觸發動畫
          setTimeout(() => {
            this.animate()
          }, 30000)
        }
      }, 10) // 每 10 毫秒移動一次
    }
  }
}
</script>

<style scoped>
#cuteGif {
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
}
</style>
