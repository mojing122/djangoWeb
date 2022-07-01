<template>
    <el-col>
      <el-card shadow="hover"> {{title}} </el-card>
    </el-col>
</template>

<script>
export default {
  name: "card",
  prop:['title'],
  data() {
  return {
    counter: this.title
  }
},
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