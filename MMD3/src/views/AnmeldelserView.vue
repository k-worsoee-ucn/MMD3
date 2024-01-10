<script setup>

</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="">
        </RouterLink>
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="">
        <h1>Anmeldelser</h1>
        <div class="review">
            <div class="rUser">
                <img src="/images/Personer/Martin.png" alt="">
                <h2>Martin Lystrup Jensen</h2>
            </div>
            <hr>
            <div class="rInfo">
                <div class="rRating">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                </div>
                <p class="rText">
                    Lærkelunden Camping har været en fantastisk oplevelse! Børnene elskede hvert øjeblik på dette dejlige sted.
                </p>
            </div>
        </div>
        <div class="review">
            <div class="rUser">
                <img src="/images/Personer/Martin.png" alt="">
                <h2>Martin Lystrup Jensen</h2>
            </div>
            <hr>
            <div class="rInfo">
                <div class="rRating">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                </div>
                <p class="rText">
                    Lærkelunden Camping har været en fantastisk oplevelse! Børnene elskede hvert øjeblik på dette dejlige sted.
                </p>
            </div>
        </div>
        <div class="review">
            <div class="rUser">
                <img src="/images/Personer/Martin.png" alt="">
                <h2>Martin Lystrup Jensen</h2>
            </div>
            <hr>
            <div class="rInfo">
                <div class="rRating">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                    <img src="@/assets/ratingStarFilled.svg" alt="">
                </div>
                <p class="rText">
                    Lærkelunden Camping har været en fantastisk oplevelse! Børnene elskede hvert øjeblik på dette dejlige sted.
                </p>
            </div>
        </div>
        <div class="addReview">
            <div class="addInfo">
                <h2>Skriv en anmeldelse</h2>
                <h3>Score:</h3>
                <div class="ddRating">
                    <img src="@/assets/ratingStarUnfilled.svg" alt="">
                    <img src="@/assets/ratingStarUnfilled.svg" alt="">
                    <img src="@/assets/ratingStarUnfilled.svg" alt="">
                    <img src="@/assets/ratingStarUnfilled.svg" alt="">
                    <img src="@/assets/ratingStarUnfilled.svg" alt="">
                </div>
                <h3>Anmeldelse:</h3>
                <input type="text">
                <button id="cancelBtn">FORTRYD</button>
                <button id="postBtn">UDGIV</button>
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

.review, .addReview {
    grid-column: 2/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #fff;
    font-family: Manrope;
    margin-bottom: 10%;
}

.rUser {
    grid-row: 1;
    grid-column: 1/span 7;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 5%;
}

.rUser img {
    width: 100%;
    border-radius: 50%;
    grid-column: 1;
    margin: auto;
}

.rUser h2 {
    grid-column: 3/span 6;
    margin: auto;
    font-size: 1.3rem;
}

.review hr {
    grid-row: 2;
    grid-column: 1/span 7;
    width: 100%;
    height: 1%;
}

.rInfo, .addInfo {
    grid-row: 3;
    grid-column: 1/span 7;
    padding: 5%;
}

.addInfo input {
    width: 97%;
    height: 10vh;
}

.addInfo button {
    margin-top: 2%;
    width: 49%;
    height: 4vh;
    font-size: 1rem;
    border-radius: 5px;
}

#cancelBtn {
 margin-right: 1%;
 border-color: #F97F0E;
}

#postBtn {
 margin-left: 1%;
 background-color: #F97F0E;
 border: none;
 color: #fff;
}

</style>