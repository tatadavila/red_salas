<template>
  <div id="app">
    <Navbar></Navbar>
    <transition
      name="router-anim"
      enter-active-class="animated fadeInUpBig"
      leave-active-class="animated fadeOutUpBig"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#app {
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'Work Sans', sans-serif;
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
.navComponent {
  position: fixed;
}
.router-anim-enter-active {
  animation: coming 1s;
  opacity: 0;
}
.router-anim-enter-active {
  animation: going 1s;
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
