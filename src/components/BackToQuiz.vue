<template>
    <a @click="backToQuiz" class="btn btn-primary home" role="button">⬅回問答</a>
</template>

<script>
export default {
  el: '#backToQuiz',
  props: {
    nickname: {
      type: String,
      required: false
    }
  },
  methods: {
    backToQuiz () {
      if (this.nickname) {
        this.$router.push('/quiz?username=' + this.nickname)
      } else {
        this.$router.push('/quiz')
      }
    }
  }
}
</script>

<style scoped>
.home {
    position: fixed;
    left: 20px;
    top: 10px;
  }
</style>
