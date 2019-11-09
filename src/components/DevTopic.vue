<template>
  <div class="topic">
  </div>
</template>

<script>
export default {
  name: "DevTopic",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.topic {
  height: 90vh;
  width: 100%;
  /* background-color: lightsalmon;  */
}
#topicImg1 {
  margin-bottom: 3%;
  margin-top: -3%;
  object-fit: contain;
}
</style>
