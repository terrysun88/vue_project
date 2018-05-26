import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  get (url, request) {
    return Vue.http.get(url, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  post (url, request, option) {
    return Vue.http.post(url, request, option)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}