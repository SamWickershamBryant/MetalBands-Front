<template>
  <Line :data="data" :options="options" />
</template>

<script>
chartConfig = {"origin":"USA","formed":"1998","split":"-","band_name":"Black Label Society","id":"228","fans":"424","style":"Heavy"}
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
      required: true,
    },
  },
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
