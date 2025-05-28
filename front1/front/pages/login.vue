<script setup lang="ts">
import {userAuthStore} from "~/src/store/auth/useAuthStore";
import UserForm from "~/src/component/form/userForm.vue";

const userAuth = userAuthStore();
const { token } = storeToRefs(userAuth);
</script>

<template>
  <user-form></user-form>
</template>

<style scoped>

</style>