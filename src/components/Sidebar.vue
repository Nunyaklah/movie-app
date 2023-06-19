<template>
  <div
    id="sidebar"
    class="h-screen flex flex-col justify-between duration-500 fixed left-0 top-0"
    :class="{ 'w-2/12': open, 'w-[70px]': !open }"
  >
    <div class="mt-8 bg-white">
      <RouterLink to="/">
        <div class="pb-12" :class="{ 'pl-12': open }">
          <h3 class="text-xl font-bold text-gray-900" v-if="open">
            Toski.<span class="text-lg text-red-600">Movies</span>
          </h3>
          <i
            class="ri-movie-2-line text-3xl text-red-600"
            :class="{ 'pl-4': !open }"
            v-else
          ></i>
        </div>
      </RouterLink>

      <div>
        <h4
          class="text-xs font-semibold pb-6"
          :class="{ 'pl-12': open, 'pl-4': !open }"
        >
          Enjoy  Movies
        </h4>
        <RouterLink to="/">
          <div
          class="flex items-center gap-4 mb-6 border-l-4 border-red-600"
          :class="{ 'pl-12': open, 'pl-4': !open }"
        >
          <i class="ri-compass-3-line text-2xl font-light text-red-600"></i>
          <p class="font-semibold text-sm" :class="{ 'scale-0': !open }">
            Browse
          </p>
        </div>
        </RouterLink>
        
        <RouterLink to="#">
          <div
          class="flex items-center gap-4 mb-6 text-gray-500"
          :class="{ 'pl-12': open, 'pl-4': !open }"
        >
          <i class="ri-heart-2-line text-2xl font-light"></i>
          <p class="font-semibold text-sm" :class="{ 'scale-0': !open }">
            Watchlist
          </p>
        </div>
        </RouterLink>
        
        <RouterLink to="#">
          <div
          class="flex items-center gap-4 mb-6 text-gray-500"
          :class="{ 'pl-12': open, 'pl-4': !open }"
        >
          <i class="ri-calendar-2-line text-2xl font-light"></i>
          <p class="font-semibold text-sm" :class="{ 'scale-0': !open }">
            Coming Soon
          </p>
        </div>
        </RouterLink>
        
        <div class="h-0.5 bg-[#eaeded] mt-10 ml-12 mr-10"></div>
      </div>
    </div>

    <div>
      <Cta />
    </div>
    <RouterLink to="#">
      <div
      class="flex items-center gap-4 text-gray-500 mb-20"
      :class="{ 'pl-12': open, 'pl-4': !open }"
    >
      <i class="ri-logout-box-line text-red-600 text-2xl font-light"></i>
      <p class="font-semibold text-sm" :class="{ 'scale-0': !open }">Logout</p>
    </div>
    </RouterLink>
    
  </div>
</template>

<style scoped>
#sidebar {
  border-right: 1.5px solid #eaeded;
}
</style>
<script setup>
import Cta from "./Cta.vue";
import { useSideBarStore } from "../stores/sidebar";
import { storeToRefs } from "pinia";

const sidebarStore = useSideBarStore();

const { open } = storeToRefs(sidebarStore);
</script>
