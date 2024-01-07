<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Oplevelser</h1>
        <div class="cardHolder">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <h3>Oplevelse navn</h3>
            </div>
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
.cardHolder {
    grid-column: 2/span 7;
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.card {
    background-color: #FFF;
    border-radius: 15px;
    grid-column: span 7;
    margin-bottom: 5%;
}

.card img {
    width: 100%;
    border-radius: 15px 15px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
}

.card h3 {
    margin-left: 5%;
    font-family: Manrope;
}
</style>
