<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onUpdated } from 'vue';

const screenWidth = window.screen.width

onUpdated(() => {
  sessionStorage.setItem("firstLoad", false)
})

</script>

<template>
  <RouterView />
  <div v-if="screenWidth <= 1024" class="menu">
    <RouterLink id="menuItem1" to="/">
      <img src="@/assets/house-solid.svg" alt="Hjem ikon">
    </RouterLink>
    <RouterLink id="menuItem2" to="/aktiviteter">
      <img src="@/assets/calendar-solid.svg" alt="Aktiviteter ikon">
    </RouterLink>
    <RouterLink id="menuItem3" to="/oplevelser">
      <img src="@/assets/compass-regular.svg" alt="Oplevelser ikon">
    </RouterLink>
    <RouterLink id="menuItem4" to="/anmeldelser">
      <img src="@/assets/star-solid.svg" alt="Anmeldelser ikon">
    </RouterLink>
    <RouterLink id="menuItem5" to="/myprofile">
      <img src="@/assets/user-solid.svg" alt="Min profil ikon">
    </RouterLink>
  </div>
</template>

<style scoped>
@media screen and (max-width: 640px) {
  .currentItem {
    margin: -15% 0 15% 0;
    background: #E5F4FF;
    border-radius: 0 0 50% 50%;
    aspect-ratio: 1/1;
    width: 100%;
  }

  .currentItem img {
    background-color: #F97F0E;
    padding: 15% !important;
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 50% !important;
    height: 50% !important;
    margin: 10% !important;
  }

  .menu {
    grid-column: 1/span 9;
    display: grid;
    grid-template-columns: 5% repeat(5, 1fr) 5%;
    background-color: #B1D8F8;
    padding: 2% 0;
    border-radius: 15px 15px 0 0;
    position: fixed;
    width: 100vw;
    bottom: 0;
    z-index: 4;
  }

  #menuItem1 img,
  #menuItem2 img,
  #menuItem3 img,
  #menuItem4 img,
  #menuItem5 img {
    width: 35%;
    height: 100%;
    margin: auto 25%;
    padding: 5% 0;
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

}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  .menu {
    grid-column: 1/span 9;
    display: grid;
    grid-template-columns: 20% repeat(5, 1fr) 20%;
    background-color: #B1D8F8;
    padding: 2% 0;
    border-radius: 15px 15px 0 0;
    position: fixed;
    width: 100vw;
    bottom: 0;
    z-index: 4;
  }

  .currentItem {
    margin: -15% 0 15% 0;
    background: #E5F4FF;
    border-radius: 0 0 50% 50%;
    aspect-ratio: 1/1;
    width: 100%;
  }

  .currentItem img {
    background-color: #F97F0E;
    padding: 15% !important;
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 50% !important;
    height: 50% !important;
    margin: 10% !important;
  }

  #menuItem1 img,
  #menuItem2 img,
  #menuItem3 img,
  #menuItem4 img,
  #menuItem5 img {
    width: 35%;
    height: 100%;
    margin: auto 25%;
    padding: 5% 0;
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

}
</style>

<!-- Global -->
<style>
@media screen and (min-width: 1025px) {
  body {
    margin: 0;
    background-color: #E5F4FF;
  }

  #app {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
  }
}

@media screen and (max-width: 640px) {
  #app {
    background-color: #E5F4FF;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    min-height: 100vh;
    padding-bottom: 15%;
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

  .splashScreen {
    z-index: 5;
  }

}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  #app {
    background-color: #E5F4FF;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    min-height: 100vh;
    padding-bottom: 15%;
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

  .splashScreen {
    z-index: 5;
  }

}

@keyframes splash {
  from {
    scale: 1;
  }

  to {
    scale: 0;
    display: none;
  }
}
</style>
