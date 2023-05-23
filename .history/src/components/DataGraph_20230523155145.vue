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
  <p>{{data}}</p>
</template>

<script>
import { Chart } from 'chart.js';
import { BarController, CategoryScale, LinearScale, Title } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, Title);

export default {
  mounted() {
    this.generateFormationsChart();
    this.generateSplitUpsChart();
    this.generateActiveBandsChart();
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    generateFormationsChart() {
  const formationsData = this.getDataByYear('formed');
  const years = Object.keys(formationsData);
  const counts = Object.values(formationsData);

  const formationsChart = new Chart(document.getElementById('formations-chart'), {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Band Formations',
          data: counts,
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0,
          title: {
            display: true,
            text: 'Number of Formations',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Year',
          },
        },
      },
    },
  });
  formationsChart.update();
},
generateSplitUpsChart() {
  const splitUpsData = this.getDataByYear('split');
  const years = Object.keys(splitUpsData);
  const counts = Object.values(splitUpsData);

  const splitUpsChart = new Chart(document.getElementById('split-ups-chart'), {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Band Split-ups',
          data: counts,
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0,
          title: {
            display: true,
            text: 'Number of Split-ups',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Year',
          },
        },
      },
    },
  });
  splitUpsChart.update();
},
generateActiveBandsChart() {
  const activeBandsData = this.getDataByYear('active');
  const years = Object.keys(activeBandsData);
  const counts = Object.values(activeBandsData);

  const activeBandsChart = new Chart(document.getElementById('active-bands-chart'), {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Active Bands',
          data: counts,
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0,
          title: {
            display: true,
            text: 'Number of Active Bands',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Year',
          },
        },
      },
    },
  });
  activeBandsChart.update();
},

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
