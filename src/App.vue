<script setup lang="ts">
import UserSide from "./layout/UserSide.vue";
import StatsSide from "./layout/StatsSide.vue";
</script>

<template>
  <PrimeToast/>
  <div class="flex justify-content-center align-content-center align-items-center flex-wrap py-4">
    <div class="col-12 md:col-6 p-4"><StatsSide/></div>
    <div class="col-12 md:col-6 p-4"><UserSide/></div>
  </div>
</template>

<style scoped>

</style>
