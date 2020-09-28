<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'

export default {
  name: 'App',
  components:{
    MainTabbar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
