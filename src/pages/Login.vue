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
        <q-input
          v-model="frmForm.password"
          label="Password"
          type="password"
          dense="dense"
          :rules="[ val => val && val.length > 0 || 'Invalid Password']"
        >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
        </q-input>
        <div class="space">
          <q-btn type="submit" color="bg-primary" size="md" dense="dense" class="bg-positive full-width" label="Login" /><br/>
        </div>
        <q-separator />
        <p class="text-grey-6 float-left"><router-link to="/reset"> Reset Password </router-link></p>
        <p class="text-grey-6 float-right"><router-link to="/register"> New user? Signup </router-link></p>
        <q-btn type="submit" color="bg-primary" size="md" dense="dense" icon="public" class="bg-positive full-width" label="Facebook" />
        <q-separator />
        <q-separator />
        <q-btn type="submit" color="bg-primary" size="md" dense="dense" icon="code" class="bg-positive full-width" label="Google" />
        <q-separator />
        <q-btn type="submit" color="bg-primary" size="md" dense="dense" icon="code" class="bg-positive full-width" label="Github" />
        <q-separator />
      </q-form>
      <!-- <p class="text-grey-6 q-ma-auto"><router-link to="/main"> Visit our website </router-link></p> -->
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
        email: 'onayemi18@gmail.com',
        password: '1light80'
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
    ...mapActions('store', ['registerUser', 'doLogin', 'registerUser2']),
    // ...mapActions('user', ['registerUserCalc']),

    onSubmit () {
      this.doLogin(this.frmForm)
    }
  }
}
</script>
