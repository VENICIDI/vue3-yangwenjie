//封装分类数据相关代码
import { getCategoryAPI } from '@/apis/category';
import { onBeforeUpdate, onMounted ,ref } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory () {
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async (id = route.params.id)=> {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(()=>getCategory())
  // onBeforeUpdate(()=>getCategory())

  //使用VueRoute里的钩子，重新发送分类数据接口
  // onBeforeRouteUpdate((to)=>{
  //   console.log('路由变化,to='+to)
  //   //需要使用要跳转的路由参数
  //   getCategory(to.params.id)
  // })
  return {
    categoryData
  }
}
