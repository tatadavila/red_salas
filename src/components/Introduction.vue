<template>
  <div class="introduction">
    <div id="introContainer" class="container">
      <p id="introInfo" align="center">
        <span id="introName" class="title">MELQUIADES SALAS ANTELIZ</span>
        <br />
        <br />
        TEMATICA: DEUDA PUBLICA DE COLOMBIA <br />
        <br />
        Universidad Abierta y a Distancia <br />UNAD Escuela de Ciencias de la
        Educación <br />Educación continuada <br />Formación complementaria
        <br />Diplomatura E-Mediador <br />GRUPO 32 <br />Barranquilla
        <br />2019
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.introduction {
  background: url("../assets/img/mapa-politico-colombia.jpg") center no-repeat;
  background-size: cover;
  height: 90vh;
}
#introContainer {
  position: absolute;
  height: 100%;
  width: 50%;
  /* background-color: rgb(0, 26, 255); */
}
#introInfo {
  /* position: absolute; */
  padding-left: 0%;
  padding-top: 1%;
  margin: 7% 5%;
  font-weight: 600;
  font-size: 26px;
  color: #1e3131;
  background-color: rgba(191, 181, 168, 0.5);
}
#introName {
  font-weight: bolder;
  font-size: 37px;
}
</style>
