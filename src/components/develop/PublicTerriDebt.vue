<template>
  <div class="pubTer">
    <div id="intImgCont" class="container">
      <img
        src="../../assets/img/diagram_deuda_territo.png"
        alt="deuda publica territorial"
        width="100%"
        height="100%"
      />
      <img
        src="../../assets/img/endeudamiento_pub.jpg"
        alt="Endeudamiento Publico"
        width="100%"
        height="100%"
      />
    </div>
    <div id="internalWrapper" class="wrapper">
      <h3 style="margin-top:7%;">
        Deuda Interna del Sector Público Colombiano por Prestamista
      </h3>
      <h4>Participación porcentual</h4>
      <img
        src="../../assets/img/participacion_porcentual_tabla.png"
        alt="Endeudamiento Publico"
        width="77%"
        height="100%"
      />
      <h3 style="margin-top:7%;">
        Deuda del Sector Publico colombiano 2014 - 2018 Cifras en billones de
        pesos y porcentaje del PIB
      </h3>
      <img
        src="../../assets/img/deuda_publica_2014_2018.png"
        alt="Endeudamiento Publico"
        width="77%"
        height="100%"
      />
    </div>
    <div id="intExtWrap" class="wrapper">
      <h3>
        Saldos de la deuda interna y externa del Sector Público Colombiano
      </h3>
      <img
        src="../../assets/img/Saldos_Deuda_Externa_Interna_Tabla.png"
        alt="tabla deuda externa e interna"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicTerriDebt",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.pubTer {
  padding-bottom: 27px;
}
</style>
