<template>
  <div class="pt-10">
    <div class="text-xl font-semibold"  v-if="showBannerAndPopularMovies" >Popular Movies</div>
    <div class="text-xl font-semibold" v-if="showMovies">Results for . . . . . . . . . . </div>
    <div>
       <PopularMovie v-if="showBannerAndPopularMovies" /> 
       <Movies v-if="showMovies"/>
    </div>
  </div>
</template>
<script setup>
import PopularMovie from "./PopularMovie.vue"
import Movies from "./Movies.vue"
import { useMoviesStore } from "../stores/movies";
import { storeToRefs } from "pinia";

const moviesStore = useMoviesStore();

const {showMovies, searchTerm, movies, showBannerAndPopularMovies} = storeToRefs(moviesStore)
</script>
