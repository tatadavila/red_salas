<template>
  <div class="videoQuiz">
    <div class="container">
      <h2>¿Qué es la deuda pública?</h2>
      <button
        v-if="ShowB"
        type="button"
        class="btn btn-success"
        @click="toggleVideo"
      >
        {{ bOpen }}
      </button>
      <button
        v-if="!ShowB"
        type="button"
        class="btn btn-danger"
        @click="toggleVideo"
      >
        {{ bClose }}
      </button>
      <MyVideo v-show="showVid"></MyVideo>
    </div>
    <!-- <MyQuiz></MyQuiz> -->
    <NewQuiz url="https://api.myjson.com/bins/uzei2" :key="renderKey">
      <div id="title" slot="intro" slot-scope="props">
        <h1>BIENVENIDO/A</h1>
        {{ props.title }}.
      </div>
      <div id="ending" slot="results" slot-scope="props">
        <h2>WOW! TUS RESULTADOS:</h2>
        <p id="pAnswer">
          Obtuviste {{ props.correct }} respuesta/s correcta/s de
          {{ props.length }} preguntas. <br />
          Tu porcentaje de aciertos fué: {{ props.perc }}%.
        </p>
        <button @click="reRender" type="button" class="btn btn-info">
          Reiniciar
        </button>
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
      ShowB: true,
      bOpen: "Ver Video",
      bClose: "Cerrar Video",
      renderKey: 1
    };
  },
  component: {
    MyVideo,
    MyQuiz
  },
  methods: {
    toggleVideo: function() {
      this.showVid ^= true;
      this.ShowB = !this.ShowB;
    },
    reRender() {
      this.renderKey++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.videoQuiz {
  background-color: rgba(5, 71, 31, 0.3);
  height: auto;
  padding-bottom: 23%;
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
