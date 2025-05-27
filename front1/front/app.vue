<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import {useRecettesStore} from "~/src/store/recette/useRecettesStore.js";

useRecettesStore().chargerRecette()

</script>