<template>
  <div id="app">
    <Navbar></Navbar>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  /* font-family: 'Amatic SC', cursive; */
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
html,
body {
  height: calc(100% - 50px);
}
.page {
  position: fixed;
  width: inherit;
}
</style>
