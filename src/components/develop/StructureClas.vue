<template>
  <div class="estruClas">
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
          height=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StructureClas",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.estruClas {
  height: 407vh;
  background-color: purple;

}
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
