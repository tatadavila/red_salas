<template>
  <div class="navbarComponent">
    <nav id="mainNavbar" class="navbar navbar-expand-md navbar-dark main-nav">
      <div class="container">
        <ul align="center" id="navList" class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact
              >Presentación</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/bienvenida" class="nav-link"
              >Bienvenida</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contenido" class="nav-link"
              >Tabla Contenido</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/proposito" class="nav-link"
              >Propósito</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/desarrollo/deudainterna" class="nav-link"
              >Desarrollo Tema</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Mas..</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li class="nav-item">
                <router-link to="/conclusion" class="nav-link"
                  >Conclusión</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/referencias" class="nav-link"
                  >Referencias</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/creditos" class="nav-link"
                  >Créditos</router-link
                >
              </li>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeClass: "active"
    };
  },
  props: {
    msg: String
  },
  computed: {
    currentPage() {
      return this.$route.path;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.navbar {
  font-size: 23px;
  color: aliceblue;
  background-color: #2f4f4f;
  position: fixed;
  width: 100%;
}
/* .main-nav{} */
#olNav {
  width: 100%;
}
.nav-item {
  padding-right: 17px;
  font-weight: bolder;
}
.dropdown-menu {
  left: auto;
  right: 0;
  font-size: 25px;
  background-color: #2f4f4f;
}
</style>
