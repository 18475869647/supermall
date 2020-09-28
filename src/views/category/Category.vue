<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <ul>
        <li>1231</li>
        <li>1232</li>
        <li>1233</li>
        <li>1234</li>
        <li>1235</li>
        <li>1236</li>
        <li>1237</li>
        <li>1238</li>
        <li>1239</li>
        <li>12310</li>
        <li>12311</li>
        <li>12312</li>
        <li>12313</li>
        <li>12314</li>
        <li>12315</li>
        <li>12316</li>
        <li>12317</li>
        <li>12318</li>
        <li>12319</li>
        <li>12320</li>
        <li>12321</li>
        <li>12322</li>
        <li>12323</li>
        <li>12324</li>
        <li>12325</li>
        <li>12326</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
	export default {
		name:'Category',
    data() {
      return {
        scroll:null
      }
    },
    mounted() {
      // 默认情况下不会实时监听滚动
      // 2表示进行侦测，但是手指离开后就停止，即使有惯性
      // 3表示也会侦测惯性带来的滚动
      this.scroll = new Bscroll(document.querySelector('.content'),{})

      // this.scroll.on('scroll',(position) => {
      //   // console.log(position)
      // })

      // this.scroll.on('pullingUp', () => {
      //   // 请求下一页数据
      //   console.log('1111')
      //   // 等待请求数据完成并且将数据渲染成功后，
      //   setTimeout(() => {
      //     this.scroll.finishPullUp()
      //   },2000)
      // })
    }
	}
</script>

<style>
  .content {
    height: 200px;
    overflow: hidden;
    background-color: #FFFFFF;
  }
</style>
