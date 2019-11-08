<template>
  <div class="navbarComponent">
    <nav
      class="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav"
    >
      <div class="container">
        <ul id="navList" class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Presentacion</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bienvenida" class="nav-link"
              >Bienvenida</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contenido" class="nav-link"
              >Tabla de Contenido</router-link
            >
          </li>
        </ul>
        <!-- <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/inicio" class="nav-link" href="#">DEUDA PUBLICA DE COLOMBIA</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Rates</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.navbar {
  font-weight: 700;
  font-size: 25px;
  color: aliceblue;
}
/* .main-nav{} */
#olNav {
  width: 100%;
}
.nav-item{
  padding-right: 17px;
}
</style>
