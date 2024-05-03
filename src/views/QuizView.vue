<template>
<div class="quiz">
    <QuizPage></QuizPage>
</div>
</template>

<script>
// @ is an alias to /src
import QuizPage from '@/components/QuizPage.vue'

export default {
  name: 'QuizView',
  components: {
    QuizPage
  }
}
</script>
