<template>
  <div class="topic">
    <h1>HELLO WORLD</h1>
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
  width: 100%;
  background-color: lightsalmon;
}
</style>
