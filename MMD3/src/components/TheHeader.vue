<script setup>

</script>

<template>
    <div class="header">
        <img class="logo" src="@/assets/logo_laerkelundenx.svg" alt="Lærkelunden logo">
        <div class="language">
          <img src="@/assets/uk_flag.svg" alt="Engelsk / English">
          <img src="@/assets/de_flag.svg" alt="Tysk / German">
        </div>
    </div>
</template>

<style scoped>
    .header {
        grid-column: 2/span 8;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        height: fit-content;
    }

    .logo {
        grid-column: 3/span 3;
        margin: auto;
        width: 100%;
    }

    .language {
    grid-column: 7/span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .language img {
    width: 100%;
    margin: 15% 0;
  }
</style>