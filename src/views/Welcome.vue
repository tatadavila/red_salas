<template>
  <div class="welcome-page">
    <div id="welContainer" class="row justify-content-md-center">
      <div class="col-xl-6 col-8">
        <div id="imgContainer">
          <img
            src="../assets/img/mapa-colombia-lineal.png"
            id="linelMap"
            alt="Mapa Colombia"
            width="77%"
            height="557hv"
          />
        </div>
      </div>
      <div id="colContainer" class="col-xl-6 col-8">
        <p id="weText" align="justify">
          Queridos Estudiantes, Tu Universidad Nacional Abierta y a Distancia
          (UNAD) te da la BIENVENIDA, al curso de: DEUDA PÚBLICA DE COLOMBIA. La
          temática a desarrollar en la primera unidad, es conocer como están
          conformados los territorios de nuestro país por Departamentos y
          capitales, la cual, mediante el presente recurso educativo digital, le
          mostramos de una manera didáctica y sencilla, la estructura de
          Colombia.
          <br />Seguiremos atento a sus inquietudes. <br />
          <b
            >El Recurso Educativo Digital (RED), contribuye a nuestro
            aprendizaje.</b
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "welcome"
};
</script>

<style scoped>
.welcome-page {
  background: url("../assets/img/colombia_flag.png") center no-repeat;
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  /* background-color: aquamarine; */
}
#imgContainer {
  /* background-color: salmon; */
  margin-top: 2px;
}
#welContainer {
  padding: 5% 0 0;
}
linealMap {
  object-fit: contain;
}
#weText {
  color: black;
  font-size: 24.7px;
  font-weight: 700;
  padding: 1% 17%;
  padding-right: 7px;
  padding-left: 7px;
  margin-top: 37px;
  margin-right: 7%;
  background-color: rgba(255, 255, 255, 0.253);
}
#colContainer {
  margin-top: -10px;
}
</style>
