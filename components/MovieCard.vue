<template>
  <article class="w-full max-w-xs bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <NuxtLink
      :to="`/movie/details/${movie.imdbID}`"
      class="block"
      :aria-label="`View details for {{ movie.Title }}`"
    >
      <img
        :src="movie.Poster"
        :alt="movie.Title"
        class="w-full h-72 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h2 class="text-base font-semibold text-white truncate">
          {{ movie.Title }}
        </h2>
        <p class="text-sm text-gray-400">{{ movie.Year }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  }
})
</script>
