<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Camping</h1>
        <div class="card">
            <img src="/images/Camping/Camping1.png" alt="">
            <div class="cardText">
                <h2>STANDARDPLADS</h2>
                <p>Velegnet til campingvogne og teltvogne. Pladserne er på min 100m2</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping2.png" alt="">
            <div class="cardText">
                <h2>PLADS MED HAVKIG</h2>
                <p>Velegnet til campingvogne og teltvogne. Pladserne er på min 100m2</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping3.png" alt="">
            <div class="cardText">
                <h2>PANORAMAPLADS VED VANDET</h2>
                <p>I første række til vandet. Alle pladser er på 100m2 med få meter til stranden</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping4.png" alt="">
            <div class="cardText">
                <h2>PANORAMAPLADS PÅ TERRASSEN</h2>
                <p>Udsigt over pladsen og vandet. Tæt på alle faciliteter.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping5.png" alt="">
            <div class="cardText">
                <h2>STANDARDPLADS TIL TELTE</h2>
                <p>Velegnet til større telte. Pladserne er med strøm og på min. 100m2</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping6.png" alt="">
            <div class="cardText">
                <h2>TELTPLADS MED HAVKIG</h2>
                <p>På anden og tredje række til vandet. Med strøm og på min 100m2</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping7.png" alt="">
            <div class="cardText">
                <h2>PANORAMAPLADS TIL TELTE</h2>
                <p>I første række til vandet. Min 100m2 og med få meter til stranden.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping8.png" alt="">
            <div class="cardText">
                <h2>SMÅ TELTPLADSER</h2>
                <p>Mindre teltplader anbefalet til cyklister eller vandrere. Mulighed for strøm</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping9.png" alt="">
            <div class="cardText">
                <h2>PLADS TIL AUTOCAMPERE</h2>
                <p>Med fast underlag og direkte tilslutning til vand og afløb. Nemt at komme til og fra</p>
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