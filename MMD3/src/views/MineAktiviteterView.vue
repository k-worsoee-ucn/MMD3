<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>MINE AKTIVITET</h1>
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
}
</style>