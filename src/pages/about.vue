<template>
    <div class="row q-pa-md">
        <h3>Product Name</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi reprehenderit eligendi dignissimos natus quidem iusto cum voluptatum debitis tempora asperiores, a omnis nostrum, error laboriosam excepturi quaerat? Excepturi, eum.</p>
        <!-- <router-link to="/main"> Go to Home Page </router-link> <q-separator /> <router-link to="/"> Go to Login Page</router-link> -->
        <div class="text-center">
          <h5 class="q-mb-auto">{{ results.name }}</h5>
          <p class="q-mt-auto"> {{ results.title }} </p>
        </div>
    </div>
</template>

<script>
import { HTTPClient } from 'boot/axios'
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  data () {
    return {
    //   test: {}
      results: []
    }
  },
  computed: {
    ...mapGetters('store', ['user'])
  },

  mounted () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      const uid = this.$route.query.id
      // let token = localStorage.getItem('token')
      HTTPClient.get(`/fetch/product/${uid}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((res) => {
        console.log(res.data)
        this.results = res.data
        // this.result = res.data;
        // this.frmForm.phone = res.data.phone
        // this.frmForm.email = res.data.email
        // this.frmForm.recipient = res.data.firstname + ' ' + res.data.firstname
      })
    }
  }

}
</script>

<style>

</style>
