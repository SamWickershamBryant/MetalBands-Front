<script>
import DataGraph from './components/DataGraph.vue'
import axios from 'axios'
import Papa from 'papaparse';
let url = 'https://cyzy36l9vd.execute-api.us-east-2.amazonaws.com/api'
export default {
  components: {
    DataGraph
  },
  data() {
    return {
      items: [], // to store the API response
      currentPage: 0,
      itemsPerPage: 20,
      error: null, // to store any error from the API
      currentSort: 'origin', // initial sort column
      currentSortDir: 'asc' // initial sort direction
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
    downloadCSV(data, filename) {
      // Convert the row to a CSV string
      const csvContent = Papa.unparse(data);

      // Create a Blob object
      const blob = new Blob([csvContent], { type: 'text/csv' });

      // Create a URL for the Blob object
      const url = URL.createObjectURL(blob);

      // Create an anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      // Programmatically click the anchor element to trigger the download
      a.click();

      // Cleanup
      URL.revokeObjectURL(url);
    },
    sortTable(column) {
    // if the column being sorted is the same as the current sort column, reverse the sort direction
    if(this.currentSort == column) {
      this.currentSortDir = this.currentSortDir == 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort = column;
      this.currentSortDir = 'asc';
    }

    this.items.sort((a, b) => {
      let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;

      // Check if the values are numeric
      if (!isNaN(a[this.currentSort]) && !isNaN(b[this.currentSort])) {
        // Convert to numbers and compare
        return (a[this.currentSort] - b[this.currentSort]) * modifier;
      } else {
        // Compare as strings
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }
    });
  }

  }

}
</script>

<template>
  <h1>Metal Bands Data</h1>
  <button @click="downloadCSV(items, 'mydata.csv')">DownloadCSV</button>
  
  <div id="controls">
  <p>Page {{ currentPage + 1}}</p>
  <div>
  <button @click="prevPage" :disabled="currentPage <= 0">Prev</button>
    <button @click="nextPage" :disabled="currentPage >= pageCount - 1">Next</button>
  </div>
</div>
  <div>
    <div class="container">
    <table>
      <thead>
        <tr>
          <th @click="sortTable('origin')">Origin</th>
        <th @click="sortTable('formed')">Formed</th>
        <th @click="sortTable('split')">Split</th>
        <th @click="sortTable('band_name')">Band Name</th>
        <th @click="sortTable('id')">ID</th>
        <th @click="sortTable('fans')">Fans</th>
        <th @click="sortTable('style')">Style</th>
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
  
    
    
    
  </div>
  <div id="graph">
  <DataGraph :data='items'/>
</div>
</div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  

}
#controls {
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  padding-top:10px;
  padding-bottom:10px;
  gap:10px;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: row;
}

.container > div {
  flex: 1;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

#graph {
  height:100%;
  width:100%;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

</style>
