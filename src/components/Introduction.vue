<template>
  <div class="introduction">
    <div class="container">
      <ul id="presentInfo" style="list-style-type:none">
        <li>MELQUIADES SALAS ANTELIZ</li>
        <br />
        <li>TEMATICA: DEUDA PUBLICA DE COLOMBIA</li>
        <br />
        <br />
        <li>Universidad Abierta y a Distancia UNAD</li>
        <li>Escuela de Ciencias de la Educación</li>
        <li>Educación continuada</li>
        <li>Formación complementaria</li>
        <li>Diplomatura E-Mediador en AVA</li>
        <li>GRUPO 32</li>
        <li>Barranquilla</li>
        <li>2019</li>
      </ul>
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
  height: 87vh;
}
#presentInfo {
  position: absolute;
  margin-top: 27px;
  padding-left: 0%;
  font-size: 23px;
  font-weight: bold;
  color: black;
  /* background-color: rgba(191, 181, 168, 0.5); */
}
</style>
