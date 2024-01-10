<script setup>

</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="">
        </RouterLink>
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
        <h1>MINE AKTIVITETER</h1>
        <select name="datePicker" id="datePicker">
            <option value="">24. Juli 2024</option>
            <option value="">25. Juli 2024</option>
            <option value="">26. Juli 2024</option>
            <option value="">27. Juli 2024</option>
            <option value="">28. Juli 2024</option>
            <option value="">29. Juli 2024</option>
            <option value="">30. Juli 2024</option>
            <option value="">31. Juli 2024</option>
        </select>
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

        </div>
        <RouterLink class="plusBtn" to="/opretaktivitet">
           <img src="@/assets/plusBtn.svg" alt=""> 
        </RouterLink>
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
    grid-column: 2/span 3;
}

#datePicker {
    grid-column: 2/span 5;
    width: 70%;
    padding: 5%;
    border-radius: 5px;
    margin-bottom: 15%;
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
    height: 50vh;
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

</style>