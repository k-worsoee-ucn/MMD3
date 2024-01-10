<script setup>

</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="">
        </RouterLink>
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
        <h1>Hytter</h1>
        <div class="card">
            <img src="/images/Hytter/Hytte1.png" alt="">
            <div class="cardText">
                <h2>LUKSUSHYTTE, 35 KVM</h2>
                <p>Hytte med plads op til 6 personer. Ustyret med stor og dejlig terrasse</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte2.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 25 KVM</h2>
                <p>Hytte med plads op til 6 personer. Med hems og dejlig terrasse</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte3.png" alt="">
            <div class="cardText">
                <h2>LUKSUSHYTTE, 21 KVM</h2>
                <p>Optimal til 2 personer med 2 sovepladser og terrasse med udsigt</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte4.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 25 KVM</h2>
                <p>Hytte med plads til 6 personer. Stor terrasse med usigt over vandet</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte5.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 9 KVM</h2>
                <p>Lille hytte til 2 personer. Med køleskab, varme og service</p>
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