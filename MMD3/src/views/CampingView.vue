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
        <h1>Camping</h1>
        <div class="card">
            <img src="/images/Camping/Camping1.png" alt="STANDARDPLADS">
            <div class="cardText">
                <h2>STANDARDPLADS</h2>
                <p>Alle vores standardpladser er velegnet til campingvogne eller teltvogne. Der er strøm på alle pladser og de er min. 100 m2. På mange pladser vil der være kig til vandet</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping2.png" alt="PLADS MED HAVKIG">
            <div class="cardText">
                <h2>PLADS MED HAVKIG</h2>
                <p>Alle vores havkigspladser ligger i anden eller tredje række til vandet. De er velegnet til campingvogne eller teltvogne. Der er strøm på alle pladser og de er min. 100 m2.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping3.png" alt="PANORAMAPLADS VED VANDET">
            <div class="cardText">
                <h2>PANORAMAPLADS VED VANDET</h2>
                <p>En panoramaplads ved vandet ligger i første række, selvfølgelig alle med en dejlig udsigt udover vandet. Der er strøm på alle pladserne og de er alle 100 m2.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping4.png" alt="PANORAMAPLADS PÅ TERRASSEN">
            <div class="cardText">
                <h2>PANORAMAPLADS PÅ TERRASSEN</h2>
                <p>Pladserne ligger på terrassen med udsigt udover pladsen og vandet.  Placeret tæt ved service, reception og butik, pool, motionscenter, aktivitetshus og legeplads.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping5.png" alt="STANDARDPLADS TIL TELTE">
            <div class="cardText">
                <h2>STANDARDPLADS TIL TELTE</h2>
                <p>Disse standardpladser er velegnede til større telte. Der er strøm på alle pladser og de er min. 100 m2. På rigtig mange af pladserne er der også fint kig til vandet.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping6.png" alt="TELTPLADS MED HAVKIG">
            <div class="cardText">
                <h2>TELTPLADS MED HAVKIG</h2>
                <p>Havkigspladser ligger i anden eller tredje række til vandet. Alle er velegnet til campingvogne, telte eller teltvogne. Der er strøm på alle pladser og de er min. 100 m2.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping7.png" alt="PANORAMAPLADS TIL TELTE">
            <div class="cardText">
                <h2>PANORAMAPLADS TIL TELTE</h2>
                <p>En panoramaplads ved vandet ligger i første række, selvfølgelig alle med en dejlig udsigt udover vandet. Der er strøm på alle pladserne og de er alle minimum 100 m2.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping8.png" alt="SMÅ TELTPLADSER">
            <div class="cardText">
                <h2>SMÅ TELTPLADSER</h2>
                <p>Mindre teltpladser anbefalet til cyklister eller vandrere. Der er mulighed for strøm på alle pladser. Praktisk placeret i tæt på servicefaciliteter.</p>
            </div>
        </div>
        <div class="card">
            <img src="/images/Camping/Camping9.png" alt="PLADS TIL AUTOCAMPERE">
            <div class="cardText">
                <h2>PLADS TIL AUTOCAMPERE</h2>
                <p>Alle vores autocamperpladser har fast underlag, som er støbt i beton. Pladserne er alle store, og har strøm og et bord. Ligger ud til kørevej, så det er nemt og hurtigt at komme til og fra.</p>
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
        margin: -25% 5% 5% 5%;
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

}
</style>