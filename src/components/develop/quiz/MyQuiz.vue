<template>
  <div class="myQuiz">
    <h1>{{ quiz.title }}</h1>
    <div
      id="questionCont"
      v-for="(question, index) in quiz.questions"
      :key="index"
    >
      <div v-show="index === questionIndex">
        <h2 id="questionText">{{ question.text }}</h2>
        <ol>
          <li v-for="response in question.responses" :key="response">
            <br />
            <label>
              <input
                type="radio"
                v-bind:value="response.correct"
                v-bind:name="index"
                v-model="userResponses[index]"
              />
              {{ response.text }}
            </label>
          </li>
        </ol>
        <br />
        <button v-if="questionIndex > 0" v-on:click="prev">Anterior</button>
        <button v-on:click="next">Suiguiente</button>
      </div>
    </div>
    <div id="finalScore" v-show="questionIndex === quiz.questions.length">
      <h2>Test Finalizado</h2>
      <br />
      <p>Puntaje Total: {{ score() }} / {{ quiz.questions.length }}</p>
    </div>
  </div>
</template>

<script>
var quiz = {
  title: "TEST SOBRE DEUDA PUBLICA DE COLOMBIA",
  questions: [
    {
      text:
        "1. La deuda total del sector publico colombiano a fecha 31 de diciembre del 2.018 ascendió a:",
      responses: [
        { text: "a) $300.00 billones" },
        { text: "b) $467.30 billones" },
        { text: "c) $576.90 billones", correct: true },
        { text: "d) $600.00 billones" }
      ]
    },
    {
      text:
        "2. La deuda de los territorios nacionales a nivel general a fecha 31 de dic del 2.018 ascendió a:",
      responses: [
        { text: "a) $48.97 billones", correct: true },
        { text: "b) $36.29 billones" },
        { text: "c) $28.61 billones" },
        { text: "d) $13.05 billones" }
      ]
    },
    {
      text:
        "3. La deuda de los territorios nacionales a nivel general a fecha 31 de dic del 2.018 ascendió a:La deuda externa de Colombia al corte del 31 de diciembre del 2.018 ascendió a:",
      responses: [
        { text: "a) $188.00 billones" },
        { text: "b) $233.16 billones", correct: true },
        { text: "c) 288.49 billnes" },
        { text: "d) 316.00 billones" }
      ]
    },
    {
      text:
        "4. La deuda externa de Colombia al corte del 31 de diciembre del 2.018 ascendió a:",
      responses: [
        { text: "a) $303.18 billones" },
        { text: "b) $$320.01 billones" },
        { text: "c) 374.00 billones" },
        { text: "d) 343.74 billones", correct: true }
      ]
    }
  ]
};
export default {
  name: "MyQuiz",
  data: function() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: Array(quiz.questions.length).fill(false)
    };
  },
  methods: {
    next: function() {
      this.questionIndex++;
    },
    prev: function() {
      this.questionIndex--;
    },
    score: function() {
      return this.userResponses.filter(function(val) {
        return val;
      }).length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.myQuiz {
   padding-top: 37px;
   padding-bottom: 47px;
}
#questionText {
  padding-left: 7%;
}
#finalScore {
  margin-top: 7%;
  font-size: 37px;
}
button {
  font-size: 77%;
}
#questionCont {
  font-size: 21px;
}
</style>
