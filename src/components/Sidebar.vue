<template>
  <div id="sidebar" class="w-[300px] h-screen flex flex-col justify-between">
    <div class="pt-8">
      <div class="pb-12 pl-12">
        <h3 class="text-xl font-bold text-gray-900">
          Toski.<span class="text-lg text-red-600">Movies</span>
        </h3>
      </div>
      <div>
        <h4 class="text-xs font-semibold pb-6 pl-12">News Feed</h4>
        <div
          class="flex items-center gap-4 mb-6 border-l-4 border-red-600 pl-11"
        >
          <i class="ri-compass-3-line text-2xl font-light text-red-600"></i>
          <p class="font-semibold text-sm">Browse</p>
        </div>
        <div class="flex items-center gap-4 mb-6 text-gray-500 pl-12">
          <i class="ri-heart-2-line text-2xl font-light"></i>
          <p class="font-semibold text-sm">Watchlist</p>
        </div>
        <div class="flex items-center gap-4 mb-6 text-gray-500 pl-12">
          <i class="ri-calendar-2-line text-2xl font-light"></i>
          <p class="font-semibold text-sm">Coming Soon</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-4 text-gray-500 pl-12 mb-20">
      <i class="ri-logout-box-line text-red-600 text-2xl font-light"></i>
      <p class="font-semibold text-sm">Logout</p>
    </div>
  </div>
</template>

<style scoped>
#sidebar {
  border-right: 1.5px solid #eaeded;
}
</style>
