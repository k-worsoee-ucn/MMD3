<script setup>
import {ref, onMounted} from "vue"
import campActivities from "@/assets/campActivities.js"
import TheHeader from "@/components/TheHeader.vue"
const id = sessionStorage.getItem("SelectedCampActivity") - 1

const showMap = ref(false)

onMounted(() => {
  const menuItem1 = document.querySelector("#menuItem1")
  const menuItem2 = document.querySelector("#menuItem2")
  const menuItem3 = document.querySelector("#menuItem3")
  const menuItem4 = document.querySelector("#menuItem4")
  const menuItem5 = document.querySelector("#menuItem5")
  menuItem1.classList.remove("currentItem")
  menuItem2.classList.add("currentItem")
  menuItem3.classList.remove("currentItem")
  menuItem4.classList.remove("currentItem")
  menuItem5.classList.remove("currentItem")
})


</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/aktiviteter">
            <img src="@/assets/chevron-left-solid.svg" alt="Tilbage">
        </RouterLink>
        <TheHeader></TheHeader>
        <div class="hero">
            <img :src="campActivities[id].imgUrl" alt="Billede af aktivitet">
            <h1>{{ campActivities[id].name }}</h1>
        </div>
        <div class="activity">
            <p>{{ campActivities[id].desc }}</p>
            <img id="map" :src="campActivities[id].mapUrl" alt="Kort" @click="showMap = !showMap">
        </div>
        <Transition>
            <div v-if="showMap" class="bigMap" @click="showMap = !showMap">
                <img :src="campActivities[id].mapUrl" alt="Kort">
            </div>
        </Transition>
    </main>
</template>

<style scoped>
@media screen and (max-width: 640px) {

    .bigMap {
        grid-column: 1/span 9;
        position: absolute;
        top: 0;
        background-color: #00000075;
        height: 100vh;
        width: 100vw;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.7s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .bigMap img {
        width: 100%;
        padding: 80% 0;
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

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.7s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .bigMap img {
        width: 100%;
        padding: 30% 0;
    }

    .bigMap {
        grid-column: 1/span 9;
        position: absolute;
        top: 0;
        background-color: #00000075;
        height: 100vh;
        max-width: 100vw;
    }

}
</style>
