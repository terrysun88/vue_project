<template>
  <div class="chart-container">
    <GChart
      type="LineChart"
      :data="data.chartData"
      :options="data.chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  name: 'Chart',
  computed: {
    data () {
      return {
        chartData: this.$store.state.datas,
        chartOptions: {
          title: this.$store.state.chartTitle,
          titleTextStyle: {
            fontSize: 18,
            color: '#19C996',
          },
          hAxis: {
            title: 'Date',
            format: 'yyyy-MM-dd',
            gridlines: { color: '#fff' },
            slantedText: true,
            titleTextStyle: {
              fontSize: 18,
              bold: true,
            }
          },
          vAxis: {
            title: 'Price',
            format:'$###,###,###.00',
            titleTextStyle: {
              fontSize: 18,
              bold: true,
            }
          },
          backgroundColor: '#fff',
          legend: { position: 'none' },
          height: 400,
        }
      }
    }
  }
}
</script>

<style>
</style>
