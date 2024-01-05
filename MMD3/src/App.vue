<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSplashScreen from './components/TheSplashScreen.vue';
import { ref } from 'vue';

const headerVis = ref()
</script>

<template>
  <header class="hiddenElement">
      <nav>
        <img class="navLogo" src="./assets/logo_laerkelundenx.svg" alt="">
        <RouterLink to="/">Home</RouterLink>
        <hr>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />

  <TheSplashScreen></TheSplashScreen>
</template>

<style scoped>
.hiddenElement {
  display: none;
}

header {
 grid-column: 1/span 14;
}

.navLogo {
  width: 60%;
  margin: 10% auto;
}

nav a {
  margin: auto;
}

nav hr {
  width: 50%;
}

body {
  margin: 0;
}

nav {
  display: grid;
}

</style>

<!-- Global -->
<style>
  #app {
    background-color: #E5F4FF;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
  }

  body {
    margin: 0;
  }

  @keyframes splash {
  from {scale: 1;}
  to {scale: 0; display: none;}
}
</style>
