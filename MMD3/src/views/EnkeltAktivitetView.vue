<script setup>
    import data from "../assets/activitiesData.js"
    const id = sessionStorage.getItem("SelectedActivity") -1
</script>

<template>
    <main>
        <a class="back" href="/aktiviteter">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <div class="hero">
            <img :src="data[id].imgUrl" alt="">
            <h1>{{ data[id].name }}</h1>
        </div>
        <div class="activityCreator">
            <img class="creatorIcon" :src="data[id].creator.creatorImageUrl" alt="">
            <h2>{{ data[id].creator.creatorName }}</h2>
            <hr>
            <p>{{ data[id].desc }}</p>
            <img id="map" :src="data[id].mapUrl" alt="">
        </div>
    </main>
</template>

<style scoped>

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

.activityCreator {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-family: Manrope;
    margin-bottom: 5%;
}

.creatorIcon {
    aspect-ratio: 1/1;
    object-fit: cover;
    grid-column: 1;
    width: 100%;
    border-radius: 50%;
    margin: auto;
}

.activityCreator h2 {
    grid-column: 2/span 6;
    margin: auto;
}

.activityCreator hr {
    grid-column: 1/span 7;
    width: 100%;
    height: .2vh;
}

.activityCreator p {
    grid-column: 1/span 7;
}

#map {
    grid-column: 1/span 7;
    width: 100%;
}

</style>
