<template>
  <div id="home">
     <navbar class="home-nav"></navbar>
     <div class="home-content">
       <HomeRecommend :recommend="recommend" />
       <RecomSpec></RecomSpec>
       <Tabcontrol :titles="titles"
          @tabClick="tabClick" class="tab-control">
       </Tabcontrol>
       <Goods :goods="showGoods"></Goods>
     </div>
  </div>
</template>

<script>
  import Navbar  from 'components/common/navbar/Navbar'
  import Tabcontrol  from 'components/content/tabControl/Tabcontrol'

  import HomeRecommend from './childComponent/HomeRecommend'
  import RecomSpec from './childComponent/RecomSpec'
  import Goods from 'components/content/goods/Goods'

  import {
    getHomeData,
    getHomeGoods
  } from '../../network/home'

  import Scroll from '../../components/common/scroll/Scroll'

	export default {
		name:'Home',
    data() {
      // 存储网络请求到的数据
      return {
        banner:[],
        recommend:[],
        titles:['流行','新款','精选'],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        curType:'pop'
      }
    },
    computed:{
     showGoods() {
       return this.goods[this.curType].list
     }
    },
    components:{
      Navbar,
      HomeRecommend,
      RecomSpec,
      Tabcontrol,
      Goods,
      Scroll
    },
    // 组件创建完毕立即执行网络请求
    created() {
      this.getHomeData()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /*
      事件监听
      */
      tabClick(index) {
        // console.log(index)
        switch (index) {
          case 0:
            this.curType = 'pop'
            break
          case 1:
            this.curType = 'new'
            break
          case 2:
            this.curType = 'sell'
            break
        }
      },

      /*
      网络请求的方法
      */
      getHomeData() {
        getHomeData().then(res => {
          // console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type) {  //参数为类型
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
           console.log(res)
           // 存储相应的list内容
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
        })
      }
    }
	}
</script>

<style scoped>
  #home {
    position: relative;
  }

  .home-nav {
    background-color: #FF5777;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .home-content {
  }
</style>
