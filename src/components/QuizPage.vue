<template>
  <div id="quiz" class="container mt-3">
    <h1>大家認識的波普貓</h1>
    <div v-if="!nickname">
      <div class="form-group">
        <input type="text" class="form-control" v-model="nicknameInput" placeholder="Enter your nickname">
      </div>
      <button class="btn btn-primary mt-2" @click="setNickname">Set Nickname</button>
    </div>
    <div v-else >
      <div v-if="!quizStarted">
        <h3>Hi {{ nickname }} ᓚᘏᗢ</h3>
        <h6 style="font-size:medium">(建議先選擇答題再出題)</h6>
      </div>

      <div class="d-grid gap-2 d-md-block mx-auto" v-if="!quizStarted">
        <button class="btn btn-primary mx-2" @click="startQuiz">答題</button>
        <button class="btn btn-primary mx-2" @click="startQuiz">出題</button>
        <button class="btn btn-primary mx-2" @click="goToMolePage">換頁</button>
        </div>
      <div v-else >
        <div v-if="question">
          <div class="mx-auto">
            <h2 class="mt-4" style="font-size:large">出題者: {{ author }}</h2>
            <!-- <h2 class="mt-4" style="text-align:right; font-size:medium">id: {{ questionId }}</h2> -->
            <h2 class="mt" >Q: {{ question }}</h2>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-outline-primary btn-lg mr-2" @click="submitAnswer('A')">{{ choiceA }}</button>
            <button class="btn btn-outline-primary btn-lg" @click="submitAnswer('B')">{{ choiceB }}</button>
          </div>
          </div>
        <div v-else>
          <h3>No more questions!</h3>
          </div>
        </div>
    </div>
  </div>
  </template>

<script>
export default {
  name: 'QuizPage',
  props: {
    msg: String
  },
  el: '#quiz',
  data () {
    return {
      nicknameInput: '',
      nickname: '',
      quizStarted: false,
      author: '',
      questionId: '',
      question: '',
      choiceA: '',
      choiceB: ''
    }
  },
  methods: {
    setNickname () {
      this.nickname = this.nicknameInput
    },
    startQuiz () {
      this.quizStarted = true
      this.getNextQuestion()
    },
    getNextQuestion () {
    // Call API to get next question with username query parameter
      fetch(`/api/quiz?username=${this.nickname}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          this.author = data.author
          this.questionId = data.id
          this.question = data.question
          this.choiceA = data.choices[0]
          this.choiceB = data.choices[1]
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    submitAnswer (answer) {
      // Call API to submit answer
      fetch('/api/quiz', {
        method: 'POST',
        body: JSON.stringify({ quiz_id: this.questionId, answer: answer, username: this.nickname }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.correct) {
            console.log('Correct answer!')
          } else {
            console.log('Incorrect answer!')
          }
          this.getNextQuestion()
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    goToMolePage () {
      this.$router.push('/mole')
    }
  }
}
</script>
