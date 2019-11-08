<template>
  <div class="topic">
    <h1>MAS-ASPECTOS TEMATICOS A DESARROLLAR</h1>
    <p align="center">
      Estructura y clasificación
      <br />Deuda interna <br />Deuda Externa <br />Porcentaje del PIB
      <br />Amortización de la deuda <br />Servicio de la deuda <br />Deuda
      pública territorial <br />Deuda pública del Departamento del atlántico.
    </p>
    <div id="EstCla" class="container">
      <h2>ESTRUCTURA Y CLASIFICACIÓN</h2>
      <img
        src="../assets/img/deuda_publico_diagrama.png"
        alt="deuda sector publico 2019"
      />
      <p align="justify">
        El Según cifras de la Contraloría General de la República, el monto de
        pasivos de las entidades públicas del nivel nacional alcanzó los $576.9
        billones (54,0% del PIB) y las del nivel territorial $48,97 billones
        (5,0% del PIB). Esto representa un incremento global de $60,66 billones
        en la anterior vigencia.
      </p>
    </div>
    <br />
    <div id="deudaInt" class="container">
      <h3>Deuda Publica Territorial</h3>
      <img
        src="../assets/img/endeudamiento_pub.jpg"
        alt="Endeudamiento Publico"
        width="80%"
        height="100%"
      />
      <br />
      <img
        src="../assets/img/diagram_deuda_territo.png"
        alt="deuda publica territorial"
        width="80%"
        height="100%"
      />
      <br>
      <h3>Deuda interna del Sector Público Colombiano por prestamista</h3>
      <h4>Participación porcentual</h4>
    </div>
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
