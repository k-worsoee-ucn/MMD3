<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Udlejningsvogne</h1>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning1.png" alt="">
            <div class="cardText">
                <h2>LUKSUSVOGN MED GULVVARME</h2>
                <p>Adria Alpina 663 PT: En rigtig luksusvogn med gulvvarme til 5 personer</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning2.png" alt="">
            <div class="cardText">
                <h2>LUKSUSVOGN FOR 5</h2>
                <p>Adria Adora 573 PT: Luksusvogn med plads til 5 personer</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning3.png" alt="">
            <div class="cardText">
                <h2>LUKSUSVOGN FOR 2</h2>
                <p>Adria Alpina 663 HT: En rigtig luksusvogn indrettet til 2 personer</p>
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

.card {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 5px;
    margin-bottom: 5%;
}

.card img {
    width: 100%;
    grid-row: 1;
    grid-column: 1;
    filter: brightness(100%);
    border-radius: 5px;
    aspect-ratio: 4/3;
    object-fit: cover;
}

.cardText {
    border-radius: 5px;
    grid-row: 1;
    grid-column: 1;
    background-color: #000;
    filter: opacity(80%);
    margin: auto 5% 5% 5%;
}

.cardText h2, .cardText p {
    color: white;
    font-family: Manrope;
    margin: 2%;
}

.cardText h2 {
    font-size: 1.2rem;
}
</style>