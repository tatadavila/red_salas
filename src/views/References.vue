<template>
  <div class="refPage">
    <div class="text-wrapper">
      <h1>REFERENTES BIBLIOGRÁFICOS:</h1>
      <ul align="center" id="refList">
        <li>
          Text Celebriti (2019) “la deuda pública” Recuperado de
          <a href="https://www.cerebriti.com">https://www.cerebriti.com</a>
        </li>
        <li>
          Youtube (2019) “sonido de introducción” Recuperado de
          <a href="https://www.youtube.com/watch?v=rhNoYyXLo2k"
            >https://www.youtube.com/watch?v=rhNoYyXLo2k</a
          >
        </li>
        <li>
          UNAD (2019). Campus virtual. Recuperado de
          <a href="https://campus0c.unad.edu.co/campus/"
            >https://campus0c.unad.edu.co/campus/</a
          >.
        </li>
      </ul>
    </div>
    <img
      src="https://media.giphy.com/media/l0HlAgJTVaAPHEGdy/giphy.gif"
      alt="woman reding gif"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import Introduction from "@/components/Introduction.vue";

export default {
  name: "references",
  components: {
    // Introduction
  }
};
</script>

<style scoped lang="css">
.refPage {
  background-color: rgba(5, 71, 31, 0.2);
  padding: 77px;
  font-weight: 500;
}
#refList {
  text-align: left;
  /* background-color: pink; */
  list-style-position: inside;
  font-size: 23px;
}
</style>
