<template>
  <div
    class="h-screen bg-gray-800"
    id="side-bar"
    :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'"
  >
    <div
      class="bg-green-700 h-[60px] flex justify-center items-center border-b border-white"
    >
      <img
        src="../assets/Logo-IFPA.png"
        class="p-1 w-11 h-13 mb-0"
        alt="Avatar"
      />
    </div>
    <div
      class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-green-700"
    >
      <div class="menu-man text-left px-2 whitespace-nowrap">
        <div class="profile flex justify-center items-center text-center p-5">
          <div class="text-center text-white" v-show="dataOpenSideBar">
            <img
              src="https://avatars.githubusercontent.com/u/97021587?v=4"
              class="p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">Rafael</h5>
            <p class="text-gray-500">Admin</p>
          </div>
        </div>
        
        <sidebar-options :dataOpenSideBar = dataOpenSideBar></sidebar-options>
      </div>
      
    </div>
  </div>
</template>

<script>
import sidebarOptions from './sidebar-options.vue';
export default {
  props: {
    dataOpenSideBar: Boolean,
  },
  components: {
    sidebarOptions
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
.p-tooltip-text {
  font-size: 10px !important;
}

#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 250px !important;
}

.side-bar-close {
  width: 50px !important;
}
</style>
