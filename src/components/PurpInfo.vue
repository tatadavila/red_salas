<template>
  <div class="purp">
    <div id="purpContainer" class="container">
      <p id="purpText" align="justify">
        En el presente desarrollo de la RED Se muestra, situación de la deuda
        pública colombiana, se presenta de forma breve la estructura actual y
        clasificación, se muestran los saldos de la deuda pública tanto interna
        como externa, separadas por Gobierno Nacional y nivel territorial, (en
        especial el departamento del atlántico) describiendo su composición y
        evolución. se realiza un análisis del servicio a la deuda, sus
        componentes y cómo fue el comportamiento respecto del Producto Interno
        Bruto. Al final de esta presentación el estudiante podrá: Identificar la
        composición del territorio nacional, por departamentos y Conocer el
        estado de la Deuda publica colombiana, su estructura y clasificación,
        subdivisiones por rubros y cifras, así como el origen de las mismas y su
        amortización o servicio de la deuda, haciendo énfasis en los territorios
        en especial, el departamento del atlántico.
      </p>
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
.purp {
  background: url("../assets/img/purpose-stairs.jpg") center no-repeat;
  background-size: cover;
  height: 90vh;
}
#purpContainer {
  height: 100%;
  width: 50%;
  /* background-color: orchid; */
}
#purpText {
  font-size: 22px;
  font-weight: bold;
  padding-top: 2%;
  /* background-color: rgba(191, 181, 168, 0.5); */
}
</style>
