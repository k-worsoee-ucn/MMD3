<script setup>

</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="">
        </RouterLink>
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
        <h1>Min Profil</h1>
        <img id="profilePic" src="/images/Personer/Martin.png" alt="">
        <div id="info">
            <h2>Martin Lystrup Jensen</h2>
            <p>MartinLJensen@gmail.com</p>
            <RouterLink class="infobtn" to="/mineaktiviteter">
                <img src="@/assets/calendar-solid.svg" alt="">
                <p>Mine Aktiviteter</p>
            </RouterLink>
            <RouterLink class="infobtn" to="/anmeldelser">
                <img src="@/assets/star-solid.svg" alt="">
                <p>Mine Anmeldelser</p>
            </RouterLink>
            <RouterLink class="infobtn" to="/">
                <img src="@/assets/logout.svg" alt="">
                <p>Log Ud</p>
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
@media screen and (max-width: 640px) {
    #profilePic {
        grid-column: 3/span 5;
        width: 100%;
        border-radius: 50%;
        padding: 5%;
        background-image: linear-gradient(#B5D6F2, #b5d6f200);
        z-index: 1;
        aspect-ratio: 1/1;
        object-fit: cover;
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

    .infobtn {
        grid-column: 2/span 7;
        background-color: #fff;
        display: grid;
        grid-template-columns: 20% 80%;
        border-radius: 5px;
        margin-bottom: 5%;
        text-decoration: none;
    }

    .infobtn img {
        width: 50%;
        margin: auto;
    }

    .infobtn p {
        margin: auto 0;
        color: #000;
    }

    #info {
        grid-column: 1/span 9;
        background-image: linear-gradient(to right, #B5D6F2, #EAF1F8, #B5D6F2);
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        margin-top: -50%;
        padding: 40% 0 15% 0;
    }

    #info h2 {
        font-size: 1rem;
        grid-column: 1/span 9;
        text-align: center;
    }

    #info p {
        grid-column: 1/span 9;
        text-align: center;
    }

    #info h2,
    #info p {
        font-family: Manrope;
        grid-column: 2/span 7;
    }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
    #profilePic {
        grid-column: 4/span 3;
        width: 100%;
        border-radius: 50%;
        padding: 5%;
        background-image: linear-gradient(#B5D6F2, #b5d6f200);
        z-index: 1;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

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
        font-size: 2.5rem;
    }

    .infobtn {
        grid-column: 2/span 7;
        background-color: #fff;
        display: grid;
        grid-template-columns: 20% 80%;
        border-radius: 5px;
        margin-bottom: 5%;
        text-decoration: none;
        padding: 2%;
    }

    .infobtn img {
        width: 50%;
        margin: auto;
    }

    .infobtn p {
        margin: auto 0;
        color: #000;
    }

    #info {
        grid-column: 1/span 9;
        background-image: linear-gradient(to right, #B5D6F2, #EAF1F8, #B5D6F2);
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        margin-top: -25%;
        padding: 20% 0 15% 0;
    }

    #info h2 {
        font-size: 1rem;
        grid-column: 1/span 9;
        text-align: center;
        font-size: 2rem;
    }

    #info p {
        grid-column: 1/span 9;
        text-align: center;
        font-size: 1.5rem;
    }

    #info h2,
    #info p {
        font-family: Manrope;
        grid-column: 2/span 7;
    }
}
</style>