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
    labels: ['Ignored', 'Reject', 'Sent'],
    datasets: [
      {
        data: [19, 3, 54],
        backgroundColor: ['rgba(249, 115, 22)', 'rgba(230, 80, 150)', 'rgb(210,73,169)']
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
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
    <PrimeChart type="doughnut" :data="chartData" :options="chartOptions" class="py-4"/>
  </div>
</template>
