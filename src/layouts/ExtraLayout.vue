<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          clickable
          round
          @click="nextpg"
          icon="arrow_back"
          aria-label="Menu"
          class="lt-md"
        />
        <q-toolbar-title>
          Add To Product(s)
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs
        v-model="tab"
        indicator-color="yellow"
        class="bg-primary text-white shadow-2"
        clickable
      >
        <q-route-tab to="/dashboard/solution" name="contacts" icon="home" label="Home" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="payment" label="Payment" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="account_balance_wallet" label="Transfer" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="important_devices" label="TV" exact />
        <q-route-tab to="/admin/solution" name="contacts" icon="style" label="Booking" exact />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'ExtraLayout',

  data () {
    return {
      tab: 'home'
    //   leftDrawerOpen: false
    }
  },

  methods: {
    nextpg () {
      this.$router.push('/admin/solution')
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }
  .q-drawer .q-router-link--exact-active {
    color: gold !important;
  }
  .q-tab__icon {
    width: 5px;
    height: 5px;
    font-size: 12px;
  }
  .q-tab__label {
    font-size: 9px;
    line-height: 2.215em;
    font-weight: 400;
  }
  .q-toolbar__title {
    flex: 1 1 0%;
    min-width: 1px;
    max-width: 100%;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0.01em;
    padding: 0 12px;
  }
  .q-tab__icon {
    width: 15px;
    height: 15px;
    font-size: 16px;
  }
  .q-tab--full {
    min-height: 16px;
  }
  .q-tab {
    border: 1px white solid;
  }
</style>
