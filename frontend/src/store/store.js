import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
const apiRoot = 'http://localhost:8000'


const store = new Vuex.Store({
  state: {
    stock: '-',
    stockName: 'NO stock selected',
    chartTitle: 'NO stock selected',
    stockList: [],
    datas: [['time', 'Price'], [new Date(), 0]]
  },
  mutations: {
    'CHANGE_STOCK': function (state, stock) {
      state.stock = stock.stockId
      state.stockName = stock.stockName
    },
    'UPDATE_DATAS': function (state, datas) {
      var dataSets = [['time', 'Price']]
      // convert the string to date
      datas = datas.map(function(item){ return [new Date(item[0] + 'T04:00:00Z'), item[1]]})
      dataSets = dataSets.concat(datas)
      state.datas = dataSets
      const title = state.stockName
      state.chartTitle = title
    },
    'GET_STOCKS': function (state, stocks) {
      state.stockList = stocks
    },
    'CLEAR_DATAS': function (state) {
      state.datas = [['time', 'Price'], [new Date(), 0]]
      state.chartTitle = 'NO stock selected'
    }
  },
  actions: {
    // handle the change function for update stock_id in store
    changeStock (store, stock) {
      store.commit('CHANGE_STOCK', stock)
    },
    // update store datas from api response
    updateDatas (store) {
      const stock = store.state.stock;
      if (stock == '-') {
        store.commit('CLEAR_DATAS')
      }
      else {
        var obj = {'stock_id': stock}
        return api.post(apiRoot + '/stock_price', obj, {emulateJSON:true})
          .then((response) => store.commit('UPDATE_DATAS', response.body.datas))
          .catch((error) => store.commit('API_FAIL', error))
      }
    },
    // update stock list info from api response
    getStocks (store) {
      return api.get(apiRoot + '/stock')
        .then((response) => store.commit('GET_STOCKS', response.body.datas))
        .catch((error) => store.commit('API_FAIL', error))
    }
  }
})

export default store