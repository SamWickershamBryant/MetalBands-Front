<template>
  <Line :data="data" :options="options" />
</template>

<script>

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

const chartConfig= {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
      }
    ]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
</script>
