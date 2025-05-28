
<script setup lang="ts">
import Logout from '~/src/component/button/logout.vue'
import {userAuthStore} from "~/src/store/auth/useAuthStore";

const authStore = userAuthStore();
const { token } = storeToRefs(authStore)

</script>


<template>
  <v-app-bar
      app
      color="deep-purple accent-4"
      dark
      elevation="4"
  >
    <!-- Titre ou Logo -->
    <v-toolbar-title class="font-weight-bold text-uppercase">🍽️ RecetteApp</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Liens -->
    <v-btn to="/" text class="nav-link">Accueil</v-btn>
    <v-btn v-if="token"  to="/ajouterRecette" text class="nav-link">Ajouter Recette</v-btn>
    <v-btn v-if="!token"  to="/login" text class="nav-link">Login</v-btn>
    <logout v-else />
  </v-app-bar>
</template>



<style scoped>
.nav-link {
  color: white;
  text-transform: none;
  font-weight: 500;
  transition: background-color 0.2s;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
