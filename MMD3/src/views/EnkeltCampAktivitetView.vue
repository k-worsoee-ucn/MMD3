<script setup>
import campActivities from "@/assets/campActivities.js"
const id = sessionStorage.getItem("SelectedCampActivity") - 1
</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/aktiviteter">
            <img src="@/assets/chevron-left-solid.svg" alt="">
        </RouterLink>
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
        <div class="hero">
            <img :src="campActivities[id].imgUrl" alt="">
            <h1>{{ campActivities[id].name }}</h1>
        </div>
        <div class="activity">
            <p>{{ campActivities[id].desc }}</p>
            <img id="map" :src="campActivities[id].mapUrl" alt="">
        </div>
    </main>
</template>

<style scoped>
@media screen and (max-width: 640px) {
    .logo {
        grid-column: 4/span 3;
        margin: auto;
        width: 100%;
    }

    .back {
        width: 50%;
        margin: 25% auto;
    }

    h1 {
        grid-row: 2;
        font-family: Manrope;
        grid-column: 2/span 7;
    }

    .hero {
        grid-column: 1/span 9;
        grid-row: 2;
        display: grid;
        grid-template-columns: 1fr;
    }

    .hero img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        grid-row: 1;
        grid-column: 1;
        box-shadow: 1px 1px 4px #000;
    }

    .hero h1 {
        color: #fff;
        grid-row: 1;
        grid-column: 1;
        margin: auto auto 20% 10%;
    }

    .activity {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-family: Manrope;
        margin-bottom: 5%;
    }

    .activity p {
        grid-column: 1/span 7;
    }

    #map {
        grid-column: 1/span 7;
        width: 100%;
    }
}
@media screen and (min-width: 641px) and (max-width: 1024px) {
    .logo {
        grid-column: 4/span 3;
        margin: auto;
        width: 100%;
    }

    .back {
        width: 33%;
        margin: 25% auto;
    }

    h1 {
        grid-row: 2;
        font-family: Manrope;
        grid-column: 2/span 7;
    }

    .hero {
        grid-column: 1/span 9;
        grid-row: 2;
        display: grid;
        grid-template-columns: 1fr;
    }

    .hero img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        grid-row: 1;
        grid-column: 1;
        box-shadow: 1px 1px 4px #000;
    }

    .hero h1 {
        color: #fff;
        grid-row: 1;
        grid-column: 1;
        margin: auto auto 5% 10%;
        font-size: 2.5rem;
    }

    .activity {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-family: Manrope;
        margin-bottom: 5%;
        font-size: 1.2rem;
    }

    .activity p {
        grid-column: 1/span 7;
    }

    #map {
        grid-column: 1/span 7;
        width: 100%;
    }
}
</style>
