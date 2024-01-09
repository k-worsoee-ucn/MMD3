<script setup>

</script>

<template>
    <main>
        <a class="back" href="/">
            <img src="../assets/chevron-left-solid.svg" alt="">
        </a>
        <img class="logo" src="../assets/logo_laerkelundenx.svg" alt="">
        <h1>DAGENS AKTIVITETER</h1>
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
        <h2>SOCIALE AKTIVITETER</h2>
        <div class="cardHolder">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
                <div class="peopleJoined">
                    <div class="pjIcon">
                        <img id="per1" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per2" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per3" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                    </div>
                    <p>+6 Flere</p>
                </div>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
                <div class="peopleJoined">
                    <div class="pjIcon">
                        <img id="per1" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per2" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per3" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                    </div>
                    <p>+6 Flere</p>
                </div>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
                <div class="peopleJoined">
                    <div class="pjIcon">
                        <img id="per1" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per2" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per3" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                    </div>
                    <p>+6 Flere</p>
                </div>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
                <div class="peopleJoined">
                    <div class="pjIcon">
                        <img id="per1" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per2" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                        <img id="per3" src="https://api.dicebear.com/7.x/personas/svg" alt="">
                    </div>
                    <p>+6 Flere</p>
                </div>
            </div>
        </div>
        <h2>AKTIVITETER PÅ PLADSEN</h2>
        <div class="cardHolder" id="sec2">
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
            <div class="card">
                <img src="https://unsplash.it/400" alt="">
                <p>Oplevelse navn</p>
            </div>
        </div>
        <a class="plusBtn" href="/opretaktivitet">
           <img src="../assets/plusBtn.svg" alt=""> 
        </a>
        
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

#datePicker {
    grid-column: 2/span 5;
    width: 70%;
    padding: 5%;
    border-radius: 5px;
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
    aspect-ratio: 16/7;
    object-fit: cover;
}

.card > p {
    margin: 0 0 0 5%;
    font-family: Manrope;
}

.peopleJoined {
display: grid;
grid-template-columns: repeat(3,1fr);
}

.peopleJoined p {
    grid-column: 2/span 2;
    margin-left: 5%;
    font-family: Manrope;
}

.pjIcon {
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.pjIcon img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 25px;
    margin: auto 0;
    box-shadow: 1px 1px 4px #000;
}

#per1 {
    margin-left: 60%;
}

#per2 {
    margin-left: 30%;
    z-index: 2;
}

#per3 {
    z-index: 3;
}

.plusBtn {
    position: fixed;
    bottom: 10%;
    right: 5%;
}

#sec2 {
    margin-bottom: 10%;
}
</style>