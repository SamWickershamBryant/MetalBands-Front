<template>
  
  <Line :data="datas" :options="options" />
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
    var notcc= {
      data: {
        labels: this.yearsArray(),
        datasets: [
        {
          label: 'Band Formations',
          backgroundColor: '#f00000',
          data: this.formations()
          },
          {
            label: 'Band Split Ups',
            backgroundColor: '#c7d898',
            data: this.splitups()

          },
          {
            label: 'Active Bands',
            backgroundColor: '#7fffd4',
            data: this.activelikefrfr()
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation:false,
        stacked:false,
        title: {
          display:true,
          text: 'metal bands thru the years'
        }
      }
    }
    return {datas:notcc.data, options:notcc.options}
  },
  watch:{
    data:{
      handler(){
        this.datas.labels = this.yearsArray()
        this.datas.datasets[0] = this.formations()
        this.datas.datasets[1] = this.splitups()
        this.datas.datasets[2] = this.activelikefrfr()
      }
    }
  },
  methods:{
    minMaxYears(){
      let years = this.data.filter(band => !isNaN(band.formed) && band.formed !== "-").map(band => parseInt(band.formed))
      console.log(years)
      let minYear = Math.min(...years)
      let maxYear = Math.max(...years)
      return {minYear,maxYear}
    },
    yearsArray(){
      let years = this.minMaxYears()
      console.log(years)
      var arr = []
      for (var i = years.minYear; i <= 2020; i++){
        console.log(i)
        arr.push(i)
      }
      console.log(arr)
      return arr
    },
    formations(){
      let years = this.yearsArray()
      var formationsnotcc = []
      years.forEach((y) => {
        var count = this.data.filter(band => parseInt(band.formed) == y).length
        formationsnotcc.push(count)
      })
      return formationsnotcc
    },
    splitups(){
      let years = this.yearsArray()
      var splitupsnotcc = []
      years.forEach((y) => {
        var count = this.data.filter(band => parseInt(band.split) == y).length
        splitupsnotcc.push(count)
      })
      return splitupsnotcc
    },
    activelikefrfr(){
      let years = this.yearsArray()
      var actives = []
      years.forEach((y) => {
        var count = this.data.filter(band => (band.split == '-' && parseInt(band.formed) <= y) || (parseInt(band.split) > y && parseInt(band.formed) <= y)).length
        actives.push(count)
      })
      return actives
    }
  }
}
</script>
