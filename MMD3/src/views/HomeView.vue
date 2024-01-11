<script setup>
import { RouterLink, RouterView } from 'vue-router'

const screenWidth = window.screen.width
</script>

<template>
  <main v-if="screenWidth >= 1025" >
    <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
    <h1>Besøg vores webapp på din telefon eller tablet</h1>
  </main>
  <main v-if="screenWidth <= 1024">
    <RouterView />
    <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
    <h2>Oplevelser</h2>
    <div class="cardHolder">
      <RouterLink class="card" to="/oplevelser">
        <img src="/images/Oplevelser/Universe.png" alt="">
        <RouterLink to="/oplevelser">Se alle oplevelser</RouterLink>
      </RouterLink>
    </div>
    <h2>Aktiviteter</h2>
    <div class="cardHolder">
      <RouterLink class="card" to="/aktiviteter">
        <img src="/images/Aktiviteter_paa_pladsen/Lystfiskeri.png" alt="">
        <RouterLink to="/aktiviteter">Se alle aktiviteter</RouterLink>
      </RouterLink>
    </div>
    <h2>Overnatning</h2>
    <div class="cardHolder">
      <RouterLink class="card ocard" to="/udlejningsvogne">
        <img src="/images/Camping/Camping1.png" alt="">
        <RouterLink to="/udlejningsvogne">Udlejningsvogne</RouterLink>
      </RouterLink>
      <RouterLink class="card ocard" to="/hytter">
        <img src="/images/Hytter/Hytte1.png" alt="">
        <RouterLink to="/hytter">Hytter</RouterLink>
      </RouterLink>
      <RouterLink class="card ocard" to="/camping">
        <img src="/images/Udlejningsvogne/Udlejning1.png" alt="">
        <RouterLink to="/camping">Camping</RouterLink>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1025px) {
  main {
    grid-column: 2/span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .logo {
    margin-top: 5%;
    grid-column: 5/span 4;
  }

  h1 {
    font-family: Manrope;
    grid-column: 5/span 4;
  }
}
@media screen and (max-width: 640px) {
  .logo {
    grid-column: 4/span 3;
    width: 100%;
    margin-top: 15%;
  }

  .card a {
    text-decoration: none;
    font-family: Manrope;
    font-weight: bold;
    font-size: 1.2rem;
    color: #000;
    margin-left: 5%;
  }

  .cardHolder {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .card {
    background-color: #FFF;
    border-radius: 5px;
    grid-column: span 7;
    text-decoration: none;
  }

  .ocard {
    margin-bottom: 5%;
  }

  .card img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
  }

  .card a {
    margin-left: 5%;
    font-family: Manrope;
    padding: 5% 0;
  }

  main h2 {
    grid-column: 2/span 7;
    font-family: Manrope;
    margin-top: 15%;
  }

  .menu {
    grid-column: 9;
    width: 80%;
    margin: auto;
  }

  header,
  main {
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

  body {
    margin: 0;
  }

  nav {
    display: grid;
    grid-column: 1/span 9;
  }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
  .logo {
    grid-column: 4/span 3;
    width: 100%;
    margin-top: 15%;
  }

  .card a {
    text-decoration: none;
    font-family: Manrope;
    font-weight: bold;
    font-size: 2rem;
    color: #000;
    margin-left: 5%;
  }

  .cardHolder {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .card {
    background-color: #FFF;
    border-radius: 5px;
    grid-column: span 7;
    text-decoration: none;
  }

  .ocard {
    margin-bottom: 5%;
  }

  .card img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
  }

  .card a {
    margin-left: 5%;
    font-family: Manrope;
    padding: 5% 0;
  }

  main h2 {
    grid-column: 2/span 7;
    font-family: Manrope;
    margin-top: 15%;
    font-size: 2.5rem;
  }

  .menu {
    grid-column: 9;
    width: 80%;
    margin: auto;
  }

  header,
  main {
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

  body {
    margin: 0;
  }

  nav {
    display: grid;
    grid-column: 1/span 9;
  }
}
</style>