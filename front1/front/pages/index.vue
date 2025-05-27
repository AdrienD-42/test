<template>
  <div>
    <!-- Exemple : affichage des recettes -->
    <ul>
      <li v-for="recette in recettesStore.recettes" :key="recette.id">
        {{ recette.titre }}
      </li>
    </ul>
    <NuxtLink to="/ajouterRecette">form</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import {useRecettesStore} from "~/src/store/recette/useRecettesStore";

const recettesStore = useRecettesStore()
await recettesStore.chargerRecette()
</script>