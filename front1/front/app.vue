<template>
  <v-app>
    <navbar />
    <v-main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>

<script setup>
import {useRecettesStore} from "~/src/store/recette/useRecettesStore.js";
import Navbar from "~/src/component/nav/navbar.vue";


useRecettesStore().chargerRecette()

</script>