<template>
  <q-page class="bg-light-whiite window-width row justify-center items-center">
    <div class="col" style="max-width:300px;">
      <div class="row">
        <div class="q-pa-md q-mr-auto q-ml-auto">
            <q-img alt="logo" style="width:80px; height:80px; margin-left:70px;" src="../statics/images/charity_logo.png"></q-img>
            <h5 style="margin-top: 5px;" class="q-mt-auto q-mb-auto">Remlex Technologies</h5>
        </div>
      </div>
      <q-form
        @submit.prevent="onSubmit"
        class="q-pa-md">
        <q-input
          v-model="frmForm.email"
          label="Email"
          type="email"
          dense="dense"
          :rules="[ val => val && val.length > 0 || 'Invalid Email']"
        >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
        </q-input>
        <div class="space">
          <q-btn type="submit" color="bg-primary" size="md" dense="dense" class="bg-positive full-width" label="Reset Password" /><br/>
        </div>
        <q-separator />
        <p class="text-grey-6 float-left"><router-link to="/register"> Register </router-link></p>
        <p class="text-grey-6 float-right"><router-link to="/"> Login </router-link></p>
      </q-form>
    </div>
  </q-page>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions } from 'vuex'
// import { Notify } from 'quasar'
export default {
  name: 'PageName',
  data () {
    return {
      frmForm: {
        email: ''
      }
    }
  },
  computed: {
    // eslint-disable-next-line no-undef
    // ...mapGetters([
    //   'user'
    // ])
  },

  methods: {
    ...mapActions('store', ['doReset']),

    onSubmit () {
      this.doReset(this.frmForm)
    }
  }
}
</script>
