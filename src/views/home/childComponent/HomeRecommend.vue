<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recom-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
    props:{
      recommend:{
        type:Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    margin-top: 44px;
    padding: 2px 0 30px;
    font-size: 12px;
    text-align: center;
    border-bottom: 1px solid lightgray;
  }

  .recom-item{
    flex: 1;
  }

  .recom-item img {
    width: 65px;
    height: 65px;
    margin: 10px 0;
  }

</style>
