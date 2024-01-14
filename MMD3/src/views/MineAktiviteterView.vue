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
        <h1>MINE AKTIVITETER</h1>
        <div class="toFromDate">
            <h3>Fra:</h3>
            <input type="date" name="" id="" value="2024-07-24">
            <h3>Til:</h3>
            <input type="date" name="" id="" value="2024-07-25">
        </div>
        <div class="cardHolder">
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>
            <div class="placeHolderCard">
                <p>Ingen aktiviteter</p>
            </div>

        </div>
        <RouterLink class="plusBtn" to="/opretaktivitet">
            <img src="@/assets/plusBtn.svg" alt="Tilføj aktivitet">
        </RouterLink>
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
        grid-column: 2/span 3;
    }

    .toFromDate {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: 10% 1fr 10% 1fr;
        margin-bottom: 5%;
    }

    .toFromDate input {
        padding: 1%;
        border-radius: 5px;
        width: 80%;
        height: fit-content;
        margin: auto;
        font-family: Manrope;
    }

    .toFromDate h3 {
        font-family: Manrope;
        height: fit-content;
        margin: auto;
    }

    h2 {
        grid-column: 2/span 7;
        font-family: Manrope;
    }

    .cardHolder {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 5%;
        padding-bottom: 15%;
        height: 80vh;
    }

    .placeHolderCard {
        background-color: #FFF;
        border-radius: 5px;
        grid-column: span 3;
        box-shadow: 1px 1px 4px #000;
    }

    .placeHolderCard p {
        font-family: Manrope;
        text-align: center;
        margin: auto;
    }

    .plusBtn {
        position: fixed;
        bottom: 10%;
        right: 5%;
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
        grid-column: 2/span 3;
        font-size: 3rem;
    }

    .toFromDate {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: 10% 1fr 10% 1fr;
        margin-bottom: 5%;
    }

    .toFromDate input {
        padding: 1%;
        border-radius: 5px;
        width: 80%;
        height: fit-content;
        margin: auto;
        font-family: Manrope;
        font-size: 1.5rem;
    }

    .toFromDate h3 {
        font-family: Manrope;
        height: fit-content;
        margin: auto;
        font-size: 2rem;
    }

    h2 {
        grid-column: 2/span 7;
        font-family: Manrope;
        font-size: 2rem;
    }

    .cardHolder {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 5%;
        padding-bottom: 15%;
        height: 80vh;
    }

    .placeHolderCard {
        background-color: #FFF;
        border-radius: 5px;
        grid-column: span 3;
        box-shadow: 1px 1px 4px #000;
    }

    .placeHolderCard p {
        font-family: Manrope;
        text-align: center;
        margin: auto;
        font-size: 1.2rem;
    }

    .plusBtn {
        position: fixed;
        bottom: 10%;
        right: 5%;
    }
}
</style>