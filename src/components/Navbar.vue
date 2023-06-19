<template>
  <div
    class="pt-4 top-2 ml-auto p-4 md:pl-10 mb-10 flex flex-col duration-500"
    :class="{ 'w-full md:w-10/12': open, 'w-11/12': !open }"
  >
    <div
      class="flex justify-between fixed z-10 duration-500 bg-white"
      :class="{ 'w-10/12': open, 'w-11/12': !open }"
    >
      <div class="md:flex h-[50px] md:items-center hidden">
        <div>
          <i
            class="ri-menu-2-line text-xl cursor-pointer"
            @click="sidebarStore.setOpen()"
          ></i>
        </div>
        <div class="pl-10 flex gap-4">
          <i class="ri-arrow-left-s-line text-xl cursor-pointer"></i>
          <i class="ri-arrow-right-s-line text-xl cursor-pointer"></i>
        </div>
        <div
          id="search"
          class="ml-10 h-12 w-[500px] rounded-full relative items-center"
        >
          <i class="ri-search-2-line text-xl pl-5 absolute left-1 top-2"></i>
          <input
            type="search"
            v-model="searchTerm"
            class="w-full p-3.5 pl-14 text-sm text-gray-900 bg-transparent outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Start writing . . ."
          />
          <i class="ri-mic-line pr-5 absolute right-2.5 top-2"></i>
        </div>
        <RoundButton @click="moviesStore.getMovies()" />
      </div>

      <div class="md:flex items-center gap-4 mr-20 hidden">
        <div>
          <i class="ri-message-3-line text-xl cursor-pointer"></i>
        </div>
        <div class="relative">
          <i class="ri-notification-3-line text-xl cursor-pointer"></i>
        </div>
        <div class="border-4 rounded-full border-red-500">
          <img
            class="rounded-full"
            height="35"
            width="35"
            src="../assets/images/avatar_1.png"
          />
        </div>
      </div>
    </div>
    <!-- search bar for phones ie.smaller screen sizes -->
    <div class="md:hidden flex flex-col items-center">
      <div id="search" class="h-12 w-full rounded-full relative items-center">
        <i class="ri-search-2-line text-xl pl-2 absolute top-2.5"></i>
        <input
          type="search"
          v-model="searchTerm"
          class="w-full p-3.5 pl-10 text-sm text-gray-900 bg-transparent outline-none focus:ring-red-500 focus:border-red-500"
          placeholder="Start writing . . ."
        />
      </div>
      <RoundButton @click="moviesStore.getMovies()" class="pt-2" />
    </div>

    <!-- ------ -->
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import RoundButton from "./RoundButton.vue";
import { useSideBarStore } from "../stores/sidebar";
import { useMoviesStore } from "../stores/movies";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const sidebarStore = useSideBarStore();
const moviesStore = useMoviesStore();

const { open } = storeToRefs(sidebarStore);
const { showMovies, searchTerm, movies } = storeToRefs(moviesStore);
</script>

<style scoped>
#search {
  border: 1.5px solid #eaeded;
}
</style>
