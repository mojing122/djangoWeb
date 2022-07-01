<template>
  <router-view style="height: 80%"></router-view>
  <tabbar></tabbar>
</template>

<script>
import tabbar from "./TabBar"
export default {
  name: "myApp",
  components: {
    tabbar
  },
}
</script>