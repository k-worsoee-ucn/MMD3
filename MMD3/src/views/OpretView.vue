<script setup>

</script>

<template>
    <main>
        <a class="back" href="/aktiviteter">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>OPRET AKTIVITET</h1>
        <form>
            <label for="">Navn på aktivitet:</label>
            <input type="text" name="aName" id="aName">
            <label for="">Tidspunkt:</label>
            <input type="datetime-local" name="aDT" id="aDT">
            <label for="">Beskrivelse af aktivitet: </label>
            <input type="text" name="aDesc" id="aDesc">
            <label for="">Tilføj billede</label>
            <input type="file" name="" id="aImg">
        </form>
        <button>OPRET</button>
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

#aDesc {
    height: 20vh;
}

form {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 5%;
}

form label {
    margin: 15% 0 2% 0;
    font-family: Manrope;
}

form label, form input {
    grid-column: span 7;
}

button {
    height: 7vh;
    grid-column: 2/span 7;
    background-color: #F97F0E;
    color: #FFF;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
}

</style>