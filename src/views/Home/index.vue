<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>



<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />

  <!-- <HomePanel title="新鲜好物" sub-title="新鲜好无">

  </HomePanel>

  <HomePanel title="人气推荐" sub-title="bn">

  </HomePanel> -->
</template>
