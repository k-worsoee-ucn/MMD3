<script setup>
    sessionStorage.setItem("firstLoad", false)
</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Oplevelser</h1>
        <h2>Slotte og Kirker</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
        </div>
        <h2>Museer og forlystelser</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
        </div>
        <h2>Sport og natur</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
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

h2 {
    font-family: Manrope;
    grid-column: 2/span 7;
}
.cardHolder {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5%;
    margin-bottom: 20%;
}

.card {
    background-color: #FFF;
    border-radius: 5px;
    grid-column: span 3;
    box-shadow: 1px 1px 4px #000;
}

.card img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    aspect-ratio: 16/7;
    object-fit: cover;
}

.card p {
    margin-left: 5%;
    font-family: Manrope;
}
</style>
