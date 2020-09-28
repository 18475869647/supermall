<template>
  <div class="wrapper">
    <div class="content-scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name:'Scroll',
    data() {
      return {
        scroll:null
      }
    },
    mounted() {
      this.scroll = new Bscroll(document.querySelector('.content-scroll'),{})
    }
  }
</script>

<style scoped>
</style>
