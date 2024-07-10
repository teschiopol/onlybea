<script setup lang="ts">
import {ref} from "vue";
import LoginForm from "../components/LoginForm.vue";
import CreateForm from "../components/CreateForm.vue";
import {signInWithEmail} from "../services/service.ts";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const logged = ref(false);
const stats = ref(false);
const items = ref([
  { label: 'Add New', icon: 'pi pi-plus', command: () => {
      stats.value = false;
    } },
  { label: 'Find a Job', icon: 'pi pi-chart-line', command: () => {
      stats.value = true;
  } },
]);

const signIn = async (email) => {
  if (await signInWithEmail(email)) {
    logged.value = true;
  } else {
    toast.add({ severity: 'error', summary: 'Login Error', detail: 'Email not valid', life: 3000 });
  }
}
</script>

<template>
  <div v-if="logged">
    <PrimeTabMenu :model="items" class="mb-3"/>
    <div v-if="stats">
      <p>Coming Soon</p>
    </div>
    <div v-else>
      <CreateForm/>
    </div>
  </div>
  <div v-else class="flex justify-content-center">
    <LoginForm @signIn="signIn"/>
  </div>
</template>
