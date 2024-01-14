<script setup>
    import TheHeader from "@/components/TheHeader.vue"
</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="Tilbage">
        </RouterLink>
        <TheHeader></TheHeader>
        <h1>Udlejningsvogne</h1>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning1.png" alt="LUKSUSVOGN MED GULVVARME">
            <div class="cardText">
                <h2>LUKSUSVOGN MED GULVVARME</h2>
                <p>Adria Alpina 663 PT: En rigtig luksusvogn med gulvarme til 5 personer. Vognen er indrettet med 3 køjer,
                    dobbeltseng, siddegruppe, køkken med blus, ovn, køleskab, toilet og tv.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning2.png" alt="LUKSUSVOGN FOR 5">
            <div class="cardText">
                <h2>LUKSUSVOGN FOR 5</h2>
                <p>Adria Adora 573 PT: Luksusvogn med plads til 5 personer. Vognen er indrettet med 3 køjer, dobbeltseng,
                    siddegruppe, køkken med blus, gasovn, køleskab og fryser, toilet, tv.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Udlejningsvogne/Udlejning3.png" alt="LUKSUSVOGN FOR 2">
            <div class="cardText">
                <h2>LUKSUSVOGN FOR 2</h2>
                <p>Adria Alpina 663 HT: Luksusvogn indrettet til 2 personer. Indrettet med dobbeltseng, siddegruppe, køkken
                    med blus, ovn, køleskab og fryser, toilet, tv og vandbåren gulvvarme</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
@media screen and (max-width: 640px) {


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
        margin: -30% 5% 5% 5%;
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

}</style>