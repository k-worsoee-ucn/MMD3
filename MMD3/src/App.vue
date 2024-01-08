<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSplashScreen from './components/TheSplashScreen.vue';
import { onUpdated } from 'vue';

onUpdated(() => {
  sessionStorage.setItem("firstLoad", false)
})

</script>

<template>
  <TheSplashScreen class="splashscreen"></TheSplashScreen>
  <div class="menu">
    <a id="menuItem1" href="">
      <img src="./assets/house-solid.svg" alt="">
    </a>
    <a id="menuItem2" href="">
      <img src="./assets/star-solid.svg" alt="">
    </a>
    <a id="menuItem3" href="">
      <img src="./assets/calendar-solid.svg" alt="">
    </a>
    <a id="menuItem4" href="">
      <img src="./assets/user-solid.svg" alt="">
    </a>
  </div>
  <RouterView />
</template>

<style scoped>
.menu {
  grid-column: 1/span 9;
  display: grid;
  grid-template-columns: 5% repeat(4, 1fr) 5%;
  background-color: orange;
  padding: 2% 0;
  border-radius: 15px 15px 0 0;
  position: fixed;
  width: 100vw;
  bottom: 0;
}

#menuItem1 img, #menuItem2 img, #menuItem3 img, #menuItem4 img {
  width: 50%;
  height: 100%;
  margin: auto 25%;
  filter: invert(100%);
}

#menuItem1 {
 grid-column: 2;
}

main h2 {
  grid-column: 2/span 7;
  font-family: Manrope;
}

header,
main {
  grid-column: 1/span 9;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
}
</style>

<!-- Global -->
<style>
#app {
  background-color: #E5F4FF;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  min-height: 100vh;
}

.hiddenElement {
  display: none;
}

body {
  margin: 0;
}

.card {
  box-shadow: 1px 1px 4px #000;
}

@keyframes splash {
  from {
    scale: 1;
  }

  to {
    scale: 0;
    display: none;
  }
}</style>
