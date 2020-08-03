// import Axios from 'axios'
import { HTTPClient } from 'boot/axios'
import { Notify } from 'quasar'
// import { LocalStorage } from 'quasar'

const state = {
  isLoggedIn: false,
  usersDetails: null,
  // error: null,
  user: {},
  token: null
  // token: LocalStorage.getItem('token')
}

const mutations = {
  SET_AUTH: (state, payload) => {
    // eslint-disable-next-line no-unused-expressions
    state.isLoggedIn = payload
    state.user = payload
    state.token = payload
  }
}

const actions = {
  // eslint-disable-next-line no-empty-pattern
  registerUser ({ }, payload) {
    // write your axios code here
    console.log('payload information reg 1: ', payload) // payload.email|payload.password
  },

  // eslint-disable-next-line no-empty-pattern
  async doLogin (context, payload) {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    await HTTPClient.post('/login', payload, { config }).then(res => {
      // console.log(res)
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('id', res.data.id)
      context.commit('SET_AUTH', res.data)
      this.$router.push({ path: '/admin/dashboard' })
      Notify.create({
        icon: 'ion-close',
        color: 'primary',
        message: 'Successfully Login!',
        actions: [{ icon: 'icon', color: 'white' }]
      })
    }).catch(error => {
      // console.log(error)
      context.commit('SET_AUTH', error.data)
      Notify.create({
        icon: 'ion-close',
        color: 'negative',
        message: 'Invalid Login Details!',
        actions: [{ icon: 'icon', color: 'white' }]
      })
    })
  },

  async doRegister (context, payload) {
    await HTTPClient.post('/register', payload).then(res => {
      // localStorage.setItem('token', res.data.access_token)
      // context.commit('SET_AUTH', res.data)
      if (res) {
        this.$router.push({ path: '/' })
        Notify.create({
          icon: 'ion-close',
          color: 'primary',
          message: 'Register Successfully!',
          actions: [{ icon: 'icon', color: 'white' }]
        })
      }
    }).catch(error => {
      console.log(error)
      // context.commit('SET_AUTH', error.data)
      Notify.create({
        icon: 'ion-close',
        color: 'negative',
        message: 'Registration was not successful!',
        actions: [{ icon: 'icon', color: 'white' }]
      })
    })
  },

  doReset (context, payload) {
    console.log('Reset mail page!!!', payload)
  },

  fetchProduct (context) {
    // let token = localStorage.getItem('token')
    // // console.log('Reset mail page!!!')
    // HTTPClient.get('/fetch/product',
    //   headers {
    //   'Authorization': 'Bearer ' + token
    // }).then(res => {

    // })
  },

  registerUser2 (payload) {
    HTTPClient.post('/upload/picture', payload).then(res => {
      console.log('Testing register!!!', payload)
      // write your axios code here
    })
  }

  // fetchDetails (context, data) {
  //   let token = localStorage.getItem('token')
  //   HTTPClient.get('/fetch/user', data.id, {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   }).then((res) => {
  //     context.commit('SET_AUTH', res.data)
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
}

const getters = {
  user: state => {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
