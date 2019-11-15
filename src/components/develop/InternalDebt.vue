<template>
  <div class="internal">
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
#intExtWrap {
  margin-top: 7%;
}
#intDebtWrap {
  margin-top: 7px;
  padding-bottom: 17px;
}
</style>
