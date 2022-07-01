<template>
  <nut-tabbar @tab-switch="tabSwitch" bottom="true" :v-model="pagename">
    <nut-tabbar-item tab-title="首页" icon="home" to="/main"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category" to="/cate"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find" to="/cate"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  components:{

  },
  date(){
    return{
      pagename:2,
    }
  },
  setup() {
      function tabSwitch(item, index) {
      }
      return {
        tabSwitch,
        pagename:2,
      }
    },
}
</script>

<style scoped>

</style>