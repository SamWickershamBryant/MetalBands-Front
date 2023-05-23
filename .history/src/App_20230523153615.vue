<script>
import graph from './components/Graph.vue'
import axios from 'axios'
let url = 'https://cyzy36l9vd.execute-api.us-east-2.amazonaws.com/api'
export default {
  components: {
    graph
  },
  data() {
    return {
      items: [], // to store the API response
      currentPage: 0,
      itemsPerPage: 20,
      error: null // to store any error from the API
    }
  },
  async created() {
    try {
      const response = await axios.get(url + '/metalbands');
      this.items = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    pagedData() {
      const pages = [];
      for (let i = 0; i < this.items.length; i += this.itemsPerPage) {
        pages.push(this.items.slice(i, i + this.itemsPerPage));
      }
      return pages;
    },
  },
  methods:{
    nextPage(){
      if (this.currentPage < this.pageCount - 1){
        this.currentPage++
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
  }

}
</script>

<template>
  <h1>Metal Bands Data</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Origin</th>
          <th>Formed</th>
          <th>Split</th>
          <th>Band Name</th>
          <th>ID</th>
          <th>Fans</th>
          <th>Style</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in pagedData[currentPage]" :key="item.id">
          <td>{{ item.origin }}</td>
          <td>{{ item.formed }}</td>
          <td>{{ item.split }}</td>
          <td>{{ item.band_name }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.fans }}</td>
          <td>{{ item.style }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="prevPage" :disabled="currentPage <= 0">Prev</button>
    <button @click="nextPage" :disabled="currentPage >= pageCount - 1">Next</button>
    <p>{{ currentPage }}</p>
  </div>
  <graph :data='items
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

}
</style>
