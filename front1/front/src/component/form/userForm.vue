<script setup lang="ts">

import type {authInfo} from "~/src/obj/authInfo";
import {userAuthStore} from "~/src/store/auth/useAuthStore";
const useAuthStore = userAuthStore() ;
const info = reactive<authInfo>({
  email : '' ,
  password : ''
})
function login(){
  useAuthStore.login(info);
}
</script>

<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card width="400">
      <v-card-title class="text-h5">Connexion</v-card-title>
      <v-card-text>
        <v-form ref="loginForm" >
          <v-text-field
              v-model="info.email"
              label="Email"
              required
          />
          <v-text-field
              v-model="info.password"
              label="Mot de passe"
              type="password"
              required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="login">Se connecter</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>