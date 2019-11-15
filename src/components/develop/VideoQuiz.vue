<template>
  <div class="videoQuiz">
    <div class="container">
      <h2>¿Qué es la deuda pública?</h2>
      <button
        v-if="!ShowVid"
        type="button"
        class="btn btn-success"
        @click="toggleVideo"
      >
        {{ bOpen }}
      </button>
      <button
        v-if="!ShowVid"
        type="button"
        class="btn btn-danger"
        @click="toggleVideo"
      >
        {{ bClose }}
      </button>
      <MyVideo v-show="showVid"></MyVideo>
    </div>
    <!-- <MyQuiz></MyQuiz> -->
    <NewQuiz url="https://api.myjson.com/bins/92ub2">
      <div id="title" slot="intro" slot-scope="props">{{ props.title }}.</div>
      <div id="ending" slot="results" slot-scope="props">
        <h2>WOW! TUS RESULTADOS:</h2>
        <p id="pAnswer">
          Obtuviste {{ props.correct }} respuesta/s correcta/s de
          {{ props.length }} preguntas. <br />
          Tu porcentaje de aciertos fué: {{ props.perc }}%.
        </p>
      </div>
    </NewQuiz>
  </div>
</template>

<script>
import MyVideo from "../develop/vid/MyVideo";
import MyQuiz from "@/components/develop/quiz/MyQuiz.vue";
export default {
  name: "VideoQuiz",
  data: function() {
    return {
      showVid: false,
      bOpen: "Ver Video",
      bClose: "Cerrar Video"
    };
  },
  component: {
    MyVideo,
    MyQuiz
  },
  methods: {
    toggleVideo: function() {
      this.showVid ^= true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.videoQuiz {
  background-color: rgba(5, 71, 31, 0.3);
  height: 100vh;
}
#title {
  font-size: 27px;
  font-weight: 500;
}
btn.btn-success {
  font-size: 27px;
}
.container {
  padding-top: 7%;
}
#ending {
  font-size: 23px;
}
#pAnswer {
  padding: 0 15%;
}
</style>
