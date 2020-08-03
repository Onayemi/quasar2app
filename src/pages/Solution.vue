<template>
  <q-page class="q-mt-lg">
    <div class="row q-pa-sm">
        <div class="col-12">
            <div class="q-mt-md text-center">
                <h5>Our Products</h5>
            </div>
            <div class="q-mt-md">
                <div class="q-pa-sm row">
                    <q-card clickable class="my-card myTest" v-for="result in results" :key="result.id" flat @click="test(result.id)">
                        <q-btn outline round color="primary" icon="card_giftcard" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">{{ result.name }}</div>
                        </q-card-section>
                    </q-card>

                    <!-- <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="shopping_cart" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Electricity</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="shopping_cart" style="font-size: 1em;" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Airtel</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="style" style="font-size: 1em;" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Airtel</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="card_giftcard" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Television</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat clickable>
                        <q-btn outline round color="primary" icon="shopping_cart" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Electricity</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="shopping_cart" style="font-size: 1em;" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Airtel</div>
                        </q-card-section>
                    </q-card>

                    <q-card class="my-card myTest" flat>
                        <q-btn outline round color="primary" icon="style" style="font-size: 1em;" />
                        <q-card-section>
                            <div class="q-pt-xs myfont">Television</div>
                        </q-card-section>
                    </q-card> -->
                </div>
            </div>
        </div>
        <!-- <div class="col-12 col-md-6 q-gutter-xs">
          less than = lt-md and greater than = gt-sm
            <div class="q-mt-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit porro debitis officiis exercitationem accusantium nihil excepturi cum, commodi dignissimos, aperiam, corporis modi placeat vel iste molestiae consequuntur assumenda quam. Nesciunt.
            </div>
        </div> -->
    </div>
  </q-page>
</template>

<script>
import { HTTPClient } from '../boot/axios'
export default {
  name: 'Solution',
  data () {
    return {
      results: []
    }
  },

  mounted () {
    this.fetchProduct()
  },

  methods: {
    // console.log('Reset mail page!!!'
    fetchProduct () {
    // /fetch/product/${id}
      HTTPClient.get('/fetch/product', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => {
        // console.log(res)
        this.results = res.data
      })
    },
    test (id) {
    //   this.$router.push('/admin/about/'+ ${id})
      this.$router.push({ path: '/admin/about', query: { id: id } })
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
