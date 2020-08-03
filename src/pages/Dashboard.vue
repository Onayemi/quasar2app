<template>
  <q-page class="q-mt-lg">
    <div class="row col-12 q-pa-md">
      <q-card class="my-card-box q-mt-lg" clickable tag="a" href="/admin/about">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Television</div>
            <p>Testing message note</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card-box q-mt-lg" clickable tag="a" href="/admin/solution">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Product</div>
            <p>Testing message note</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card-box q-mt-lg">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Balance</div>
            <p>#12,000</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card-box q-mt-lg">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Television</div>
            <p>Testing message note</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card-box q-mt-lg">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Television</div>
            <p>Testing message note</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card-box q-mt-lg">
        <q-card-section>
            <div class="q-pt-xs my-card-text">Television</div>
            <p>Testing message note</p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import { ApiClient } from 'boot/axios'
export default {
  name: 'Solution',
  data () {
    return {
      balance: {}
    }
  },
  created () {
    // this.fetchAirtimeApi()
  },

  methods: {
    async fetchAirtimeApi () {
      // eslint-disable-next-line no-undef
      // await ApiClient.get('UserID=CK20607&APIKey=R01U2B0MRJVPQ8NP2Q753216VGULHWZ734744B01R9665WYG02LM14X2CM67D9XG')
      //   .then(res => {
      //     console.log(res)
      //     this.balance = res.json()
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
    .myTest {
        margin: 0px;
        float: center;
        text-align: center;
    }
    .myfont {
        font-size: 10px;
    }
    .my-card {
        width: 25%;
        margin-right: 0px;
        padding-top: 10px;
    }
    .my-card-box{
      width: 170px;
      height: 75px;
      margin-right: 5px;
      padding-top: 0px;
      background-color: white;
      font-size:12px;
      float: center;
    }
    .my-card-text{
      color:violet;
    }
</style>
