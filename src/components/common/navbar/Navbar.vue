<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center">购物街</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'Navbar'
  }
</script>

<style>
  .nav-bar {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0px 1px 1px gray;
  }

  .center {
    flex: 1;
    text-align: center;
  }

  .right,.left {
    width: 60px;
  }
</style>
