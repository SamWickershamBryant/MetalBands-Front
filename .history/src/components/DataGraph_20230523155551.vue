<template>
  <div>
    <h1>Band Statistics</h1>
    <div>
      <h2>Formations by Year</h2>
      <div id="formations-chart"></div>
    </div>
    <div>
      <h2>Split-ups by Year</h2>
      <div id="split-ups-chart"></div>
    </div>
    <div>
      <h2>Active Bands by Year</h2>
      <div id="active-bands-chart"></div>
    </div>
  </div>
  <p>{{getDataByYear}}</p>
</template>

<script>
import { BarController, CategoryScale, LinearScale, Title } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, Title);

export default {
  mounted() {
    
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getDataByYear(key) {
      const data = this.data

      const result = {};

      data.forEach(entry => {
        const year = entry[key];
        if (year in result) {
          result[year]++;
        } else {
          result[year] = 1;
        }
      });

      return result;
    },
  },
};
</script>

<style>
#formations-chart,
#split-ups-chart,
#active-bands-chart {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}
</style>
