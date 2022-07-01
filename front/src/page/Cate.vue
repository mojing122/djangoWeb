<template>
  <div>
  <nut-menu>
    <nut-menu-item v-model="state.value3" :cols="2" :options="state.options3" />
  </nut-menu>
    <nut-card
    v-for="state in ItemList"
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vipPrice="state.vipPrice"
    :shopDesc="state.shopDesc"
    :delivery="state.delivery"
    :shopName="state.shopName"
    style="margin-bottom: 10px"
    @click="ToProduct(state.ProductId)"
    >
    </nut-card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  data(){
    return{
      ItemList:[{
        imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '阳澄湖大闸蟹自营店>',
        ProductId: '141'
      },
      {
        imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '阳澄湖大闸蟹自营店>',
        ProductId: '142'
      }
      ]
    }
  },
  setup() {
    const state = reactive({
      options3: [
        { text: '全部商品', value: 0 },
        { text: '家庭清洁/纸品', value: 1 },
        { text: '个人护理', value: 2 },
        { text: '美妆护肤', value: 3 },
        { text: '食品饮料', value: 4 },
        { text: '家用电器', value: 5 },
        { text: '母婴', value: 6 },
        { text: '数码', value: 7 },
        { text: '电脑、办公', value: 8 },
        { text: '运动户外', value: 9 },
        { text: '厨具', value: 10 },
        { text: '医疗保健', value: 11 },
        { text: '酒类', value: 12 },
        { text: '生鲜', value: 13 },
        { text: '家具', value: 14 },
        { text: '传统滋补', value: 15 },
        { text: '汽车用品', value: 16 },
        { text: '家居日用', value: 17 },
      ],
      value3: 0
    });

    return {
      state
    };
  },
  methods:{
    ToProduct(ProductId){
      if(ProductId==='141'){
        this.$router.push('/product')
      }
    }
  }
}
</script>