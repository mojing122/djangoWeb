<template>
  <div style="margin-bottom: 10%">
  <nut-addresslist
    :data="data"
    swipe-edition
    @handelItem="itemClick"
    @handelEditIcon="editClick"
    @handelDelIcon="delClick"
    @swipeDelClick="delClick"
    @addAddressClick="addAddress"
    :dataMapOptions="dataMapOptions"
  >
  </nut-addresslist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          testid: 3,
          testaddressName: '姓名',
          phone: '123****4567',
          defaultAddress: false,
          fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        },
        {
          testid: 4,
          testaddressName: '姓名',
          phone: '123****4567',
          defaultAddress: true,
          fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
        },
      ],
      dataMapOptions: {
        id: 'testid',
        addressDetail: 'testaddressDetail',
        addressName: 'testaddressName'
      }
    }
  },
  setup() {

  }
}
</script>
