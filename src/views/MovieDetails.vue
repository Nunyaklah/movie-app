<template>
  <div class="mt-20 mr-20">
    <div class="flex gap-8">
      <div class="w-1/2">
        <img
          class="h-[700px] w-[600px] object-cover rounded-3xl"
          src="../assets/images/avatar_3.png"
          alt=""
        />
      </div>
      <div class="w-1/2">
        <div>
          <h3 class="text-5xl font-medium mb-8 text-red-600">Movie Title</h3>
          <p class="text-sm mb-2">
            Released : <span class="text-xs text-gray-500">08 mar 2019</span>
          </p>
          <p class="text-sm mb-2">
            Genre :
            <span class="text-xs text-red-500">Action, Adventure, Sci-Fi</span>
          </p>
          <p class="text-sm mb-2">
            Director :
            <span class="text-xs text-gray-500">Nunya Klah, Phel Isichei</span>
          </p>
          <p class="text-sm mb-2">
            Actors :
            <span class="text-xs text-gray-500"
              >Brie Larson, Samuel L. Jackson, Ben Mendelsohn</span
            >
          </p>
        </div>
        <div class="mt-4">
            <Ratings/>
        </div>
        <div>
          <p class="mt-20 font-light text-xl italic pb-8">
            Carol Danvers becomes one of the universe's most powerful heroes
            when Earth is caught in the middle of a galactic war between two
            alien races.
          </p>
        </div>
        <div>
          <p class="text-sm mb-2">IMDB : <span class="text-xs text-red-500">6.8/10</span></p>
          <p class="text-sm mb-2">RottenTomatoes : <span class="text-xs text-red-500">78%</span></p>
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

</script>
