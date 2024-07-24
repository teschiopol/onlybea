<script setup lang="ts">
import UserSide from "./layout/UserSide.vue";
import StatsSide from "./layout/StatsSide.vue";
</script>

<template>
  <PrimeToast position="top-center"/>
  <div class="flex min-h-screen justify-content-center align-items-cente p-4 flex-wrap">
    <div class="col-12 md:col-6 p-4"><StatsSide/></div>
    <div class="col-12 md:col-6 p-4"><UserSide/></div>
  </div>
</template>

<style scoped>

</style>
