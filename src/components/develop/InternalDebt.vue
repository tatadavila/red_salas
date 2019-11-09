<template>
  <div class="internal">
    <div class="container-fluid">
      <div class="jumbotron">
        <h3>
          Deuda del Sector Público Colombiano 2018 Cifras en billones de pesos y
          porcentajes
        </h3>
        <img
          src="../../assets/img/deuda_publico_diagrama.png"
          alt="deuda sector publico 2019"
          width="97%"
          height="397vh"
        />
        <p align="justify">
          El Según cifras de la Contraloría General de la República, el monto de
          pasivos de las entidades públicas del nivel nacional alcanzó los
          $576.9 billones (54,0% del PIB) y las del nivel territorial $48,97
          billones (5,0% del PIB). Esto representa un incremento global de
          $60,66 billones en la anterior vigencia.
        </p>
      </div>
    </div>
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
    <div id="intDebtWrap" class="wrapper">
      <h3>Deuda interna del Sector Público Colombiano</h3>
      <img
        src="../../assets/img/tabla_deuda_interna_sector_publico.png"
        alt="deuda interna sector publico tabla"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InternalDebt",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
#internalWrapper {
  margin-top: 17px;
}
#intExtWrap {
  margin-top: 7%;
}
#intDebtWrap {
  margin-top: 7%;
}
</style>
