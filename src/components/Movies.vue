<template>
  <div class="grid grid-cols-4 gap-10 pt-4">
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow grid"
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <div>
        <img class="rounded-t-lg" :src="movie.Poster" alt="" />
      </div>
      <div class="p-5">
        <div class="flex gap-4 items-center">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {{ movie.Title }}
          </h5>
          <div class="pb-2">
            <Ratings />
          </div>
        </div>
        <!-- <p class="mb-1 font-normal text-gray-400 text-sm">Sci-Fi</p> -->
        <p class="mb-1 font-normal text-gray-400 text-sm">{{ movie.Year }}</p>
        <RouterLink :to="`/movie/${movie.imdbID}`">
          <button
            class="inline-flex items-center place-self-end px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
            @click = moviesStore.getMovieDetail(movie.imdbID)
          >
            View Details
            <i class="ri-film-line pl-2 text-xl"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import Ratings from "./Ratings.vue";
import { useMoviesStore } from "../stores/movies";
import { storeToRefs } from "pinia";

const moviesStore = useMoviesStore();

const { movies } = storeToRefs(moviesStore);
</script>
