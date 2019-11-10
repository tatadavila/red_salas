<template>
  <div class="developPage">
    <div class="sidebar-container">
      <div class="sidebar-logo">ASPECTOS TEMATICOS A DESARROLLAR</div>
      <ul class="sidebar-navigation">
        <li>
          <a>
            <router-link
              to="/desarrollo/estructuraclasificacion"
              class="fa fa-home active"
              aria-hidden="true"
              >Estructura y Clasificación</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/deudainterna"
              class="fa fa-home active"
              aria-hidden="true"
              >Deuda Interna</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/deudaexterna"
              class="fa fa-tachometer"
              aria-hidden="true"
              >Deuda Externa</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/porcentajepib"
              class="fa fa-tachometer"
              aria-hidden="true"
              >Porcentaje del PIB</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/amortizaciondeuda"
              class="fa fa-tachometer"
              aria-hidden="true"
              >Amortización de la Deuda</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/serviciodeuda"
              class="fa fa-users"
              aria-hidden="true"
              >Servicio de la Deuda</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/deudapublicaterritorial"
              class="fa fa-cog"
              aria-hidden="true"
              >Deuda pública Territorial</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/deudapublicatlantico"
              class="fa fa-cog"
              aria-hidden="true"
              >Deuda Pública Departamento Atlántico</router-link
            >
          </a>
        </li>
        <li>
          <a>
            <router-link
              to="/desarrollo/videoyquiz"
              class="fa fa-cog"
              aria-hidden="true"
              >Video y QUIZ</router-link
            >
          </a>
        </li>
      </ul>
    </div>
    <div id="contCont" class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import DevTopic from "@/components/DevTopic.vue";

export default {
  name: "develop"
};
</script>
<style lang="css">
.developPage{
  max-height: 100%;
  padding: 5.1%;
  /* background-color: aqua; */
}
#deuexTab {
  padding: 7%;
}
#contCont {
  padding: 1px 3%;
  margin: 0 7%;
  width: 100%;
}
</style>
