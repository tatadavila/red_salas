<template>
  <div class="home">
    <div id="introContainer" class="container">
      <div class="row justify-content-md-left">
        <p id="introInfo" align="center">
          <span id="introName" class="title">MELQUIADES SALAS ANTELIZ</span>
          <br />
          <br />
          <span id="homeSubTit">TEMATICA: DEUDA PUBLICA DE COLOMBIA</span>
          <br />
          <br />
          Universidad Abierta y a Distancia <br />UNAD Escuela de Ciencias de la
          Educación <br />Educación continuada <br />Formación complementaria
          <br />Diplomatura E-Mediador <br />GRUPO 32 <br />Barranquilla
          <br />2019
        </p>
      </div>
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
  font-family: 'Gentium Book Basic', serif;
  background: url("../assets/img/mapa-politico-colombia.jpg") center no-repeat;
  background-size: cover;
  padding-top: 2%;
  width: 100%;
  height: 100%;
}
#introInfo {
  /* position: absolute; */
  margin: 0 37%;
  margin-top: 7%;
  margin-left: 0;
  font-weight: bold;
  font-size: 25px;
  color: #1e3131;
  background-color: rgba(191, 181, 168, 0.3);
}
#introName {
  font-weight: bolder;
  font-size: 34px;
}
#homeSubTit{
  font-size: 24px;
}
</style>
