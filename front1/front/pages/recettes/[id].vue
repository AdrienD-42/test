<script setup lang="ts">

import RecetteCard from "~/src/component/cards/recetteCard.vue";
import type {Recette} from "~/src/obj/recette";
import {useRecettesStore} from "~/src/store/recette/useRecettesStore";
const route = useRoute()
const id = Number(route.params.id);
const recetteStore = useRecettesStore();

const recette = ref<Recette | null>(null)

onMounted(async () => {
  const data = await recetteStore.findRecetteById(id)
  recette.value = data ?? null
console.log(recette)
})
</script>

<template>
  <div v-if="recette">
    <RecetteCard :recette="recette" />
  </div>
  <div v-else>
    Chargement...
  </div>
</template>

<style scoped>

</style>