<template>
  <div id="quiz" class="container mt-3">
    <h1>大家認識的波普貓</h1>
    <div v-if="!nickname">
      <div class="form-group">
        <input type="text" class="col-4 mx-auto form-control" v-model="nicknameInput" placeholder="輸入名稱">
      </div>
      <button class="btn btn-primary mt-2" @click="setNickname">開始答題</button>
    </div>
    <div v-else >
      <div v-if="!quizStarted">
        <h3>Hi {{ nickname }} ᓚᘏᗢ</h3>
        <h6 style="font-size:medium">(建議先選擇答題再出題)</h6>
        </div>
      <div class="d-grid gap-2 d-md-block mx-auto" v-if="!quizStarted">
        <button class="btn btn-primary mx-2" @click="startQuiz">答題</button>
        <button class="btn btn-primary mx-2" @click="isSetQuestion = !isSetQuestion">出題</button>

        <div class="mb-3" v-show="isSetQuestion">
          <br>
          <!-- <div class="alert alert-success d-flex align-items-center" role="alert" v-show="isSubmitSuccess">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
              新增成功!
            </div>
          </div> -->

          <h2>新增問題</h2>
          <form @submit.prevent="submitQuiz">
            <div class="mb-3">
              <label for="setQuestion" class="form-label">題目：</label>
              <textarea class="form-control" id="setQuestion" v-model="setQuestion" placeholder="題目" required></textarea>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="choiceA" class="form-label">選項 A：</label>
                <input type="text" class="form-control" id="choiceA" v-model="choiceA" placeholder="選項A" required>
                </div>
              <div class="mb-3">
                <label for="choiceB" class="form-label">選項 B：</label>
                <input type="text" class="form-control" id="choiceB" v-model="choiceB" placeholder="選項B" required>
                </div>
              </div>
            <button type="submit" class="btn btn-primary">送出</button>
          </form>
          </div>
        </div>
      <div v-else >
        <div v-if="question">
          <div class="mx-auto">
            <h2 class="mt-4" style="font-size:large">出題者: {{ author }}</h2>
            <!-- <h2 class="mt-4" style="text-align:right; font-size:medium">id: {{ questionId }}</h2> -->
            <h2 class="mt" >Q: {{ question }}</h2>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto" v-if="!isAnswered">
            <button class="btn btn-outline-primary btn-lg mr-2" @click="submitAnswer('A')">{{ choiceA }}</button>
            <button class="btn btn-outline-primary btn-lg" @click="submitAnswer('B')">{{ choiceB }}</button>
          </div>
          <div class="d-grid gap-2 mx-auto" v-else>
            <!-- 顯示結果 -->
            <div class="row">
              <div class="col-6">
                <h2 class="mt-4">{{ choiceA }}</h2><h2 class="mt-2" style="font-size:large">共 {{ answeredBy.A.length }} 人</h2>
                <div class="user-names">
                  <span v-for="(user, index) in answeredBy.A" :key="index" class="user-name">{{ user }}</span>
                </div>
              </div>
              <div class="col-6">
                <h2 class="mt-4">{{ choiceB }}</h2><h2 class="mt-2" style="font-size:large">共 {{ answeredBy.B.length }} 人</h2>
                <div class="user-names">
                  <span v-for="(user, index) in answeredBy.B" :key="index" class="user-name">{{ user }}</span>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-primary btn-lg" @click="getNextQuestion">下一題</button>
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
      choiceB: '',
      isAnswered: false,
      answeredBy: [[]],
      isSetQuestion: false,
      isSubmitSuccess: false,
      setQuestion: ''
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
      this.isAnswered = false
      // Call API to get next question with username query parameter
      fetch(`${process.env.VUE_APP_BACKEND_URL}/api/quiz?username=${this.nickname}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          this.author = data.author
          this.questionId = data.id
          this.question = data.question
          if (this.question.length === 0) {
            return
          }
          this.choiceA = data.choices[0]
          this.choiceB = data.choices[1]
          this.answeredBy.A = data.answered_by[0] ? data.answered_by[0] : ''
          this.answeredBy.B = data.answered_by[1] ? data.answered_by[1] : ''
        })
        .catch(error => {
          console.error('getNextQuestion Error:', error)
        })
    },
    submitAnswer (answer) {
      // Call API to submit answer
      fetch(`${process.env.VUE_APP_BACKEND_URL}/api/quiz`, {
        method: 'POST',
        body: JSON.stringify({ quiz_id: this.questionId, answer: answer, username: this.nickname }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'answerQuiz success') {
            this.isAnswered = true
            if (answer === 'A') {
              if (this.answeredBy.A.length === 0) {
                this.answeredBy.A = [this.nickname]
              } else {
                this.answeredBy.A.push(this.nickname)
              }
            } else {
              if (this.answeredBy.B.length === 0) {
                this.answeredBy.B = [this.nickname]
              } else {
                this.answeredBy.B.push(this.nickname)
              }
            }
          }
        })
        .catch(error => {
          console.error('submitAnswer Error:', error)
        })
    },
    submitQuiz () {
      const quizData = {
        question: this.setQuestion,
        choices: [this.choiceA, this.choiceB],
        author: this.nickname
      }

      // Call API to submit quiz
      fetch(`${process.env.VUE_APP_BACKEND_URL}/api/quiz`, {
        method: 'PUT',
        body: JSON.stringify(quizData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            // 清空表單
            this.setQuestion = ''
            this.choiceA = ''
            this.choiceB = ''

            this.isSubmitSuccess = true
            console.log(this.isSubmitSuccess)
            setTimeout(() => {
              this.isSubmitSuccess = false
              console.log(this.isSubmitSuccess)
            }, 3000)
          } else {
            console.error('Failed to submit quiz.')
          }
          this.isSetQuestion = false
        })
        .catch(error => {
          console.error('getNextQuestion Error:', error)
        })
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}

.col-6 {
  width: 50%; /* 將每個區塊寬度設置為一半 */
}

/* 每個使用者名稱區塊的樣式 */
.user-name {
  margin-right: 10px; /* 設置使用者名稱區塊之間的右邊距 */
  display: inline-flex;
}
</style>
