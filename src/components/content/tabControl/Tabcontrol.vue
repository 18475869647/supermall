<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
      class="con-item"
      :class="{active:index === curIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Tabcontrol',
    props:{
      titles:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        curIndex:0
      }
    },
    methods:{
      itemClick(index) {
        this.curIndex = index
        // 子组件发生点击，传出去  -- 自定义事件
        this.$emit("tabClick",index);
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    margin-top: 10px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    background-color: #FFFFFF;
  }
  .con-item {
    flex: 1;
  }

  .active {
    color: red;
  }

  .active span{
    padding: 5px;
    border-bottom: 3px solid red;
  }
</style>
