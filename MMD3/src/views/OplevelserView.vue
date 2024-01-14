<script setup>
import { onMounted } from "vue";
import TheHeader from "@/components/TheHeader.vue"
sessionStorage.setItem("firstLoad", false)

onMounted(() => {
  const menuItem1 = document.querySelector("#menuItem1")
  const menuItem2 = document.querySelector("#menuItem2")
  const menuItem3 = document.querySelector("#menuItem3")
  const menuItem4 = document.querySelector("#menuItem4")
  const menuItem5 = document.querySelector("#menuItem5")
  menuItem1.classList.remove("currentItem")
  menuItem2.classList.remove("currentItem")
  menuItem3.classList.add("currentItem")
  menuItem4.classList.remove("currentItem")
  menuItem5.classList.remove("currentItem")
})

</script>

<template>
    <main>
        <RouterView />
        <RouterLink class="back" to="/">
            <img src="@/assets/chevron-left-solid.svg" alt="Tilbage">
        </RouterLink>
        <TheHeader></TheHeader>
        <h1>Oplevelser</h1>
        <h2>Slotte og Kirker</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="/images/Oplevelser/Graasten_slot.png" alt="Gråsten slot">
                <p>GRÅSTEN SLOT</p>
                <p class="desc">Smukt slot 10 min væk fra Lærkelunden</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Soenderborg_slot.png" alt="Sønderborg slot">
                <p>SØNDERBORG SLOT</p>
                <p class="desc">Historisk slot ca. 30 min væk fra Lærkelunden</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Gottorp_slot.png" alt="Gottrop slot">
                <p>GOTTORP SLOT</p>
                <p class="desc">Bygget på en ø vest for Slegsvig centrum</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Glucksborg_slot.png" alt="Glücksborg slot">
                <p>GLÜCKSBORG SLOT</p>
                <p class="desc">Et af de vigtigste residensslotte </p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Den_gamle_kirke.png" alt="Den gamle kirke">
                <p>DEN GAMLE KIRKE</p>
                <p class="desc">Et af landets 5 ældste kirker</p>
            </div>
        </div>
        <h2>Museer og forlystelser</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="/images/Oplevelser/Historiecenter.png" alt="Historiecenter">
                <p>HISTORIECENTER DYBBEL BANKE</p>
                <p class="desc">Om krigen i 1864</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Universe.png" alt="Universe">
                <p>UNIVERSE</p>
                <p class="desc">Smukt slot 10 min væk fra Lærkelunden</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Hedeby.png" alt="Hedeby">
                <p>HEDEBY</p>
                <p class="desc">Smukt slot 10 min væk fra Lærkelunden</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Krusmoelle.png" alt="Krusmølle">
                <p>KRUSMØLLE</p>
                <p class="desc">Mølle med tilnyttet dejlig café</p>
            </div>
        </div>
        <h2>Sport og natur</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="/images/Oplevelser/Golf.png" alt="Golf">
                <p>GOLF</p>
                <p class="desc">Benniksgaards- og Sønderjyllands Golfklub</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Sti.png" alt="Gendarmstien">
                <p>GENDARMSTIEN</p>
                <p class="desc">Går lige igennem Lærkelunden 84km</p>
            </div>
            <div class="card">
                <img src="/images/Oplevelser/Fiskesoe.png" alt="Frueskov fiskesø">
                <p>FRUESKOV FISKESØ</p>
                <p class="desc">Ligger i et naturskønt og roligt område</p>
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

    h2 {
        font-family: Manrope;
        grid-column: 2/span 7;
    }

    .cardHolder {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 5%;
        margin-bottom: 20%;
    }

    .card {
        background-color: #FFF;
        border-radius: 5px;
        grid-column: span 3;
        box-shadow: 1px 1px 4px #000;
    }

    .card img {
        width: 100%;
        border-radius: 5px 5px 0 0;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .card p {
        margin-left: 5%;
        font-family: Manrope;
    }

    .desc {
        font-size: .8rem;
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
    }

    h2 {
        font-family: Manrope;
        grid-column: 2/span 7;
    }

    .cardHolder {
        grid-column: 2/span 7;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        gap: 5%;
        margin-bottom: 20%;
    }

    .card {
        background-color: #FFF;
        border-radius: 5px;
        grid-column: span 3;
        box-shadow: 1px 1px 4px #000;
    }

    .card img {
        width: 100%;
        border-radius: 5px 5px 0 0;
        aspect-ratio: 16/9;
        object-fit: cover;
    }

    .card p {
        margin-left: 5%;
        font-family: Manrope;
    }

    .desc {
        font-size: .8rem;
    }

}
</style>
