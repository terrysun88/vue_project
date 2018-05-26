<template>
  <div class="row">
    <div class="col-md-8">
      <select id="stock" v-on:change="onChange" class="form-control">
        <option value="-">Please select a stock</Option>
        <option v-for="stock in stockList":value = "stock.id" >
          {{ stock.name + ' (' + stock.quote + ')' }}
        </option>
      </select>
    </div>
    <div class="col-md-4">
      <button v-on:click="onClick" class="btn btn-primary">
        Update Chart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockList',
  computed: {
    stockList () {
      return this.$store.state.stockList
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('changeStock', {'stockId': e.target.value, 
                                            'stockName': e.target.options[e.target.selectedIndex].text})
    },
    onClick () {
      this.$store.dispatch('updateDatas')
    }
  }

}
</script>