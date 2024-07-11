<script setup lang="ts">
import {ref} from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const body = ref('');
const title = ref('');
const notes = ref('');

const error = ref(false);

const post = () => {
  if (body.value === '' || title.value === '') {
    error.value = true;
  } else {
    body.value = '';
    title.value = '';
    error.value = false;
    toast.add({ severity: 'success', summary: 'Save', detail: 'Success!', life: 3000 });
  }
}
</script>

<template>
  <div>
    <label for="text" class="block text-900 font-medium mb-2">Company</label>
    <PrimeInputText id="text" v-model="title" type="text" class="w-full mb-3" />

    <label for="body" class="block text-900 font-medium mb-2">Status</label>
    <PrimeInputText v-model="body" id="body" class="w-full mb-3"/>

    <label for="notes" class="block text-900 font-medium mb-2">Notes</label>
    <PrimeTextarea v-model="notes" id="notes" class="col-12 mb-3" rows="5"/>

    <PrimeInlineMessage class="mb-2 w-full" v-if="error" severity="warn">Complete all fields.</PrimeInlineMessage>

    <PrimeButton label="Post!" icon="pi pi-upload" type="button" @click="post" class="w-full"></PrimeButton>
  </div>
</template>

<style>
textarea { resize: vertical; }
</style>
