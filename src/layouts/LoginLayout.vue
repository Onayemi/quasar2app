<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="test"> <q-img src="../statics/images/charity_logo.png" style="width:70px;" /></router-link>
        </q-toolbar-title>
        <div>Quasar</div>
      </q-toolbar>
    </q-header> -->
    <q-img src="../statics/images/mountains.jpg" class="header-image absolute-top" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout'
}
</script>

<style lang="scss" scoped>
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.5; // 0.2
    filter: grayscale(100%);
  }
</style>
