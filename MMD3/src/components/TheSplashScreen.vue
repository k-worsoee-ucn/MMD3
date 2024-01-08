<script setup>
const firstLoad = sessionStorage.getItem("firstLoad")

</script>

<template v-if="firstLoad !== false">
    <div class="splashDiv">
        <img id="splashLogo" src="../assets/logo_laerkelundenx.svg" alt="">
    </div>
</template>

<style scoped>
div {
    height: 100vh;
    grid-column: 1/span 9;
}
</style>
<style>
.splashDiv {
    animation: .5s ease-out;
    animation-name: splash;
    animation-fill-mode: forwards;
    animation-delay: 1s;
}

#splashLogo {
    width: 90%;
    margin: 40vh 5%;

}
</style>