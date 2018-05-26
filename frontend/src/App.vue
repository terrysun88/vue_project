<template>
  <div id="app">
    <div class="row">
      <div class="offset-md-4">
        <h2>Weekly Stock Price Trend</h2>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="offset-md-4">
        <StockList/>
      </div>
    </div>
    <Chart/>
  </div>
</template>

<script>
import Chart from './components/Chart'
import StockList from './components/StockList'

export default {
  name: 'App',
  components: {
    Chart,
    StockList
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}


</script>

<style>
</style>
