import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import CartList from '@/views/CartList/index.vue'
import Pay from '@/views/pay/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: Layout,
            children: [{
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                },
                {
                  path: 'category/sub/:id',
                  component: SubCategory
                },
                {
                  path: 'detail/:id',
                  component: Detail
                },
                {
                  path: 'checkout',
                  component: Checkout
                },
                {
                  path: 'cartlist',
                  component: CartList
                },
                {
                  path: 'pay',
                  component: Pay
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
    scrollBehavior(){
      return {
        top: 0
      }
    }
})

export default router
