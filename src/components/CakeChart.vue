<script setup lang="ts">
import {ref, onMounted} from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: ['No Response', 'First Step', 'Reject'],
    datasets: [
      {
        data: [12, 34, 164],
        backgroundColor: ['rgba(249, 115, 22)', 'rgba(6, 182, 212)', 'rgb(210,73,169)'],
        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(210,73,169)'],
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  return {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: textColor
        }
      }
    }
  };
}
</script>

<template>
  <div class="card flex justify-content-center">
    <PrimeChart type="pie" :data="chartData" :options="chartOptions" class="py-4"/>
  </div>
</template>
