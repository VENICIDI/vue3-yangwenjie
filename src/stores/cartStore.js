//购物车

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { findNewCartListAPI, insertCartAPI, } from "@/apis/cart";
import { useUserStore } from "./user";

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  //定义state-cartList
  const cartList = ref([])

  //获取最新的购物车列表action
  const updateNewList = async () => {
    const res = await findNewCartListAPI();
    cartList.value = res.result;
  }

  //定义action-addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      //添加购物车操作
      //添加过，count++，没有添加过，push
      const item = cartList.value.find((item) => {
        goods.skuId === item.skuId
      })

      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
      console.log('购物车数据为' + cartList.value)
    }
  }

  // 删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  //计算总数和总价
  const allCount = computed(() => {
    return cartList.value.reduce((a, c) => a + c.count, 0)
  })
  const allPrice = computed(() => {
    return cartList.value.reduce((a, c) => a + c.count * c.price, 0)
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
    updateNewList,
    selectedCount,
    selectedPrice,
    singleCheck,
    allCount,
    allPrice,
    cartList,
    addCart,
    delCart
  }
}, {
  persist: true
})
