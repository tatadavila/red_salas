<template>
  <div class="credits">
    <h1>CRÉDITOS</h1>
    <div id="firstRow" class="row align-items-center">
      <div class="col">
        <img
          src="../assets/img/Logo_UNAD.png"
          alt="UNAD logo"
          width="77%"
          height="147vh"
        />
      </div>
      <div class="wrapper">
        <ul style="list-style-type:none; font-size:30px;">
          <li>Universidad Abierta y a Distancia- UNAD</li>
          <li>Universidad del Atlántico</li>
          <li>Ministerio de Hacienda y Crédito Público</li>
          <li>DPN</li>
        </ul>
      </div>
      <div class="col">
        <img
          src="../assets/img/bandera_atlantico.jpg"
          alt="bandera dept atlantico"
          width="87%"
        />
      </div>
    </div>
    <div id="secondRow" class="row justify-content-between">
      <div id="secRowFirstCol" class="col-lg-6 align-self-center">
        <ul style="list-style: none;">
          <li>
            <span id="introName" class="title">MELQUIADES SALAS ANTELIZ</span>
          </li>
          <li>Correo:melquiades7807@hotmail.com</li>
          <li>Tel.3002220840</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <img
          id="profesorPic"
          class="img-thumbnail"
          src="../assets/img/foto_prof_melquiades_salas.png"
          alt="melquiades salas anteliz"
          width="77%"
        />
      </div>
    </div>
    <div id="thirdRow" class="row justify-content-center">
      <p align="justify">
        Melquiades Salas Anteliz : Doctor en Administración(ciencias
        Gerenciales)de la Universidad Rafael Belloso Chacín de Maracaibo
        Venezuela, Magíster en Gerencia de Proyectos de Investigación y
        Desarrollo en la Universidad Rafael Belloso Chacín de Maracaibo -
        Venezuela, Especialista en Finanzas Públicas de la Universidad de
        Cartagena-Universidad Popular del Cesar, Contador público de la
        Universidad Popular del Cesar, Diplomados en: Docencia Universitaria,
        Normas Internacionales de Información Financiera. Docente de la
        Universidad Popular del Cesar, Actualmente Docente - Investigador, Par
        académico de Colciencias, Profesor de posgrado de la Universidad del
        Atlántico, Docente de pregrado Universidad Metropolitana de
        Barranquilla, Tutor en La Universidad Nacional Abierta y a Distancia
        UNAD Barranquilla, INVESTIGADOR ASOCIADO según COLCIENCIA, reconocido y
        clasificado en B por Colciencias.
      </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import Introduction from "@/components/Introduction.vue";

export default {
  name: "Credits"
};
</script>
<style scoped>
.credits {
  height: 100%;
  padding-top: 77px;
  background-color: rgba(8, 94, 41, 0.514);
}
#firstRow {
  padding-left: 27px;
  padding-right: 47px;
}
.wrapper {
  padding-top: 17px;
}
#secondRow {
  padding: 77px 0;
  padding-bottom: 17px;
  padding-left: 0;
  margin-left: 15%;
  /* background-color: yellow; */
  width: 70%;
}
#secRowFirstCol {
  padding-left: 0;
  /* background-color: red; */
}
#profesorPic {
  float: left;
}
#thirdRow {
  padding: 0 77px 0 87px;
  font-size: 27px;
}
</style>
