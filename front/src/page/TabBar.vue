<template>
  <div>
    <nut-tabbar @tab-switch="tabSwitch" bottom="true">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
      };
    },
}
</script>

<style scoped>

</style>