<template>
  <BackToQuiz></BackToQuiz>
  <img style="padding:5px" width="15%" height="15%" alt="logo" src="../assets/img/logo.png">
  <div class="empty mt-3">
    <h3>你怎麼會跑到這裡來?，這裡暫時還沒有東西 (⊙_⊙;)</h3>
  </div>
</template>

<script>
import BackToQuiz from '@/components/BackToQuiz.vue'

export default {
  name: 'EmptyView',
  components: {
    BackToQuiz
  }
}
</script>
