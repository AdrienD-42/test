<template>

  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="recette in recettes" :key="recette.id">
        <NuxtLink :to="`/recettes/${recette.id}`">
          {{ recette.titre }}
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {useRecettesStore} from "~/src/store/recette/useRecettesStore";
import Navbar from "~/src/component/nav/navbar.vue";
import RecetteCard from "~/src/component/cards/recetteCard.vue";

const recettesStore = useRecettesStore()
await recettesStore.chargerRecette()
const {recettes} = storeToRefs(recettesStore)
</script>