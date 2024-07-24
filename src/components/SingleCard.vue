<script setup lang="ts">
import { ref } from 'vue';

  const props = defineProps({
    title: String,
    counter: Number,
    icon: String,
    iconColor: String
  })

  const iconColorClass = ref('')
  iconColorClass.value = 'bg-' + props.iconColor + '-100';

  const iconClass = ref('')
  iconClass.value = 'pi ' + props.icon + ' text-' + props.iconColor + '-500';
</script>

<template>
  <div class="col-12 md:col-6">
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">{{title}}</span>
            <div class="text-900 font-medium text-xl">{{counter}}</div>
        </div>
        <div class="flex align-items-center justify-content-center border-round" :class="iconColorClass" style="width:2.5rem;height:2.5rem">
          <i class="text-xl" :class="iconClass"></i>
        </div>
      </div>
    </div>
  </div>
</template>
