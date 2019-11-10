<template>
  <div class="pubatl">
    <div id="pubWrap" class="wrapper">
      <h2>DEUDA PÚBLICA DEL DEPARTAMENTO DEL ATLÁNTICO</h2>
      <img
        src="../../assets/img/deuda_publica_atlantico.png"
        alt="deuda publica atlantico"
      />
      <br /> <br>
      <img
        src="../../assets/img/barranquilla_titulo_amarillo.png"
        alt="barranquilla amarillo"
      />
      <img
        src="../../assets/img/deuda_publica_barranquilla.png"
        alt="deuda publica barranquilla"
      />
      <h2 id="pubTitle2">Desembolsos recibidos por Barranquilla, ADI y Edubar 2018</h2>
      <img
        src="../../assets/img/desembolsos_barranquilla_adi_adubar_2018.png"
        alt="desembolsos barranquilla 2018"
      />
      <img
        src="../../assets/img/perfil_deuda_publica.png"
        alt="perfil deuda publica"
        width="70%"
        height="477hv"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicAtlDebt",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
#pubTitle2 {
  margin-top: 7%;
}
</style>
