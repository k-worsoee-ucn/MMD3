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
                <p>Hytte med plads op til 6 personer med soveværelse, værelse med køjeseng, hems, bad og toilet samt en stor køkken/stue afdeling. Ustyret med en dejlig terrasse</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte2.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 25 KVM</h2>
                <p>Hytte med plads op til 6 personer med soveværelse, værelse med køjer, hems, bad og toilet, køkken/stue i et med tv. Udstyret med en dejlig terrasse</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte3.png" alt="">
            <div class="cardText">
                <h2>LUKSUSHYTTE, 21 KVM</h2>
                <p>Optimal til 2 personer med soveværelse, bad og toilet, mindre hems med plads til 2 ekstra gæster, køkken/stue i et samt en skøn terrasse med udsigt</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte4.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 25 KVM</h2>
                <p>Hytte med plads til 6 personer med god isolering, køjerum, toilet, fint køkken, tv samt en stor terrasse med udsigt over vandet</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Hytter/Hytte5.png" alt="">
            <div class="cardText">
                <h2>HYTTE, 9 KVM</h2>
                <p>Lille hyggelig hytte til 2 personer med køleskab, varme og service</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
@media screen and (max-width: 640px) {
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
        box-shadow: none;
    }

    .card img {
        width: 100%;
        grid-row: 1;
        grid-column: 1;
        filter: brightness(100%);
        border-radius: 5px;
        aspect-ratio: 4/3;
        object-fit: cover;
        box-shadow: 1px 1px 4px #000;
    }

    .cardText {
        border-radius: 5px;
        grid-row: 2;
        grid-column: 1;
        background-color: #000;
        filter: opacity(80%);
        margin: -20% 5% 5% 5%;
    }

    .cardText h2,
    .cardText p {
        color: white;
        font-family: Manrope;
        margin: 2%;
    }

    .cardText h2 {
        font-size: 1.2rem;
    }

}
@media screen and (min-width: 641px) and (max-width: 1024px) {
    .logo {
        grid-column: 4/span 3;
        margin: auto;
        width: 100%;
    }

    .back {
        width: 33%;
        margin: 25% auto;
    }

    h1 {
        grid-row: 2;
        font-family: Manrope;
        grid-column: 2/span 7;
        font-size: 3rem;
    }

    .card {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: 1fr;
        border-radius: 5px;
        margin-bottom: 5%;
        box-shadow: none;
    }

    .card img {
        width: 100%;
        grid-row: 1;
        grid-column: 1;
        filter: brightness(100%);
        border-radius: 5px;
        aspect-ratio: 4/3;
        object-fit: cover;
        box-shadow: 1px 1px 4px #000;
    }

    .cardText {
        border-radius: 5px;
        grid-row: 2;
        grid-column: 1;
        background-color: #000;
        filter: opacity(80%);
        margin: -40% 5% 5% 5%;
    }

    .cardText h2,
    .cardText p {
        color: white;
        font-family: Manrope;
        margin: 2%;
    }

    .cardText p {
        font-size: 1.5rem;
    }

    .cardText h2 {
        font-size: 2rem;
    }

}
</style>