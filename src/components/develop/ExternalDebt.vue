<template>
  <div class="external">
    <div id="extDebtWrap" class="wrapper">
      <h3>Saldos de la Deuda Externa del Sector Público</h3>
      <img
        src="../../assets/img/deuda_externa_tabla.png"
        alt="tabla deuda externa sector publico"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExternalDeb",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
#extDebtWrap {
  margin-top: 4%;
}
</style>
