<template>
  <div class="home">
    <div id="introContainer" class="container">
      <p id="introInfo" align="center">
        <span id="introName" class="title">MELQUIADES SALAS ANTELIZ</span>
        <br />
        <br />
        <span id="homeSubTit">TEMATICA: DEUDA PUBLICA DE COLOMBIA</span>
        <br /> <br>
        Universidad Abierta y a Distancia <br />UNAD Escuela de Ciencias de la
        Educación <br />Educación continuada <br />Formación complementaria
        <br />Diplomatura E-Mediador <br />GRUPO 32 <br />Barranquilla
        <br />2019
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="css">
.home {
  background: url("../assets/img/mapa-politico-colombia.jpg") center no-repeat;
  background-size: cover;
  width: 100%;
  height: 97vh;
}
#introContainer {
  font-family: 'Gentium Book Basic', serif;
  position: absolute;
  height: 100%;
  width: 50%;
  /* background-color: rgb(0, 26, 255); */
}
#introInfo {
  /* position: absolute; */
  padding-left: 0%;
  padding-top: 5%;
  margin: 7% 7%;
  font-weight:bolder;
  font-size: 25px;
  color: #1e3131;
  /* background-color: rgba(191, 181, 168, 0.4); */
}
#introName {
  font-weight: bolder;
  font-size: 34px;
}
#homeSubTit{
  font-size: 24px;
}
</style>
