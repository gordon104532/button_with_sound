<template>
  <div id="quiz" class="container mt-3">
    <h1>大家認識的波普貓</h1>
    <h5>2024的活動結束了，明年見 (嗎?  (｡•ㅅ•｡)♡</h5>
    <br>
    <div v-if="!nickname">
      <br>
      這裡輸入你的名字，不是輸入你認識的波普貓(這個等會兒):
      <div class="form-group">
        <input type="text" class="col-4 mx-auto form-control" v-model="nicknameInput" placeholder="輸入名稱">
      </div>
      <button class="btn btn-primary mt-2" @click="setNickname">確定名稱</button>
    </div>
    <div v-else >
      <div v-if="!quizStarted">
        <h3>Hi {{ nickname }} ᓚᘏᗢ</h3>
        <!-- <h6 style="font-size:medium">(建議先選擇答題再出題)</h6> -->
        </div>
      <div class="d-grid gap-2 d-md-block mx-auto" v-if="!quizStarted">
        <button class="btn btn-primary mx-2" @click="startQuiz">答題</button>
        <!-- <button class="btn btn-primary mx-2" @click="isSetQuestion = !isSetQuestion">出題</button> -->
        <button class="btn btn-primary mx-2" @click="getQuestionList">列出所有題目</button>
        <div class="mb-3" v-show="isSetQuestion">
          <br>
          <div class="alert alert-success d-flex align-items-center" role="alert" v-if="isSubmitSuccess">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
              題目建立成功！
            </div>
          </div>

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
          <h3>你已經回答過所有題目了，去打蘑菇吧!</h3>
          <br>
          <h4>特別感謝:</h4>
          <h5>一尾懶鯉魚 大哥哥</h5>
          <h5>白澤 大哥哥</h5>
          <h5>吐司 大哥哥</h5>
          <br>
          <!-- 顯示所有題目 -->
          <button class="btn btn-primary mx-2 mt-2" @click="getQuestionList">列出所有題目</button>
            <br>
          <div class="d-grid gap-2 d-md-block mx-auto">
              <div v-for="(quiz, key) in quizzes" :key="key">
                <div class="mx-auto">
                <!-- 使用條件渲染來顯示不同的內容 -->
                <div v-if="quiz.reported">
                  <h4>已舉報成功</h4>
                </div>
                <div v-else>
                  <button class="btn btn-warning btn-sm" @click="reportQuestion(key)">{{ quiz.reportChecked ? '真的要舉報嗎?' : '舉報' }}</button>
                </div>
                  <h2 class="mt-4" style="font-size:large">出題者: {{ quiz.author }}</h2>
                  <h2 class="mt" >Q: {{ quiz.question }}</h2>
                </div>

                <!-- 包含誰回答了題目 -->
                <div class="row">
                  <div class="col-6">
                    <h2 class="mt-4">{{ quiz.choices[0] }}</h2><h2 class="mt-2" style="font-size:large">共 {{ quiz.answered_by[0].length }} 人</h2>
                    <div class="user-names">
                      <span v-for="(user, index) in quiz.answered_by[0]" :key="index" class="user-name">{{ user }}</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <h2 class="mt-4">{{ quiz.choices[1] }}</h2><h2 class="mt-2" style="font-size:large">共 {{ quiz.answered_by[1].length }} 人</h2>
                    <div class="user-names">
                      <span v-for="(user, index) in quiz.answered_by[1]" :key="index" class="user-name">{{ user }}</span>
                    </div>
                  </div>
                </div>
                <br>
                <h3> ~~~~~~~~~~~~~~~~~~~~ </h3>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div v-on:click="clickMushroom">
      <img id="cuteGif" src="../assets/img/mushroom.gif" alt="Mushroom GIF" style="width: 200px; height: 200px;">
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
      cuteGif: null,
      nicknameInput: '',
      nickname: '波寶',
      quizStarted: false,
      author: '',
      questionId: '',
      question: '',
      choiceA: '',
      choiceB: '',
      isAnswered: false,
      answeredBy: {
        A: [],
        B: []
      },
      isSetQuestion: false,
      isSubmitSuccess: false,
      setQuestion: '',
      quizzes: {},
      staticQuizzes: {
        0: {
          id: '1715350200',
          question: 'ㄅㄆㄇ假日睡覺長度是?',
          choices: [
            '17小時',
            '2/3天'],
          answered_by: [
            [
              '沙發波普貓',
              '離家出走ㄉ',
              '甦洗',
              'airmark',
              '管理員伯伯',
              'Jason',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '一日波寶',
              'Pc',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉',
              'Isola'
            ],
            [
              '冰',
              '漂浮黑喵',
              'O口O',
              '窩不知道'
            ]
          ],
          author: 'airmark'
        },
        1: {
          id: '1715350232',
          question: '喜歡喝什麼',
          choices: [
            '手搖',
            '酒'],
          answered_by: [
            [
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              'airmark',
              '管理員伯伯',
              'Jason',
              '卡門',
              '魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              'Pc',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ],
            [
              '洋蔥',
              '紅鯉魚',
              '冰',
              '窩不知道'
            ]
          ],
          author: 'airmark'
        },
        2: {
          id: '1715350330',
          question: '中午後才在公司出現是因為?',
          choices: [
            '董事長想什麼時候出現就什麼時候出現',
            'ㄅ了'],
          answered_by: [
            [
              '管理員伯伯',
              '洋蔥',
              '紅鯉魚',
              '波寶',
              '漂浮黑喵',
              'Pc',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '窩不知道',
              '永恆沁天',
              '貓臉'
            ],
            [
              '沙發波普貓',
              'airmark',
              '離家出走ㄉ',
              '甦洗',
              'Jason',
              '卡門',
              '魚',
              '自然',
              '店員',
              '波堡',
              '冰',
              '一日波寶',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '波普貓'
            ]
          ],
          author: 'airmark'
        },
        3: {
          id: '1715350381',
          question: '波普貓睡著了，請問是在哪?',
          choices: [
            '沙發',
            'sofa'
          ],
          answered_by: [
            [
              '甦洗',
              '離家出走ㄉ',
              'airmark',
              'Jason',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              'ㄒ',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '窩不知道',
              '貓臉'
            ],
            [
              '冰',
              '酷',
              '波普貓'
            ]
          ],
          author: 'airmark'
        },
        4: {
          id: '1715350584',
          question: '堡主在凌晨三點突然在聊天室留言，請問是什麼狀況',
          choices: [
            '睡什麼睡，肯定是一直玩到半夜啊',
            '約莫晚上8、9點失去意識，然後隔天凌晨3點剛醒'
          ],
          answered_by: [
            [
              '卡門',
              'Pc'
            ],
            [
              'airmark',
              '離家出走ㄉ',
              '甦洗',
              'Jason',
              '管理員伯伯',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '窩不知道',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉',
              'okk',
              'Isola'
            ]
          ],
          author: 'airmark'
        },
        5: {
          id: '1715350697',
          question: '為什麼停車在比較遠的地方',
          choices: [
            '最菜',
            '董事長體諒下屬'
          ],
          answered_by: [
            [
              '離家出走ㄉ',
              'Jason',
              '管理員伯伯',
              '卡門',
              '魚',
              '自然',
              '店員',
              '波寶',
              '冰',
              '草芽',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '鱷魚',
              '酷',
              '波普貓',
              'okk'
            ],
            [
              'airmark',
              '甦洗',
              '洋蔥',
              '紅鯉魚',
              '波堡',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              '白澤',
              '湯碗',
              '窩不知道',
              '永恆沁天',
              '貓臉'
            ]
          ],
          author: 'airmark'
        },
        6: {
          id: '1715351043',
          question: '以前10點、10點半就要關台了，現在變成是剛開，請問波普貓發生什麼事了',
          choices: [
            '長大了，可以開晚一點',
            '墮落了，可能是睡太晚，可能是摸太晚'
          ],
          answered_by: [
            [
              'airmark',
              '離家出走ㄉ',
              '魚',
              '波寶',
              '波黑',
              '六分鐘ㄉ惡夢',
              'O口O',
              '湯碗',
              '窩不知道',
              'okk'
            ],
            [
              '甦洗',
              '管理員伯伯',
              'Jason',
              '洋蔥',
              '卡門',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              'Pc',
              'ㄅㄅㄅ',
              '白澤',
              '樹木',
              '鱷魚',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ]
          ],
          author: 'airmark'
        },
        7: {
          id: '1715376159',
          question: '請問波普貓二周年周邊第一次設定的預購期限是哪時候?',
          choices: [
            '2024/01/14',
            '2025/01/14'
          ],
          answered_by: [
            [
              '六分鐘ㄉ惡夢',
              'O口O',
              '管理員伯伯',
              '樹木',
              '鱷魚',
              '酷',
              '洋蔥',
              '永恆沁天',
              '貓臉'
            ],
            [
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              'airmark',
              'ㄅㄅㄅ',
              '白澤',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '窩不知道',
              '波普貓',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '波堡'
        },
        8: {
          id: '1715378252',
          question: '請問在西瓜遊戲中，兩個小丑波普貓碰在一起會變成什麼？',
          choices: [
            '波普貓說好',
            '波普貓拿花扁你'
          ],
          answered_by: [
            [
              '樹木',
              '貓臉'
            ],
            [
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '波堡',
              '六分鐘ㄉ惡夢',
              'airmark',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '管理員伯伯',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '鱷魚',
              '酷',
              '洋蔥',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              'okk',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '波寶'
        },
        9: {
          id: '1715378348',
          question: '請問訂閱徽章在什麼時候姿勢會改變',
          choices: [
            '4.5年',
            '5年'
          ],
          answered_by: [
            [
              '漂浮黑喵',
              'Pc',
              '草芽',
              'airmark',
              'O口O',
              '樹木',
              '鱷魚',
              '窩不知道',
              '波普貓',
              'okk',
              '離家出走ㄉ',
              '卡門'
            ],
            [
              '波寶',
              '冰',
              '一日波寶',
              '波黑',
              '波堡',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤',
              '管理員伯伯',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '永恆沁天',
              '酷',
              '洋蔥',
              '貓臉'
            ]
          ],
          author: '波堡'
        },
        10: {
          id: '1715378368',
          question: '波普貓更喜歡',
          choices: [
            '貓',
            '狗'
          ],
          answered_by: [
            [
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '六分鐘ㄉ惡夢',
              'O口O',
              '管理員伯伯',
              '湯碗',
              '樹木',
              '永恆沁天',
              '貓臉'
            ],
            [
              '波寶',
              '草芽',
              '波黑',
              '波堡',
              'airmark',
              'ㄅㄅㄅ',
              '白澤',
              '紅鯉魚',
              'Jason',
              '鱷魚',
              '酷',
              '洋蔥',
              '窩不知道',
              '波普貓',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '波寶'
        },
        11: {
          id: '1715378391',
          question: '想吃炒飯還是炒麵',
          choices: [
            '炒飯',
            '炒麵'
          ],
          answered_by: [
            [
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '波堡',
              '六分鐘ㄉ惡夢',
              'airmark',
              '白澤',
              'O口O',
              '管理員伯伯',
              '湯碗',
              '鱷魚',
              '酷',
              '洋蔥',
              '永恆沁天',
              '貓臉',
              '卡門'
            ],
            [
              '波寶',
              '草芽',
              'ㄅㄅㄅ',
              'ㄅㄅㄅ',
              '紅鯉魚',
              'Jason',
              '樹木',
              '窩不知道',
              '波普貓',
              '離家出走ㄉ'
            ]
          ],
          author: '波堡'
        },
        12: {
          id: '1715378664',
          question: '對於波普貓來說，藍色代表：',
          choices: [
            '自由',
            '寧靜'
          ],
          answered_by: [
            [
              '波寶',
              '冰',
              '草芽',
              '波堡',
              'ㄅㄅㄅ',
              '管理員伯伯',
              'Jason',
              '湯碗',
              '樹木'
            ],
            [
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              'airmark',
              '白澤',
              'O口O',
              '紅鯉魚',
              '鱷魚',
              '窩不知道',
              '酷',
              '永恆沁天',
              '洋蔥',
              '波普貓',
              '貓臉',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '波寶'
        },
        13: {
          id: '1715581418',
          question: '蘑菇蘑菇～',
          choices: [
            '躲在市場的角落 ♪',
            '長在卯咪的髮隙 ♫'
          ],
          answered_by: [
            [
              '波黑',
              '波堡',
              '六分鐘ㄉ惡夢',
              '白澤',
              '管理員伯伯',
              '酷',
              '波普貓',
              '離家出走ㄉ'
            ],
            [
              '草芽',
              '漂浮黑喵',
              'airmark',
              'ㄅㄅㄅ',
              'O口O',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '樹木',
              '鱷魚',
              '洋蔥',
              '窩不知道',
              '永恆沁天',
              '貓臉',
              '冰',
              '卡門'
            ]
          ],
          author: '漂浮黑喵'
        },
        14: {
          id: '1715583711',
          question: '什麼才是真正的極品？',
          choices: [
            'ㄏ的極品，貝納頌',
            'ㄅ的極品，斷片卯'
          ],
          answered_by: [
            [
              '波堡',
              '酷'
            ],
            [
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              '漂浮黑喵',
              'airmark',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '管理員伯伯',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '洋蔥',
              '窩不知道',
              '波普貓',
              '貓臉',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '漂浮黑喵'
        },
        15: {
          id: '1715599357',
          question: '好像可以開個沒堵住的(?)沒賭注的賭盤，卯咪５／１４會幾點開台？',
          choices: [
            '中午（12:00）前',
            '中午（12:00）後'
          ],
          answered_by: [
            [
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '白澤'
            ],
            [
              'Pc',
              '草芽',
              '波黑',
              '波堡',
              '漂浮黑喵',
              'airmark',
              'O口O',
              '管理員伯伯',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '樹木',
              '鱷魚',
              '洋蔥',
              '窩不知道',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '漂浮黑喵'
        },
        16: {
          id: '1715603737',
          question: '下列何者為真',
          choices: [
            '好羨慕永遠17歲，喜歡唱歌聲音可愛，喜歡藍色，喜歡吃鮮奶油蛋糕和生魚片，曾經在英國留學，可以用英語流暢溝通，寫字好看還會填詞，時常掛在嘴邊的口頭禪是ㄏㄚˇ漏，被狗窩娛樂大老闆說讚逼八！！！能跟抖抖男神一起唱歌，上兩次The Phone Take給大家看後腦勺，唱歌的時候後腦杓一直動，擅長的歌是快樂崇拜，具有人形、卯咪、波普子、波普丁以及哈皮貓五種型態，其中以哈皮貓及波普丁型態可以變化成各種迷因，號稱會走路的迷因，更是利用波普丁的身份在各種球類運動場合大放異彩，每天都有好喝的鮮奶茶可以喝但不小心打翻過，喔還有綠豆湯耶。飲料有湯圓會被外送員打翻，自家冰箱永遠有好吃食材，還有自己買給自己的巧克力可以吃，週末的時候會吃雞排和火鍋，喜歡養男能但男能都不跟回家，不喜歡吃蒜頭杏仁和薑，玩你畫我猜是通靈王，汽車一直修修不完，每天彈性上班時間長達8小時，能夠一邊開車一邊開會，尾牙摸彩分子，開台時是個時空旅人追不到聊天室，生日的時候念一次表單哭一次哭到眼睛腫爛，生日實況有八分鐘讓觀眾不知道是本人在笑還是音檔在笑，因為波普家族擾人視線揪團時被其他台主念錯，吃弟弟裝的咖喱加熱後發現只有料沒有醬，過年打麻將沒贏過，超級喜歡看BL，可以一天在公司遇到好幾次主管，只要能睡的地方就可以急速斷片例如在沙發和車上斷片還會忘記拔眼鏡洗澡吹頭髮然後長香菇，週末每天睡覺時間上看17小時起床時間是英國時區，有一台訂製的沙發臥室車，2024年尾牙終於中獎，4/30原本打算中午下班，但因為忘記關鬧鐘後不能繼續躺所以變成中午到公司，還遇到主管陪搭電梯，出電梯就遇到在DC的同事，外號多到沒人記得起來包括睡魔、斷片貓、鞭炮貓、蟒摸、柳丁、卵咪的狗窩娛樂可愛擔當，隨時隨地都散發可愛漂亮的哈皮哈皮哈皮波普貓愛吃魚',
            '好羨慕永遠17歲，喜歡唱歌聲音可愛，喜歡藍色，喜歡吃鮮奶油蛋糕和生魚片，曾經在英國留學，可以用英語流暢溝通，寫字好看還會填詞，時常掛在嘴邊的口頭禪是ㄏㄚˇ漏，被狗窩娛樂大老闆說讚逼八！！！能跟抖抖男神一起唱歌，上兩次The Phone Take給大家看後腦勺，唱歌的時候後腦杓一直動，擅長的歌是快樂崇拜，具有人形、卯咪、波普子、波普丁以及哈皮貓五種型態，其中以哈皮貓及波普丁型態可以變化成各種迷因，號稱會走路的迷因，更是利用波普丁的身份在各種球類運動場合大放異彩，每天都有好喝的鮮奶茶可以喝但不小心打翻過，喔還有紅豆湯耶。飲料有粉圓會被外送員打翻，自家冰箱永遠有好吃食材，還有自己買給自己的巧克力可以吃，週末的時候會吃豬排和火鍋，喜歡養男能但男能都不跟回家，不喜歡吃芋頭杏仁和薑，玩你畫我猜是通靈王，汽車一直修修不完，每天彈性上班時間長達6小時，能夠一邊開車一邊開會，尾牙摸彩分母，開台時是個時空旅人追不到聊天室，生日的時候念一次表單哭一次哭到眼睛腫爛，生日實況有六分鐘讓觀眾不知道是本人在笑還是音檔在笑，因為波普家族擾人視線揪團時被其他台主念錯，吃弟弟裝的咖喱加熱後發現只有醬沒有料，過年打麻將沒輸過，超級喜歡看BL，可以一天在公司遇到好幾次主管，只要能睡的地方就可以急速斷片例如在沙發和車上斷片還會忘記拔眼鏡洗澡吹頭髮然後長香菇，週末每天睡覺時間上看17小時起床時間是英國時區，有一台訂製的沙發浴室車，2024年尾牙終於中獎，4/30原本打算中午下班，但因為忘記關鬧鐘後不能繼續躺所以變成中午到公司，還遇到主管陪搭電梯，出電梯就遇到在DC的同事，外號多到沒人記得起來包括睡魔、斷片貓、鞭炮貓、蟒摸、柳丁、卵咪的狗窩娛樂可愛擔當，隨時隨地都散發可愛漂亮的哈皮哈皮哈皮波普貓愛吃魚'
          ],
          answered_by: [
            [
              '六分鐘ㄉ惡夢',
              '白澤',
              'O口O',
              '鱷魚',
              '窩不知道',
              '永恆沁天'
            ],
            [
              '波堡',
              '漂浮黑喵',
              'airmark',
              'ㄅㄅㄅ',
              '管理員伯伯',
              '紅鯉魚',
              'Jason',
              '湯碗',
              '樹木',
              '洋蔥',
              '酷',
              '波普貓',
              '貓臉',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '波堡'
        },
        17: {
          id: '1715676805',
          question: '請問提摩和卯咪有什麼共同點？',
          choices: [
            '毛絨絨的很可愛',
            '頭上生菇很可愛'
          ],
          answered_by: [
            [
              '六分鐘ㄉ惡夢',
              '鱷魚',
              '酷'
            ],
            [
              '漂浮黑喵',
              'airmark',
              'Jason',
              '湯碗',
              '紅鯉魚',
              '樹木',
              '管理員伯伯',
              '洋蔥',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '白澤',
              '貓臉',
              '波堡',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '漂浮黑喵'
        },
        18: {
          id: '1715689808',
          question: '請問當波普貓點了一杯珍珠奶茶，他會得到什麼',
          choices: [
            '奶茶',
            '珍珠奶茶'
          ],
          answered_by: [
            [
              'airmark',
              '永恆沁天',
              '漂浮黑喵',
              '白澤',
              '貓臉',
              'Jason',
              '波堡',
              '冰',
              '卡門'
            ],
            [
              '波普貓',
              '紅鯉魚',
              '六分鐘ㄉ惡夢',
              '離家出走ㄉ'
            ]
          ],
          author: '鱷魚'
        },
        19: {
          id: '1715690335',
          question: '誰是當前2024最強的波黑!!!!',
          choices: [
            '伯伯',
            '卡門'
          ],
          answered_by: [
            [
              'airmark',
              '永恆沁天',
              '漂浮黑喵',
              '紅鯉魚',
              'Jason',
              '離家出走ㄉ',
              '卡門'
            ],
            [
              '波普貓',
              '白澤',
              '貓臉',
              '六分鐘ㄉ惡夢',
              '波堡',
              '冰'
            ]
          ],
          author: '波寶'
        },
        20: {
          id: '1715691142',
          question: '波普貓的歌單中，誰的歌比較多？',
          choices: [
            'Ed Sheeran',
            'Taylor Swift'
          ],
          answered_by: [
            [
              '紅鯉魚',
              'airmark',
              '貓臉',
              '波堡'
            ],
            [
              '波普貓',
              '漂浮黑喵',
              '永恆沁天',
              '白澤',
              '六分鐘ㄉ惡夢',
              'Jason',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '永恆沁天'
        },
        21: {
          id: '1715692491',
          question: '菜單上有香菜料理和茄子料理，會點',
          choices: [
            '香菜',
            '茄子'
          ],
          answered_by: [
            [
              '白澤'
            ],
            [
              '波普貓',
              '漂浮黑喵',
              '紅鯉魚',
              '永恆沁天',
              'airmark',
              '貓臉',
              '六分鐘ㄉ惡夢',
              'Jason',
              '波堡',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: 'Isola'
        },
        22: {
          id: '1715692784',
          question: '女裝的是誰',
          choices: [
            '貓臉',
            '伯伯'
          ],
          answered_by: [
            [
              '紅鯉魚',
              '波普貓',
              '漂浮黑喵',
              '永恆沁天',
              'airmark',
              '白澤',
              '六分鐘ㄉ惡夢',
              'Jason',
              'okk',
              '波堡',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ],
            [
              '貓臉'
            ]
          ],
          author: '藏鏡人'
        },
        23: {
          id: '1716147184',
          question: '波普丁是根據哪個神奇寶貝的原型被餅乾創造出來的？',
          choices: [
            '卡比獸',
            '胖丁'
          ],
          answered_by: [
            [],
            [
              '波堡',
              '六分鐘ㄉ惡夢'
            ]
          ],
          author: '卡門'
        },
        24: {
          id: '1716147667',
          question: '波普貓曾經在直播提過，她現實真的會：',
          choices: [
            '暈船',
            '暈車'
          ],
          answered_by: [
            [
              '波堡',
              '六分鐘ㄉ惡夢'
            ],
            []
          ],
          author: '卡門'
        },
        25: {
          id: '罐製_2',
          question: 'ㄅ主播的車最近哪裡壞了?',
          choices: [
            '變速箱',
            '車燈'
          ],
          answered_by: [
            [
              'airmark',
              '漂浮黑喵',
              'O口O'
            ],
            [
              '白澤',
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              'Jason',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '酷',
              '窩不知道',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        26: {
          id: '預設題0',
          question: '你自認為你是?',
          choices: [
            '波寶',
            '波黑'
          ],
          answered_by: [
            [
              '白澤',
              '離家出走ㄉ',
              '甦洗',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '酷',
              '波普貓',
              '貓臉',
              'Isola',
              'Isola'
            ],
            [
              'airmark',
              '沙發波普貓',
              'Jason',
              '自然',
              '店員',
              'Pc',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '窩不知道'
            ]
          ],
          author: '罐製'
        },
        27: {
          id: '預設題1',
          question: '波普貓愛吃魚的 "貓" 字代表的動物是?',
          choices: [
            '貓咪',
            '貓頭鷹'
          ],
          answered_by: [
            [
              '湯碗',
              '甦洗',
              'airmark',
              '白澤',
              '沙發波普貓',
              '離家出走ㄉ',
              'Jason',
              '管理員伯伯',
              '魚',
              '自然',
              '店員',
              '草芽',
              'O口O',
              '窩不知道',
              '永恆沁天',
              'okk'
            ],
            [
              '洋蔥',
              '卡門',
              '紅鯉魚',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '樹木',
              '鱷魚',
              '酷',
              '波普貓',
              '貓臉',
              'Isola'
            ]
          ],
          author: '罐製'
        },
        28: {
          id: '預設題10',
          question: '狗窩娛樂一月主題中，波普貓抱著的抱枕是?',
          choices: [
            '貓咪',
            '貓頭鷹'
          ],
          answered_by: [
            [
              'airmark',
              '沙發波普貓',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              'O口O',
              '湯碗',
              '鱷魚',
              '酷',
              'okk'
            ],
            [
              '白澤',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              'Jason',
              '卡門',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '樹木',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        29: {
          id: '預設題11',
          question: '波普貓生日三周目，跟一周目差了幾歲?',
          choices: [
            '2 歲',
            '0 歲'
          ],
          answered_by: [
            [
              '沙發波普貓',
              'Jason',
              'O口O',
              '湯碗',
              '樹木',
              '永恆沁天'
            ],
            [
              '甦洗',
              'airmark',
              '白澤',
              '離家出走ㄉ',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              'Pc',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '鱷魚',
              '酷',
              '窩不知道',
              '波普貓',
              '貓臉',
              'Isola'
            ]
          ],
          author: '罐製'
        },
        30: {
          id: '預設題12',
          question: '波普貓最近一次去的國家是?',
          choices: [
            '西班牙',
            '日本'
          ],
          answered_by: [
            [
              '甦洗',
              '自然',
              'Pc',
              '湯碗',
              '永恆沁天',
              '酷',
              '窩不知道'
            ],
            [
              'airmark',
              '白澤',
              'Jason',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '鱷魚',
              '波普貓',
              '貓臉',
              'okk',
              '2ㄏ'
            ]
          ],
          author: '罐製'
        },
        31: {
          id: '預設題13',
          question: '小奇點徽章要累計幾點才可以獲得吹風機?',
          choices: [
            '10,000點',
            '1,000點'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              'J',
              '沙發波普貓',
              'Jason',
              '離家出走ㄉ',
              '甦洗',
              '管理員伯伯',
              '卡門',
              'airrmark',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '酷',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ],
            [
              '鱷魚'
            ]
          ],
          author: '罐製'
        },
        32: {
          id: '預設題14',
          question: '十萬小奇點徽章是?',
          choices: [
            '早安美式鬆餅',
            '一定要吃到花好月圓'
          ],
          answered_by: [
            [
              '白澤',
              '沙發波普貓',
              '甦洗',
              'Jason',
              '紅鯉魚',
              '漂浮黑喵',
              'O口O',
              '鱷魚',
              '永恆沁天',
              '窩不知道'
            ],
            [
              'airmark',
              '離家出走ㄉ',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '樹木',
              '酷',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        33: {
          id: '預設題15',
          question: '波普貓壽司飯友上面的是?',
          choices: [
            '鮭魚',
            '鮪魚'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '甦洗',
              'Jason',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '波堡',
              '波寶',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '波普貓',
              '貓臉',
              'okk',
              'Isola'
            ],
            [
              '離家出走ㄉ',
              '店員',
              '冰',
              '永恆沁天',
              '酷',
              '窩不知道'
            ]
          ],
          author: '罐製'
        },
        34: {
          id: '預設題16',
          question: '波普貓是狗窩娛樂的?',
          choices: [
            '睡覺擔當',
            '可愛擔當'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              'Jason',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '波普貓',
              '窩不知道',
              '永恆沁天',
              '貓臉',
              'okk',
              'Isola'
            ],
            [
              '漂浮黑喵',
              '酷'
            ]
          ],
          author: '罐製'
        },
        35: {
          id: '預設題17',
          question: '哪裡比較適合開會?',
          choices: [
            '車上',
            '辦公室'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '甦洗',
              'Jason',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '窩不知道',
              '永恆沁天',
              '貓臉',
              'okk',
              'Isola'
            ],
            [
              '酷',
              '波普貓'
            ]
          ],
          author: '罐製'
        },
        36: {
          id: '預設題18',
          question: '喜歡的顏色是藍色所以iPhone的顏色是?',
          choices: [
            '紫色',
            '藍色'
          ],
          answered_by: [
            [
              'Jason',
              '白澤',
              '甦洗',
              '魚',
              '紅鯉魚',
              '波寶',
              '冰',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '六分鐘ㄉ惡夢',
              '鱷魚',
              '酷',
              '波普貓',
              '貓臉',
              'okk'
            ],
            [
              'airmark',
              '沙發波普貓',
              '離家出走ㄉ',
              '卡門',
              '管理員伯伯',
              '洋蔥',
              '店員',
              '自然',
              '波堡',
              '一日波寶',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '窩不知道',
              '永恆沁天'
            ]
          ],
          author: '罐製'
        },
        37: {
          id: '預設題19',
          question: '波普貓會在哪隻手指上戴戒指?',
          choices: [
            '右手食指、左手食指、左手小拇指',
            '右手食指、右手中指、左手食指'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '離家出走ㄉ',
              'Jason',
              '甦洗',
              '管理員伯伯',
              '卡門',
              '魚',
              '店員',
              '波堡',
              '波寶',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '窩不知道',
              '波普貓',
              '貓臉'
            ],
            [
              '沙發波普貓',
              '洋蔥',
              '紅鯉魚',
              '自然',
              '冰',
              '草芽',
              'O口O',
              '酷'
            ]
          ],
          author: '罐製'
        },
        38: {
          id: '預設題2',
          question: '波普貓愛吃魚的英文是?',
          choices: [
            'popecatengblue',
            'pepecatengblue'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '離家出走ㄉ',
              '沙發波普貓',
              '甦洗',
              'Jason',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ],
            [
              '六分鐘ㄉ惡夢',
              '窩不知道'
            ]
          ],
          author: '罐製'
        },
        39: {
          id: '預設題20',
          question: '人稱"日麻夢想摧毀者"是因為槓了甚麼牌而一戰成名?',
          choices: [
            '九萬',
            '九筒'
          ],
          answered_by: [
            [
              '白澤',
              'Jason',
              '管理員伯伯',
              '洋蔥',
              '店員',
              '一日波寶',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉',
              'okk'
            ],
            [
              '甦洗',
              'airmark',
              '沙發波普貓',
              '離家出走ㄉ',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '波堡',
              '波寶',
              '冰',
              '漂浮黑喵',
              '草芽',
              '酷'
            ]
          ],
          author: '罐製'
        },
        40: {
          id: '預設題21',
          question: '熱門精華"迷之大抖動-愛惹"，當時ㄅ主播的台詞是?',
          choices: [
            '22222',
            'RRRRR'
          ],
          answered_by: [
            [
              '白澤',
              '甦洗',
              'Jason',
              '管理員伯伯',
              '魚',
              '冰',
              '漂浮黑喵',
              '六分鐘ㄉ惡夢',
              '鱷魚'
            ],
            [
              'airmark',
              '沙發波普貓',
              '離家出走ㄉ',
              '洋蔥',
              '卡門',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '波寶',
              '一日波寶',
              '草芽',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '酷',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        41: {
          id: '預設題22',
          question: '以下兩個食物怎麼選?',
          choices: [
            '炸起司豬排',
            '火鍋'
          ],
          answered_by: [
            [
              'airmark',
              'Jason',
              '離家出走ㄉ',
              '甦洗',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '波黑',
              '六分鐘ㄉ惡夢',
              '湯碗',
              '鱷魚',
              '酷',
              '窩不知道',
              '波普貓',
              '貓臉'
            ],
            [
              '白澤',
              '沙發波普貓',
              '漂浮黑喵',
              '草芽',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '永恆沁天'
            ]
          ],
          author: '罐製'
        },
        42: {
          id: '預設題23',
          question: 'ㄅ主播追不到聊天室的時候，我們可以把這個現象稱為?',
          choices: [
            '在看VOD',
            '時空旅人'
          ],
          answered_by: [
            [
              '六分鐘ㄉ惡夢'
            ],
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              'Jason',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '永恆沁天',
              '窩不知道',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        43: {
          id: '預設題24',
          question: '辦公室的甚麼可以帶來小雀幸?',
          choices: [
            '兩個零食櫃',
            '午休睡超過時間'
          ],
          answered_by: [
            [
              '甦洗',
              'Jason',
              '管理員伯伯',
              '洋蔥',
              '自然',
              '店員',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '酷',
              '永恆沁天',
              '波普貓'
            ],
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '離家出走ㄉ',
              '卡門',
              '魚',
              '紅鯉魚',
              '波堡',
              '波寶',
              '草芽',
              '波黑',
              'O口O',
              '樹木',
              '鱷魚',
              '窩不知道',
              '貓臉',
              'okk'
            ]
          ],
          author: '罐製'
        },
        44: {
          id: '預設題25',
          question: '二周年的驚喜翻唱歌名是?',
          choices: [
            'Unicorn',
            '油膩控'
          ],
          answered_by: [
            [
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '紅鯉魚',
              '店員',
              '一日波寶',
              '漂浮黑喵',
              '六分鐘ㄉ惡夢',
              'O口O',
              '樹木',
              '鱷魚',
              '酷',
              '波普貓'
            ],
            [
              'airmark',
              '白澤',
              '甦洗',
              'Jason',
              '洋蔥',
              '魚',
              '自然',
              '波堡',
              '波寶',
              '冰',
              '草芽',
              'Pc',
              '波黑',
              'ㄅㄅㄅ',
              '湯碗',
              '窩不知道',
              '永恆沁天',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        45: {
          id: '預設題26',
          question: '2023生日發布的Cover曲是?',
          choices: [
            'Young and Beautiful',
            'Summertime Sadness'
          ],
          answered_by: [
            [
              '湯碗',
              '白澤',
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              'Jason',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '自然',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '鱷魚',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ],
            [
              'airmark',
              '紅鯉魚',
              '店員',
              '波堡',
              '草芽',
              '波黑',
              '酷'
            ]
          ],
          author: '罐製'
        },
        46: {
          id: '預設題27',
          question: '在波普貓人設中是永遠的17歲，在甚麼特殊的情況下會變18歲?',
          choices: [
            '遇上要開車的時候',
            '遇上要喝酒的時候'
          ],
          answered_by: [
            [
              '甦洗',
              '魚',
              '冰',
              '漂浮黑喵',
              'O口O',
              '鱷魚',
              '永恆沁天'
            ],
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              'Jason',
              '洋蔥',
              '卡門',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '一日波寶',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '樹木',
              '窩不知道',
              '酷',
              '波普貓',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        47: {
          id: '預設題28',
          question: '在波普貓人設中，指甲油配色是哪隻手指頭不同色?',
          choices: [
            '無名指',
            '食指'
          ],
          answered_by: [
            [
              'airmark',
              '沙發波普貓',
              '管理員伯伯',
              'Jason',
              '洋蔥',
              '紅鯉魚',
              '波堡',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '湯碗',
              '樹木',
              '窩不知道',
              '貓臉'
            ],
            [
              '白澤',
              '離家出走ㄉ',
              '甦洗',
              '卡門',
              '魚',
              '自然',
              '店員',
              '波寶',
              '冰',
              'Pc',
              '草芽',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '鱷魚',
              '酷',
              '波普貓',
              '永恆沁天',
              'okk'
            ]
          ],
          author: '罐製'
        },
        48: {
          id: '預設題29',
          question: '在波普貓人設中，代表色紫藍色的色碼是?',
          choices: [
            '#8793BD',
            '#2a5dad'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              'Jason',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '紅鯉魚',
              '自然',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '永恆沁天',
              '窩不知道',
              '酷',
              '波普貓',
              '貓臉'
            ],
            [
              '魚',
              '店員',
              '波堡',
              'Pc',
              '草芽',
              '鱷魚'
            ]
          ],
          author: '罐製'
        },
        49: {
          id: '預設題3',
          question: '波普貓淚痣是在哪邊?',
          choices: [
            '左邊',
            '右邊'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              'Jason',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              '洋蔥',
              '卡門',
              '魚',
              '紅鯉魚',
              '納納',
              '自然',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '酷',
              '窩不知道',
              '波普貓',
              '貓臉',
              'okk'
            ],
            [
              '沙發波普貓',
              '我速誰',
              '店員',
              '草芽',
              '湯碗',
              '永恆沁天',
              '鱷魚'
            ]
          ],
          author: '罐製'
        },
        50: {
          id: '預設題30',
          question: '波普貓於二周年掛軸上哼出來的音符是?',
          choices: [
            '四分音符',
            '八分音符'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '管理員伯伯',
              '洋蔥',
              '波堡',
              '冰',
              '漂浮黑喵',
              '波黑',
              '六分鐘ㄉ惡夢',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '貓臉'
            ],
            [
              '甦洗',
              'Jason',
              '離家出走ㄉ',
              '卡門',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波寶',
              '一日波寶',
              'Pc',
              '草芽',
              'ㄅㄅㄅ',
              '永恆沁天',
              '窩不知道',
              '波普貓'
            ]
          ],
          author: '罐製'
        },
        51: {
          id: '預設題31',
          question: '波普貓二周年掛軸上一共有幾隻貓(含波普貓本貓)?',
          choices: [
            '11隻',
            '17隻'
          ],
          answered_by: [
            [
              '沙發波普貓',
              '管理員伯伯',
              '魚',
              '波堡',
              '一日波寶',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '酷',
              '窩不知道'
            ],
            [
              'airmark',
              '白澤',
              '甦洗',
              '離家出走ㄉ',
              'Jason',
              '洋蔥',
              '卡門',
              '紅鯉魚',
              '自然',
              '店員',
              '波寶',
              '冰',
              '漂浮黑喵',
              '草芽',
              '六分鐘ㄉ惡夢',
              '湯碗',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '波普貓',
              '貓臉',
              'okk',
              'Isola'
            ]
          ],
          author: '罐製'
        },
        52: {
          id: '預設題32',
          question: '2023波普貓聖誕明信片的造型是?',
          choices: [
            '唱詩班',
            '天使'
          ],
          answered_by: [
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '樹木',
              '鱷魚',
              '酷',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉'
            ],
            [
              '甦洗',
              'Jason',
              '店員',
              'O口O',
              '湯碗'
            ]
          ],
          author: '罐製'
        },
        53: {
          id: '預設題33',
          question: '波普貓曾喜歡哪位華語男歌手，並在他爆出私生活爭議後開台唱他的歌?',
          choices: [
            '潘瑋柏',
            '王力宏'
          ],
          answered_by: [
            [
              '紅鯉魚',
              '樹木',
              '鱷魚',
              '永恆沁天',
              '窩不知道'
            ],
            [
              '波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '波堡',
              '六分鐘ㄉ惡夢',
              'airmark',
              'ㄅㄅㄅ',
              '白澤',
              'O口O',
              '管理員伯伯',
              'Jason',
              '湯碗',
              '酷',
              '洋蔥',
              '波普貓',
              '貓臉',
              'Isola',
              '冰',
              '離家出走ㄉ',
              '卡門'
            ]
          ],
          author: '罐製'
        },
        54: {
          id: '預設題4',
          question: '波普貓比較早的soundcloud帳號是哪一個?',
          choices: [
            'engblue (EngBlue波普貓在英格藍)',
            'pope-cat (波普貓PopeCat)'
          ],
          answered_by: [
            [
              '白澤',
              'airmark',
              '甦洗',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              'Jason',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '鱷魚',
              '酷',
              '貓臉',
              'okk'
            ],
            [
              '六分鐘ㄉ惡夢',
              '湯碗',
              '窩不知道',
              '永恆沁天',
              '波普貓'
            ]
          ],
          author: '罐製'
        },
        55: {
          id: '預設題5',
          question: '波普貓精華YT頻道是?',
          choices: [
            '@PopecatLive (波普貓 Live)',
            '@popecatengblue (PopeCat波普貓)'
          ],
          answered_by: [
            [
              '白澤',
              'Jason',
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '紅鯉魚',
              '波堡',
              '波寶',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '樹木',
              '永恆沁天',
              '鱷魚',
              '酷',
              '波普貓'
            ],
            [
              'airmark',
              '魚',
              '自然',
              '店員',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '湯碗',
              '窩不知道',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        56: {
          id: '預設題6',
          question: '波普貓DC群組名稱是?',
          choices: [
            '波普貓的第一個家',
            '波普貓的小城堡'
          ],
          answered_by: [
            [],
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              'Jason',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '一日波寶',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '窩不知道',
              '永恆沁天',
              '波普貓',
              '貓臉',
              'okk'
            ]
          ],
          author: '罐製'
        },
        57: {
          id: '預設題7',
          question: '大家常說的 "ㄅ一下", "ㄅ了" 指的是?',
          choices: [
            '斷片',
            '依上下文情境都適用'
          ],
          answered_by: [
            [
              'Jason',
              '白澤',
              '沙發波普貓',
              '魚',
              '紅鯉魚',
              '店員',
              '波堡',
              '冰',
              '波黑',
              '鱷魚',
              '窩不知道',
              '永恆沁天'
            ],
            [
              'airmark',
              '甦洗',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '自然',
              '波寶',
              '一日波寶',
              '漂浮黑喵',
              '草芽',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '酷',
              '波普貓',
              '貓臉',
              'okk'
            ]
          ],
          author: '罐製'
        },
        58: {
          id: '預設題8',
          question: '波普貓所屬的團體是?',
          choices: [
            '貓窩娛樂',
            '狗窩娛樂'
          ],
          answered_by: [
            [
              'Jason',
              '店員',
              '波寶',
              '一日波寶',
              '窩不知道'
            ],
            [
              'airmark',
              '白澤',
              '甦洗',
              '沙發波普貓',
              '離家出走ㄉ',
              '管理員伯伯',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '波堡',
              '冰',
              '漂浮黑喵',
              'Pc',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              'O口O',
              '湯碗',
              '樹木',
              '鱷魚',
              '酷',
              '波普貓',
              '永恆沁天',
              '貓臉'
            ]
          ],
          author: '罐製'
        },
        59: {
          id: '預設題9',
          question: '波普貓生日是?',
          choices: [
            '5/14',
            '整年都是'
          ],
          answered_by: [
            [
              '管理員伯伯',
              'Jason',
              '一日波寶',
              'O口O',
              '酷',
              '波普貓'
            ],
            [
              'airmark',
              '白澤',
              '沙發波普貓',
              '離家出走ㄉ',
              '甦洗',
              '卡門',
              '洋蔥',
              '魚',
              '紅鯉魚',
              '自然',
              '店員',
              '波堡',
              '波寶',
              '冰',
              '漂浮黑喵',
              '草芽',
              '波黑',
              '六分鐘ㄉ惡夢',
              'ㄅㄅㄅ',
              '湯碗',
              '樹木',
              '鱷魚',
              '窩不知道',
              '永恆沁天',
              '貓臉'
            ]
          ],
          author: '罐製'
        }
      },
      staticQuizIndex: -1
    }
  },
  mounted () {
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
    if (getParameterByName('username')) {
      this.nickname = getParameterByName('username')
    }

    this.cuteGif = document.getElementById('cuteGif')
    // 每30秒執行一次動畫
    setTimeout(() => {
      this.animate()
    }, 30000)
  },
  methods: {
    setNickname () {
      this.nickname = this.nicknameInput.trim()
    },
    startQuiz () {
      this.quizStarted = true
      this.getNextQuestion()
    },
    getNextQuestion () {
      this.isAnswered = false

      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'false') {
        if (this.staticQuizIndex === this.staticQuizzes.length) {
          this.question = ''
          return
        }

        this.staticQuizIndex++
        this.author = this.staticQuizzes[this.staticQuizIndex].author
        this.questionId = this.staticQuizzes[this.staticQuizIndex].id
        this.question = this.staticQuizzes[this.staticQuizIndex].question
        if (this.question.length === 0) {
          return
        }
        this.choiceA = this.staticQuizzes[this.staticQuizIndex].choices[0]
        this.choiceB = this.staticQuizzes[this.staticQuizIndex].choices[1]
        this.answeredBy.A = this.staticQuizzes[this.staticQuizIndex].answered_by[0] ? this.staticQuizzes[this.staticQuizIndex].answered_by[0] : ''
        this.answeredBy.B = this.staticQuizzes[this.staticQuizIndex].answered_by[1] ? this.staticQuizzes[this.staticQuizIndex].answered_by[1] : ''
        console.log(this.choiceA)
        console.log(this.answeredBy.A)
        return
      }

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
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'false') {
        this.isAnswered = true
        return
      }

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
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'true') {
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
            if (!response.ok) {
              console.error('Failed to submit quiz.')
            }
          })
          .catch(error => {
            console.error('getNextQuestion Error:', error)
          })
      }

      // 清空表單
      this.setQuestion = ''
      this.choiceA = ''
      this.choiceB = ''
      this.isSubmitSuccess = true
      setTimeout(() => {
        this.isSubmitSuccess = false
        this.isSetQuestion = false
      }, 2000)
    },
    getQuestionList () {
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'false') {
        this.quizStarted = true
        this.quizzes = this.staticQuizzes
        return
      }
      // Call API to get question list
      fetch(`${process.env.VUE_APP_BACKEND_URL}/api/quiz/list`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => {
          this.quizzes = data
        })
        .catch(error => {
          console.error('getQuestionList Error:', error)
        })
    },
    reportQuestion (key) {
      if (`${process.env.VUE_APP_BACKEND_SWITCH}` === 'false') {
        return
      }

      if (this.quizzes[key].reportChecked) {
        // Call API to report question
        fetch(`${process.env.VUE_APP_BACKEND_URL}/api/quiz?qid=${key}&username=${this.nickname}`, {
          method: 'DELETE'
        })
          .then(response => {
            if (response.ok) {
              console.log('reportQuestion success key: ', key)
            }
          })
          .catch(error => {
            console.error('reportQuestion err:', error, ', key: ', key)
          })

        this.quizzes[key].reported = true
      } else {
        this.quizzes[key].reportChecked = true
      }
    },
    clickMushroom () {
      this.$router.push('/mole?username=' + this.nickname)
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

#cuteGif {
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
}
</style>
