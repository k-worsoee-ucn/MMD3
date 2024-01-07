<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Udlejningsvogne</h1>
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
</style>