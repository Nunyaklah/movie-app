<template>
  <div class="mt-20 mr-20">
    <Banner/>
    <MovieSection/>
    <RouterView/>
  </div>
</template>

<script setup>
import Banner from "./Banner.vue";
import MovieSection from "./MovieSection.vue"
</script>
