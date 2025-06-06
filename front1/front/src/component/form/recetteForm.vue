<script setup lang="ts">
import { reactive } from 'vue'
import 'vuetify/styles'
import type { Recette } from '~/src/obj/recette'
import { useRecettesStore } from '~/src/store/recette/useRecettesStore'

const useRecetteStore = useRecettesStore()

const recette = reactive<Recette>({
  id: 0,
  titre: '',
  ingredients: [],
  instructions: '',
  type: 'ENTREE',
  dateAjout: new Date(),
  like: 0
})

function ajouterIngredient() {
  recette.ingredients.push('')
}

function supprimmerIngredient() {
  recette.ingredients.pop()
}

async function envoyer() {
  recette.dateAjout = new Date()
  await useRecetteStore.ajouterRecette(recette)

  recette.id = 0
  recette.titre = ''
  recette.ingredients = []
  recette.instructions = ''
  recette.type = 'ENTREE'
  recette.like = 0
}
</script>

<template>
  <v-app>
    <v-container class="py-10" style="max-width: 600px">
      <v-card elevation="4" class="pa-6">
        <v-card-title class="text-h5 font-weight-bold">Ajouter une recette</v-card-title>

        <v-form @submit.prevent="envoyer">
          <v-text-field
              label="Titre"
              v-model="recette.titre"
              class="mb-4"
              outlined
              required
          />

          <v-select
              v-model="recette.type"
              :items="['ENTREE', 'PLAT', 'DESSERT']"
              label="Type de recette"
              outlined
              class="mb-4"
              required
          />

          <div v-for="(ingredient, index) in recette.ingredients" :key="index" class="mb-3">
            <v-text-field
                :label="`Ingrédient ${index + 1}`"
                v-model="recette.ingredients[index]"
                outlined
                hide-details
            />
          </div>

          <v-row class="mb-4" justify="space-between">
            <v-col cols="6">
              <v-btn block color="primary" @click="ajouterIngredient" flat>
                + Ajouter ingrédient
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn block color="red darken-1" @click="supprimmerIngredient" flat>
                - Supprimer ingrédient
              </v-btn>
            </v-col>
          </v-row>

          <v-textarea
              label="Instructions"
              v-model="recette.instructions"
              class="mb-4"
              outlined
              rows="4"
              required
          />

          <v-btn color="success" type="submit" block>
            ✅ Enregistrer la recette
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </v-app>
</template>

<style scoped>
.v-card-title {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
</style>