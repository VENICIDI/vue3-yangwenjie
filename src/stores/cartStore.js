//购物车

import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore ('cart',()=>{
  //定义state-cartList
  const cartList = ref([])
  //定义action-addCart
  const addCart = (goods) =>{
    //添加购物车操作
    //添加过，count++，没有添加过，push
    const item = cartList.value.find((item)=>{
      goods.skuId === item.skuId
    })

    if(item){
      item.count++
    }else{
      cartList.value.push(goods)
    }
    console.log('购物车数据为'+cartList.value)
  }

  //删除购物车
  const delCart = (skuId) => {
    //找到数组下标使用splice或filter
    const index = cartList.value.findIndex((item)=>skuId === item.skuId)
    cartList.value.splice(index,1)
  }

  //计算总数和总价
  const allCount = computed(()=>{
    return cartList.value.reduce((a,c)=>a+c.count,0)
  })
  const allPrice = computed(()=>{
    return cartList.value.reduce((a,c)=>a+c.count*c.price,0)
  })

  // 单选功能
  const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  return {
    selectedCount,
    selectedPrice,
    singleCheck,
    allCount,
    allPrice,
    cartList,
    addCart,
    delCart
  }
},{
  persist:true
})
