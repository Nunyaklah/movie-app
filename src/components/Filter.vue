<template>
  <div class="hidden md:block" v-if="open">
    <div class="flex items-center pt-2 pb-4">
      <h4
        class="text-xs font-semibold  "
        :class="{ 'pl-12': open, 'pl-4': !open }"
      >
        Filter by Year
      </h4>
      <div>
        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-0.5 ml-2 text-center inline-flex items-center mr-2"
        @click="moviesStore.filterMoviesByYear(years)"
          >
          Filter
        </button>
      </div>
    </div>

    <div class="ml-10">
      <ul
        class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"
      >
        <li class="w-full border-b border-gray-200 rounded-t-lg">
          <div class="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              v-model="years"
              value="2023"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              for="vue-checkbox"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >2023</label
            >
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg">
          <div class="flex items-center pl-3">
            <input
              id="react-checkbox"
              type="checkbox"
              v-model="years"
              value="2022"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              for="react-checkbox"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >2022</label
            >
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg">
          <div class="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              v-model="years"
              value="2021"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              for="angular-checkbox"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >2021</label
            >
          </div>
        </li>
        <li class="w-full border-b border-gray-200 rounded-t-lg">
          <div class="flex items-center pl-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              v-model="years"
              value="2019"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              for="laravel-checkbox"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >2019</label
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useSideBarStore } from "../stores/sidebar";
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../stores/movies";
import { ref } from "vue";

const moviesStore = useMoviesStore();

const { movies } = storeToRefs(moviesStore);

const sidebarStore = useSideBarStore();

const { open } = storeToRefs(sidebarStore);

let years = ref([])
</script>
