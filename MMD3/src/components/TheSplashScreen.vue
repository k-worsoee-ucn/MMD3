<script setup>
const splashLogo = document.querySelector("#splashLogo")
const header = document.querySelector("header")

    function changeVis() {
        header.classList.remove("hiddenElement")
    }

</script>

<template>
    <div class="splashDiv">
        <img id="splashLogo" src="../assets/logo_laerkelundenx.svg" alt="" @animationend="changeVis">
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