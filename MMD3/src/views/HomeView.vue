<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
    <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
    <h2>Oplevelser</h2>
    <div class="cardHolder">
      <RouterLink class="card" to="/oplevelser">
        <img src="/images/Oplevelser/Universe.png" alt="">
        <RouterLink to="/oplevelser">Se alle oplevelser</RouterLink>
      </RouterLink>
    </div>
    <hr>
    <h2>Aktiviteter</h2>
    <div class="cardHolder">
      <RouterLink class="card" to="/aktiviteter">
        <img src="/images/Aktiviteter_paa_pladsen/Lystfiskeri.png" alt="">
        <RouterLink to="/aktiviteter">Se alle aktiviteter</RouterLink>
      </RouterLink>
    </div>
    <hr>
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

nav hr {
  width: 50%;
}

body {
  margin: 0;
}

nav {
  display: grid;
  grid-column: 1/span 9;
}</style>