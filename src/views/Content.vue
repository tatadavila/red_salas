<template>
  <div class="content-page">
    <div class="row justify-content-md-center">
      <div id="tableContent" class="col-xl-6 col-8">
        <h3>Unidad 2: DEUDA PÚBLICA DE COLOMBIA</h3>
        <br />
        <ol id="list" align="left">
          <li>Estructura y clasificación</li>
          <li>Deuda interna</li>
          <li>Deuda Externa</li>
          <li>porcentaje del PIB</li>
          <li>Amortización de la deuda</li>
          <li>Servicio de la deuda</li>
          <li>Deuda pública territorial</li>
          <li>Deuda pública del Departamento del atlántico</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "content"
};
</script>

<style scoped>
.content-page {
  width: 100%;
  height: 100vh;
  padding-top: 7px;
  background-color: rgba(5, 71, 31, 0.2);
}
#tableContent {
  padding-top: 7%;
  font-weight: 500;
}
#list {
  padding: 0 17%;
  padding-left: 27%;
  font-size: 27px;
}
</style>
