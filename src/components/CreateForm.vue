<script setup lang="ts">
import {ref} from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const cities = ref([
    { name: 'Sent', code: 'S' },
    { name: 'Ignored', code: 'I' },
    { name: 'Reject', code: 'R' },
    { name: 'First Call', code: 'F' },
    { name: 'Tech Call', code: 'T' },
    { name: 'Offert', code: 'OK' },
    { name: 'Refuse', code: 'KO' },
]);

const body = ref('');
const title = ref('');
const role = ref('');
const notes = ref('');

const error = ref(false);

const post = () => {
  if (body.value === '' || title.value === '' || role.value === '') {
    error.value = true;
  } else {
    body.value = '';
    title.value = '';
    role.value = '';
    error.value = false;
    toast.add({ severity: 'success', summary: 'Save', detail: 'Success!', life: 3000 });
  }
}
</script>

<template>
  <div>
    <label for="text" class="block text-900 font-medium mb-2">Company</label>
    <PrimeInputText autocomplete="off" id="text" v-model="title" type="text" class="w-full mb-3" />

    <label for="role" class="block text-900 font-medium mb-2">Role</label>
    <PrimeInputText autocomplete="off" id="role" v-model="role" type="text" class="w-full mb-3" />

    <label for="body" class="block text-900 font-medium mb-2">Status</label>
    <PrimeDropdown v-model="body" id="body" :options="cities" optionLabel="name" placeholder="None" checkmark :highlightOnSelect="true" class="w-full  mb-3" />

    <label for="notes" class="block text-900 font-medium mb-2">Notes</label>
    <PrimeTextarea v-model="notes" id="notes" class="col-12 mb-3" rows="5"/>

    <PrimeInlineMessage class="mb-2 w-full" v-if="error" severity="warn">Complete all fields.</PrimeInlineMessage>

    <PrimeButton label="Applicate!" icon="pi pi-upload" type="button" @click="post" class="w-full"></PrimeButton>
  </div>
</template>

<style>
textarea { resize: vertical; }
</style>
