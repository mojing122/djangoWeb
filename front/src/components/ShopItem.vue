<template>
  <nut-addresslist
    :data="data"
    @handelDelIcon="delClick"
    @handelEditIcon="editClick"
    @handelItem="itemClick"
    :show-bottom-button="false"
    :dataMapOptions="dataMapOptions"
  >
  </nut-addresslist>
</template>
<script lang="ts">
import { Toast } from '@nutui/nutui';
import { ref, reactive } from 'vue';
export default {
  setup() {
    const data = ref([
      {
        testid:3,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:false,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
      {
        testid:4,
        testaddressName:'姓名',
        phone:'123****4567',
        defaultAddress:true,
        fullAddress:'北京市通州区测试测试测试测试测试测试测试测试测试'
      },
    ]);
    const dataMapOptions = reactive({
      id: 'testid',
      addressDetail:'testaddressDetail',
      addressName:'testaddressName'
    });
    const itemClick = ()=>{
      Toast.text('Click To Address');
    }
    const delClick = ()=>{
      Toast.text('Click To Delete');
    }
    const editClick = ()=>{
      Toast.text('Click To Edit');
    }
    const holdDownClick = ()=>{
      Toast.text('Click To holdDown');
    }
    const copyClick = ()=>{
      Toast.text('Click To copy');
    }
    const setClick = ()=>{
      Toast.text('Click To set');
    }
    const   addAddress=()=>{// eslint-disable-line no-unused-vars

      Toast.text('Click To add');
    }
    return {
      itemClick,
      holdDownClick,
      data,
      delClick,
      editClick,
      copyClick,
      setClick,
      addAddress,
      dataMapOptions
    };
  }
};
</script>