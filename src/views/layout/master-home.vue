<template>
  <div class="w-full h-full flex">
    <Sidebar :dataOpenSideBar="openSidebar" />
    <div class="w-full h-full">
      <HeaderTop
        :dataOpenSideBar="openSidebar"
        :clickHambuger="toggleSidebar"
      />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderTop from '../../components/header-pc.vue';
import Sidebar from '../../components/sidebar-pc.vue';

export default {
  components: { HeaderTop, Sidebar },
  setup() {
    const openSidebar = ref(true);

    const toggleSidebar = () => {
      openSidebar.value = !openSidebar.value;
    };

    return {
      openSidebar,
      toggleSidebar,
    };
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
