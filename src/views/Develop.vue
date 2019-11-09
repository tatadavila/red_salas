<template>
  <div class="developPage">
    <div class="sidebar-container">
      <div class="sidebar-logo">ASPECTOS TEMATICOS A DESARROLLAR</div>
      <ul class="sidebar-navigation">
        <li class="header">Estructura y Clasificación</li>
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
            <i class="fa fa-tachometer" aria-hidden="true">Deuda Externa</i>
          </a>
        </li>
        <li>
          <a>
            <i class="fa fa-tachometer" aria-hidden="true"
              >Porcentaje del PIB</i
            >
          </a>
        </li>
        <li class="header">Amortización de la Deuda</li>
        <li>
          <a>
            <i class="fa fa-users" aria-hidden="true">Servicio de la Deuda</i>
          </a>
        </li>
        <li class="header">Deuda pública Territorial</li>
        <li>
          <a>
            <router-link
              to="/desarrollo/deudapublica"
              class="fa fa-cog"
              aria-hidden="true"
              >Deuda Pública del Departamento del Atlántico</router-link
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
