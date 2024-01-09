<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>Min Profil</h1>
        <img id="profilePic" src="https://unsplash.it/400/400" alt="">
        <div id="info">
            <h2>Fulde navn</h2>
            <p>Adam Jensen</p>
            <h2>Email</h2>
            <p>AJensen@gmail.com</p>
            <h2>Fødselsdag</h2>
            <p>01/01/1999</p>
            <h2>Køn</h2>
            <p>Mand</p>
        </div>
    </main>
</template>

<style scoped>
#profilePic {
    grid-column: 3/span 5;
    width: 100%;
    border-radius: 50%;
    padding: 5%;
    background-image: linear-gradient( #B5D6F2 , #b5d6f200);
    z-index: 1;
}
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
#info {
    grid-column: 1/span 9;
    background-image: linear-gradient(to right, #B5D6F2 , #EAF1F8, #B5D6F2);
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin-top: -50%;
    padding: 50% 0 15% 0;
}

#info p {
    margin-top: 0;
    background-color: #FFF;
    padding: 2%;
}

#info h2 {
    font-size: 1rem;
}

#info h2, #info p {
    font-family: Manrope;
    grid-column: 2/span 7;
}
</style>