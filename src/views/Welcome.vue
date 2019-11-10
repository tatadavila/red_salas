<template>
  <div class="welcome-page">
    <div id="containerList1" class="row justify-content-md-center">
      <div class="col-xl-6 col-8">
        <div id="imgContainer">
          <img
            src="../assets/img/mapa-colombia-lineal.png"
            id="linelMap"
            alt="Mapa Colombia"
            width="79%"
          />
        </div>
      </div>
      <div class="col-xl-6 col-8">
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

<style lang="css">
.infoWel {
  max-width: 100%;
  max-height: 100%;
  background-color: darkcyan;
}
#imgContainer {
  width: 92%;
  /* background-color: brown; */
  margin-left: 17%;

}
linealMap {
  object-fit: contain;
}
#weText {
  font-size: 137%;
  padding: 5% 17%;
  padding-left: 7%;
  margin-top: 37px;
  margin-right: 7%;
}
</style>

