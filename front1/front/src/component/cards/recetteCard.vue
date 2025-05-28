<script setup lang="ts">
import type {Recette} from "~/src/obj/recette";
defineProps<{recette : Recette}>();

</script>

<template>
  <v-card class="mx-auto my-4" max-width="400" outlined>
    <v-card-title>{{ recette.titre }}</v-card-title>

    <v-card-subtitle class="text-capitalize">
      {{ recette.type}} - Ajouté le {{ new Date(recette.dateAjout).toLocaleDateString() }}
    </v-card-subtitle>

    <v-card-text>
      <strong>Ingrédients :</strong>
      <ul>
        <li v-for="(ingredient, index) in recette.ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>

      <strong>Instructions :</strong>
      <p>{{ recette.instructions }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <span>{{ recette.like }}</span>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>