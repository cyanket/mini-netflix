<template>
  <section
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center"
    aria-hidden="true"
  >
    <div v-for="i in 8" :key="i" class="animate-pulse bg-gray-800 rounded-xl shadow-md w-full max-w-xs mx-auto">
      <div class="h-72 bg-gray-700 rounded-t-xl"></div>
      <div class="p-4 space-y-3">
        <div class="h-4 bg-gray-700 rounded w-3/4"></div>
        <div class="h-3 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  </section>
</template>
