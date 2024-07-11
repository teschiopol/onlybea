<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getPosts} from "../services/service.ts";
import PlaceHolder from "../components/PlaceHolder.vue";
import {ElementType} from "../types.ts";

const elements = ref<ElementType[]>([]);

onMounted(async () => {
  elements.value = await getPosts();
})

</script>

<template>
  <div >
    <p class="text-900 text-2xl text-center text-primary font-bold">Best Employee Advisor</p>
      <PlaceHolder/>
  </div>
</template>

<style scoped>

</style>
