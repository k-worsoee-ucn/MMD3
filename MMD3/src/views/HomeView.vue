<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSplashScreen from '../components/TheSplashScreen.vue';
import TheHeader from "@/components/TheHeader.vue"
import { onMounted, onUpdated } from 'vue';

const screenWidth = window.screen.width

onMounted(() => {
  const menuItem1 = document.querySelector("#menuItem1")
  const menuItem2 = document.querySelector("#menuItem2")
  const menuItem3 = document.querySelector("#menuItem3")
  const menuItem4 = document.querySelector("#menuItem4")
  const menuItem5 = document.querySelector("#menuItem5")
  menuItem1.classList.add("currentItem")
  menuItem2.classList.remove("currentItem")
  menuItem3.classList.remove("currentItem")
  menuItem4.classList.remove("currentItem")
  menuItem5.classList.remove("currentItem")
})


onUpdated(() => {
  sessionStorage.setItem("firstLoad", false)
})
</script>

<template>
  <TheSplashScreen class="splashscreen"></TheSplashScreen>
  <main v-if="screenWidth >= 1025">
    <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="Lærkelunden camping logo">
    <h1>Besøg vores webapp på din telefon eller tablet</h1>
  </main>
  <main v-if="screenWidth <= 1024">
    <RouterView />
    <TheHeader></TheHeader>
    <h1>Velkommen Martin!</h1>
    <RouterLink class="infobtn" to="/mineaktiviteter">
      <img src="@/assets/calendar-solid.svg" alt="Mine aktiviteter ikon">
      <p>Mine Aktiviteter</p>
    </RouterLink>
    <p class="welcomeText">
      Velkommen til Lærkelunden's webapp - Din guide til oplevelser, aktiviteter og overnatning. Udforsk og del dine egne
      forslag. Bliv klar til en fantastisk campingoplevelse lige her!
    </p>
    <div class="foc">
      <h2>Oplevelser</h2>
      <div class="cardHolder">
        <RouterLink class="card" to="/oplevelser">
          <img src="/images/Oplevelser/Universe.png" alt="Oplevelser">
          <p>Udenfor Lærkelunden er der et væld af spændende oplevelser - fra forlystelser og slotte til museer, golf og  fiskesøer, der fuldender din ferieoplevelse.</p>
        </RouterLink>
      </div>
    </div>
    <div class="foc gradient">
      <h2>Aktiviteter</h2>
      <div class="cardHolder">
        <RouterLink class="card" to="/aktiviteter">
          <img src="/images/Aktiviteter_paa_pladsen/Lystfiskeri.png" alt="Aktiviteter">
          <p>På Lærkelunden finder du både de faste aktiviteteter samt muligheden for at skabe dine egne unikke aktiviteter, der passer til din ferie.</p>
        </RouterLink>
      </div>
    </div>
    <div class="foc">
      <h2>Overnatning</h2>
      <div class="cardHolder">
        <RouterLink class="card ocard" to="/udlejningsvogne">
          <img src="/images/Camping/Camping1.png" alt="Udlejningsvogne">
          <h3>Udlejningsvogne</h3>
        </RouterLink>
        <RouterLink class="card ocard" to="/hytter">
          <img src="/images/Hytter/Hytte1.png" alt="Hytter">
          <h3>Hytter</h3>
        </RouterLink>
        <RouterLink class="card ocard" to="/camping">
          <img src="/images/Udlejningsvogne/Udlejning1.png" alt="Camping">
          <h3>Camping</h3>
        </RouterLink>
      </div>
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


  .foc {
    grid-column: 1/span 9;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    padding: 0 0 5% 0;
  }

  .gradient {
    background-image: linear-gradient(to right, #B5D6F2, #EAF1F8, #B5D6F2);
  }

  .welcomeText {
    grid-column: 2/span 7;
    font-family: Manrope;
  }

  h1 {
    grid-column: 2/span 5;
    font-family: Manrope;
  }

  .infobtn {
    grid-column: 2/span 5;
    background-color: #fff;
    display: grid;
    grid-template-columns: 20% 80%;
    border-radius: 5px;
    margin-bottom: 5%;
    text-decoration: none;
    font-family: Manrope;
    padding: 5%;
    box-shadow: 1px 1px 4px #000;
  }

  .infobtn img {
    width: 50%;
    margin: auto;
  }

  .infobtn p {
    margin: auto 0;
    color: #000;
  }

  .card p {
    text-decoration: none;
    font-family: Manrope;
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
    display: grid;
  }

  .ocard {
    margin-bottom: 5%;
  }

  .card img {
    grid-column: 1;
    grid-row: 1/span 2;
    width: 100%;
    border-radius: 5px 5px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
  }

  .card h3 {
    grid-column: 1;
    grid-row: 2;
    font-family: Manrope;
    padding: 2% 0 2% 5%;
    background-color: #000000ab;
    text-decoration: none;
    color: #fff;
    margin: 0;
    border-radius: 0 0 5% 5%;
  }

  main h2 {
    grid-column: 2/span 7;
    font-family: Manrope;
    margin-top: 5%;
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

  .foc {
    grid-column: 1/span 9;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    padding: 0 0 5% 0;
  }

  .gradient {
    background-image: linear-gradient(to right, #B5D6F2, #EAF1F8, #B5D6F2);
  }

  .welcomeText {
    grid-column: 2/span 7;
    font-family: Manrope;
    font-size: 1.5rem;
  }

  h1 {
    grid-column: 2/span 5;
    font-family: Manrope;
    font-size: 3rem;
  }

  .infobtn {
    grid-column: 2/span 5;
    background-color: #fff;
    display: grid;
    grid-template-columns: 20% 80%;
    border-radius: 5px;
    margin-bottom: 5%;
    text-decoration: none;
    font-family: Manrope;
    padding: 5%;
    box-shadow: 1px 1px 4px #000;
  }

  .infobtn img {
    width: 50%;
    margin: auto;
  }

  .infobtn p {
    margin: auto 0;
    color: #000;
    font-size: 1.5rem;
  }
  .card p {
    text-decoration: none;
    font-family: Manrope;
    font-size: 1.5rem;
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
    display: grid;
  }

  .ocard {
    margin-bottom: 5%;
  }

  .card img {
    grid-column: 1;
    grid-row: 1/span 2;
    width: 100%;
    border-radius: 5px 5px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
  }

  .card h3 {
    grid-column: 1;
    grid-row: 2;
    font-family: Manrope;
    padding: 3% 0 3% 5%;
    background-color: #000000ab;
    text-decoration: none;
    color: #fff;
    margin: 0;
    border-radius: 0 0 5px 5px;
    font-size: 1.5rem;
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