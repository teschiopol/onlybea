<script setup lang="ts">
  import SingleCard from './SingleCard.vue';
</script>

<template>
  <div >
    <div class="grid">
      <SingleCard title="Total" :counter="142" icon-color="blue" icon="pi-folder-open" />
      <SingleCard title="Sent" :counter="54" icon-color="purple" icon="pi-file-arrow-up" />
      <SingleCard title="Ignored" :counter="19" icon-color="orange" icon="pi-ban" />
      <SingleCard title="Reject" :counter="3" icon-color="red" icon="pi-times" />
    </div>
  </div>
</template>
