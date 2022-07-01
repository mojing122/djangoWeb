<template>
  <div style="z-index: 9999">
    <el-page-header @back="goBack" title="返回" content="详情页面">
    </el-page-header>
    <el-image
      class="mainImg"
      :src="ImgUrl"
      fit="fill"></el-image>
    <nut-cell-group class="shadow">
    <nut-cell>
      <nut-price :price="price" size="large" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <nut-cell size="large" :title="itemName" :sub-title="desc">
    </nut-cell>
  </nut-cell-group>
    <nut-cell>
      <div>his.$router.forward()
前进一步
this.$router.go()
this.$router.go(-1)后退一步
this.$router.go(2)前进两步
但当步数大于历史记录数，就会无效，嗯，是无效，而不是取一个最大值
this.$router.go(0)
会刷新页面
this.$router.push()
和上面的主要区别在于会添加一条历史记录
this.$router.push('/home')
this.$router.push({name:'home'})
对象写法等同于router-link里的to
this.$router.replace()
      his.$router.forward()
前进一步
this.$router.go()
this.$router.go(-1)后退一步
this.$router.go(2)前进两步
但当步数大于历史记录数，就会无效，嗯，是无效，而不是取一个最大值
this.$router.go(0)
会刷新页面
this.$router.push()
和上面的主要区别在于会添加一条历史记录
this.$router.push('/home')
this.$router.push({name:'home'})
对象写法等同于router-link里的to
this.$router.replace()his.$router.forward()
前进一步
this.$router.go()
this.$router.go(-1)后退一步
this.$router.go(2)前进两步
但当步数大于历史记录数，就会无效，嗯，是无效，而不是取一个最大值
this.$router.go(0)
会刷新页面
this.$router.push()
和上面的主要区别在于会添加一条历史记录
this.$router.push('/home')
this.$router.push({name:'home'})
对象写法等同于router-link里的to
this.$router.replace()</div>
    </nut-cell>
    <el-row :gutter="20" class="bottom_button">
      <el-col :span="8" :offset="16"><nut-sticky bottom="80" position="bottom">
      <nut-button type="primary">立即购买</nut-button>
    </nut-sticky></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        price:9999,
        ImgUrl:require('../../public/img/product/'+'item1.jpg'),
        itemName:"Canon佳能EOS RP全画幅微单",
        desc:"约每秒连拍5张 · 2620万像素"
      }
    },
    methods: {
      goBack() {
        this.$router.back()
        console.log('go back');
      }
    }
  }
</script>

<style>
.shadow{
  border-radius: 6px;
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1)
}
.mainImg{
  margin-top: 10px;
  width: 100%;
  height: 360px;
}
.bottom_button{
  position: fixed;
  margin-top: 200px;
}
</style>
