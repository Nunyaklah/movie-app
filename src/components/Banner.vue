<template>
  <div>
    <div class="relative">
      <img
        class="h-[400px] w-full rounded-3xl object-cover"
        src="../assets/images/spider_1.jpeg"
        alt=""
      />
      <div
        class="rounded-3xl absolute inset-0 flex flex-col justify-start bg-gradient-to-r from-black to-transparent"
      >
        <div class="ml-12 pt-12">
          <h1 class="text-white font-bold text-5xl">Spider Man</h1>
          <p class="text-white font-semi text-3xl pt-2">
            Into the Spider Verse
          </p>
        </div>
        <div class="ml-12 mt-14 flex  items-center">
          <i class="ri-netflix-fill text-red-800 text-xl"></i>
          <p class="text-xs text-white font-semibold ml-2">8.4</p>
          <i class="ri-translate-2 text-white text-xl ml-6"></i>
          <p class="text-xs text-white font-semibold ml-2">English</p>
        </div>
        <div class="ml-12 mt-14 flex gap-10">
          <Button />
          <div>
            <Avatars/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
import Avatars from "./Avatars.vue";
</script>
