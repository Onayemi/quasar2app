import Vue from 'vue'
import axios from 'axios'

const baseURL = 'http://remlextech.org/remlex-laravel7-api/api'
// http://remlextech.org/remlex-laravel7-api
// const apiURL = 'https://www.nellobytesystems.com/APIWalletBalanceV1.asp?'
// baseURL: `${process.env.API}`

const HTTPClient = axios.create({
  baseURL: baseURL,
  'Content-Type': 'application/json',
  Accept: 'application/json'
})

// const ApiClient = axios.create({
//   baseURL: apiURL
// })
// export default async ({ Vue }) => {
Vue.prototype.$axios = HTTPClient
// Vue.prototype.$axios = ApiClient
// }

//* ************* Begin Adding ********************/
// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token')

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }

//     return config
//   },

//   (error) => {
//     return Promise.reject(error)
//   }
// )
//* ************* Ending Adding ********************/

export { HTTPClient }
