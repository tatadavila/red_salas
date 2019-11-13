<template>
  <div class="videoQuiz">
    <MyVideo></MyVideo>
    <MyQuiz></MyQuiz>
  </div>
</template>

<script>
import MyVideo from "../develop/vid/MyVideo";
import MyQuiz from "@/components/develop/quiz/MyQuiz.vue";
export default {
  name: "VideoQuiz",
  component: {
    MyVideo,
    MyQuiz
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.videoQuiz {
  background-color: blue;
}
</style>
