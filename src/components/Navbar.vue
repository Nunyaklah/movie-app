<template>
  <div class="pt-8 w-full">
    <div class="flex justify-between">
      <div class="flex h-[40px] items-center">
        <div>
          <i class="ri-menu-2-line text-xl"></i>
        </div>
        <div class="pl-10 flex gap-4">
          <i class="ri-arrow-left-s-line text-xl"></i>
          <i class="ri-arrow-right-s-line text-xl"></i>
        </div>
        <div
          id="search"
          class="ml-10 h-12 w-[500px] rounded-full relative items-center"
        >
          <i class="ri-search-2-line text-xl pl-5 absolute left-1 top-2"></i>
          <input
            type="search"
            class="w-full p-3.5 pl-14 text-sm text-gray-900 bg-transparent outline-none focus:ring-red-500 focus:border-red-500"
            placeholder="Start writing . . ."
          />
          <i class="ri-mic-line pr-5 absolute right-2.5 top-2"></i>
        </div>
      </div>
      <div class="flex items-center gap-4 mr-20">
        <div>
          <i class="ri-message-3-line text-xl"></i>
        </div>
        <div class="relative">
          <i class="ri-notification-3-line text-xl"></i>
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
    <Content/>
  </div>
</template>
<script setup>
import Content from "./Content.Vue"
</script>


<style scoped>
#search {
  border: 1.5px solid #eaeded;
}
</style>
