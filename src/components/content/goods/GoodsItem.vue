<template>
  <div class="goods-item">
    <a :href="GoodsItem.link">
      <img :src="GoodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{GoodsItem.title}}</p>
        <span class="price">{{GoodsItem.orgPrice}}</span>&nbsp;&nbsp;&nbsp;
        <span class="cfav"><b>☆</b>{{GoodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name:'GoodsItem',
    props:{
      GoodsItem:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
  .goods-item {
    width: 46%;
    margin: 6px;
    text-align: center;
  }

  .goods-item img {
    width: 100%;
    border-radius: 10px;
  }

  .goods-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }

  .goods-info span {
    font-size: 12px;
  }

  .price {
    color: red;
  }

  .cfav b{
    font-size: 14px;
  }
</style>
