<template>
  <!-- movie details page  -->
  <div class=" m-4 md:mt-20  md:mr-20">
    <div class="flex gap-8 flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <img
          class="md:h-[700px] md:w-[600px] object-cover rounded-3xl"
          :src=movie.Poster
          alt=""
        />
      </div>
      <div class="w-full md:w-1/2">
        <div>
          <h3 class="text-5xl font-medium mb-8 text-red-600">{{movie.Title}}</h3>
          <p class="text-sm mb-2">
            Released : <span class="text-xs text-gray-500">{{movie.Released}}</span>
          </p>
          <p class="text-sm mb-2">
            Genre :
            <span class="text-xs text-red-500">{{movie.Genre}}</span>
          </p>
          <p class="text-sm mb-2">
            Director :
            <span class="text-xs text-gray-500">{{movie.Director}}</span>
          </p>
          <p class="text-sm mb-2">
            Actors :
            <span class="text-xs text-gray-500"
              >{{movie.Actors}}</span
            >
          </p>
        </div>
        <div class="mt-4">
            <Ratings/>
        </div>
        <div>
          <p class="mt-20 font-light text-xl italic pb-8">
            {{movie.Plot}}
          </p>
        </div>
        <div>
            <h3 class="mt-4 mb-2 text-lg font-semibold">Friends watching</h3>
            <div>
                <Avatars/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Ratings from "../components/Ratings.vue";
import Avatars from "../components/Avatars.vue";
import { useMoviesStore } from "../stores/movies";
import { storeToRefs } from "pinia";
import router from "../router/index"
import { useRoute } from "vue-router";

// creating a movies store
const moviesStore = useMoviesStore();

const { movie } = storeToRefs(moviesStore);

//create route variable 
const route = useRoute()

//getting id from route params and call getMovieDetail method
moviesStore.getMovieDetail(route.params.id)

</script>
