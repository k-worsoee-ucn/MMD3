<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSplashScreen from './components/TheSplashScreen.vue';
import { ref } from 'vue';


const menuVis = ref(false)
const menuIcon = document.querySelector(".menu")
const nav = document.querySelector("nav")

function menuChange() {
  if(menuVis.value = false) {
    nav.style.display = "grid";
    menuIcon.setAttribute("src", "xmark-solid.svg")
    menuVis.value = true;
  } else {
    nav.style.display = "none";
    menuIcon.setAttribute("src", "bars-solid.svg")
    menuVis.value = false;
  }
}

</script>

<template>
  <TheSplashScreen></TheSplashScreen>
  <header class="hiddenElement">
    <!-- <a @click="menuVis = !menuVis, menuChange" href="#">
      <img class="menu" src="./assets/bars-solid.svg" alt="">
    </a>
      <nav>
        <img class="navLogo" src="./assets/logo_laerkelundenx.svg" alt="">
        <RouterLink to="/">Home</RouterLink>
        <hr>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>
  <main></main>

  <RouterView />

  
</template>

<style scoped>

hr {
  grid-column: 2/span 7;
  width: 100%;
  margin-top: 15%;
}
.cardHolder {
  grid-column: 2/span 7;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.card {
  background-color: #FFF;
  border-radius: 15px;
  grid-column: span 7;
}

.ocard {
  margin-bottom: 5%;
}

.card img {
  width: 100%;
  border-radius: 15px 15px 0 0;
  aspect-ratio: 16/7;
  object-fit: cover;
}

.card h3 {
  margin-left: 5%;
  font-family: Manrope;
}

main h2 {
  grid-column: 2/span 7;
  font-family: Manrope;
}
.menu {
  grid-column: 9;
  width: 80%;
  margin: auto;
}
.hiddenElement {
  display: none;
}

header, main {
 grid-column: 1/span 9;
 display: grid;
 grid-template-columns: repeat(9, 1fr);
}

.navLogo {
  width: 60%;
  margin: 10% auto;
}

nav a {
  margin: auto;
  font-family: Manrope;
}

nav hr {
  width: 50%;
}

body {
  margin: 0;
}

nav {
  display: grid;
  grid-column: 1/span 9;
}

</style>

<!-- Global -->
<style>
  #app {
    background-color: #E5F4FF;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
  }

  body {
    margin: 0;
  }

  @keyframes splash {
  from {scale: 1;}
  to {scale: 0; display: none;}
}
</style>
