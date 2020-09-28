<template>
  <div class="goodsList">
    <GoodsItem v-for="item in goods" :GoodsItem="item"></GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem.vue'

  export default {
    name:'Goods',
    components: {
      GoodsItem
    },
    props:{
      goods:{
        type:Array,
        default() {
          return []
        }
      }
    }

  }
</script>

<style>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
  }
</style>
