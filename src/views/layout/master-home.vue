<template>
  <div class="w-full h-full flex">
    
    <Sidebar 
    :dataOpenSideBar="openSidebar"
    :clickHambuger="toggleSidebar" 
    />
    

    <!-- Conteúdo Principal -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <HeaderTop
        :dataOpenSideBar="openSidebar"
        :clickHambuger="toggleSidebar"
      />

      <!-- Componente de Roteamento -->
      <div class="flex-1 overflow-y-auto">
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
