<template>
  <q-layout view="hHh LpR fFf" class="bg-white-3">
    <q-header class="bg-blue-3 text-grey-9" reveal height-hint="60">
      <q-toolbar class="GPLAY__toolbar text-grey-6">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <div class="q-pr-lg">
          <img class="GPLAY__logo" style="width:50px;" src="../statics/images/charity_logo.png">
        </div>

        <q-space />

        <!-- <div class="GPLAY__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="GPLAY__toolbar-input-btn" color="primary" icon="search" unelevated />
        </div>

        <q-space /> -->

        <div class="q-pl-md q-gutter-sm row no-wrap items-center gt-sm">
          <q-btn round dense flat color="grey-8" size="14px" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>

          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

          <!-- <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn> -->
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-footer elevated>
      <q-tabs
        v-model="tab"
        indicator-color="yellow"
        class="bg-primary text-white shadow-2 q-text-h10"
        clickable
      >
        <q-route-tab to="/admin/dashboard" name="contacts" icon="home" label="Home" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="payment" label="Payment" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="account_balance_wallet" label="Transfer" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="important_devices" label="TV" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="style" label="Booking" exact />
      </q-tabs>
    </q-footer> -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3 text-grey-7"
      :width="200"
      :breakpoint="767"
    >
      <q-list>

        <q-item clickable class="GPLAY__drawer-link bg-grey-10 text-grey-3">
          <!-- <q-item-section avatar class="text-grey-1">
            <q-icon name="weekend" />
          </q-item-section> -->
          <q-item-section class="text-grey-3">
            <q-item-label>Entertainment</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/admin/dashboard" class="GPLAY__drawer-link GPLAY__drawer-link--apps">
            <q-item-section avatar class="bg-green-7 text-grey-1 text-center">
              <q-icon name="home" />
            </q-item-section>
            <q-item-section class="apps-text" style="font-size:14px;">
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/admin/solution" class="GPLAY__drawer-link GPLAY__drawer-link--apps">
            <q-item-section avatar class="bg-green-7 text-grey-1 text-center">
              <q-icon name="devices" />
            </q-item-section>
            <q-item-section class="apps-text" style="font-size:14px;">
              <q-item-label>TV Subscription</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/admin/reset" class="GPLAY__drawer-link GPLAY__drawer-link--movies">
          <q-item-section avatar class="movies-icon bg-red-7 text-grey-1 text-center">
            <q-icon name="electricity-bulb" />
          </q-item-section>
          <q-item-section class="movies-text" style="font-size:14px;">
            <q-item-label>Electricity</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/admin/about" class="GPLAY__drawer-link GPLAY__drawer-link--music">
          <q-item-section avatar class="music-icon bg-orange-7 text-grey-1 text-center">
            <q-avatar size="22px" color="white" text-color="orange-7" icon="music_note" />
          </q-item-section>
          <q-item-section class="music-text" style="font-size:14px;">
            <q-item-label>Airtime</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--books">
          <q-item-section avatar class="books-icon bg-blue-7 text-grey-1 text-center">
            <q-icon name="book" />
          </q-item-section>
          <q-item-section class="books-text" style="font-size:14px;">
            <q-item-label>Data Bundled</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--devices" @click="logout()">
          <q-item-section avatar class="devices-icon bg-blue-grey-7 text-grey-1 text-center">
            <q-icon name="devices" />
          </q-item-section>
          <q-item-section class="devices-text" style="font-size:14px;">
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-mb-md" />

        <q-item v-for="link in links1" :key="link.text" v-ripple dense clickable tag="a" :href="link.url" class="GPLAY__drawer-item">
          <q-item-section class="text-grey-8">
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-sticky expand position="top">
        <q-toolbar class="GPLAY__sticky bg-white q-px-xl">
          <q-space />
          <marquee behavior="3" direction="right">Test marquee</marquee>
          <!-- {{ user.id }} -->
          <!-- <q-btn icon="help" dense flat size="12px" class="GPLAY__sticky-help" /> -->
          <q-btn icon="settings" dense flat class="GPLAY__sticky-settings q-ml-md" size="12px" />
        </q-toolbar>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'GooglePlayLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      storage: 0.26,
      links1: [
        { text: 'Account' },
        { text: 'Payment methods' },
        { text: 'My subscriptions' },
        { text: 'Redeem' },
        { text: 'Buy gift card' },
        { text: 'My wishlist' },
        { text: 'My Play activity' },
        { text: 'Parent guide', url: 'dashboard/solution' },
        { text: 'Log out', url: '/' }
      ]
    }
  },
  computed: {
    // eslint-disable-next-line no-undef
    // ...mapGetters([
    //   'user'
    // ])
  },
  methods: {
    logout () {
      // alert('logout testing')
      localStorage.clear('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
.GPLAY
  &__toolbar
    height: 60px
  &__logo
    width: 183px
    height: 39px
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%
  &__drawer-link
    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px
    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300
    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      &:hover
        color: #eee !important
    &--apps:hover
      background: #43a047!important
    &--movies:hover
      background: #e53935!important
    &--music:hover
      background: #fb8c00!important
    &--books:hover
      background: #1e88e5!important
    &--devices:hover
      background: #546e7a!important
  &__drawer-item
    padding: 6px 12px 6px 23px
  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)
  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px
  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc

  &__app-text
    font-size: 14px
</style>
