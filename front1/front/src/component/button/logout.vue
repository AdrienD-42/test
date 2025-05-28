<script setup lang="ts">
import {userAuthStore} from "~/src/store/auth/useAuthStore";

const useAuthStore = userAuthStore();
const logout = () =>{
  useAuthStore.logout()
}
</script>

<template>
  <v-btn color="primary" @click="logout">
    Logout
  </v-btn>
</template>

<style scoped>

</style>