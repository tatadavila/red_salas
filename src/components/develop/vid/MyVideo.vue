<template>
  <div class="myVideo">
    <video width="87%" height="500" controls>
      <source
        src="@/assets/video/que_es_la_deuda_publica_.webm"
        type="video/webm"
      />
      Tu navegador no acepta este tipo de media, recomendamos usar Google
      Chrome.
    </video>
  </div>
</template>

<script>
export default {
  name: "MyVideo"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="css">
.myVideo {
  padding-top: 17px;
}
</style>
