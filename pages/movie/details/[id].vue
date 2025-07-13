<template>
  <section class="max-w-4xl mx-auto px-8 py-8">
    <div v-if="!isLoading && movie" class="grid md:grid-cols-3 gap-8 items-start">
      <div class="md:col-span-1">
        <img
          :src="movie.Poster"
          :alt="`Poster for ${movie.Title}`"
          class="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      <div class="md:col-span-2">
        <h1 class="text-4xl font-bold text-white mb-4">{{ movie.Title }}</h1>
        <div class="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
          <div class="flex items-center gap-2" title="Year">
            <CalendarDaysIcon class="w-5 h-5" />
            <span>{{ movie.Year }}</span>
          </div>
          <div class="flex items-center gap-2" title="Genre">
            <FilmIcon class="w-5 h-5" />
            <span>{{ movie.Genre }}</span>
          </div>
          <div class="flex items-center gap-2" title="Length">
            <ClockIcon class="w-5 h-5" />
            <span>{{ movie.Runtime }}</span>
          </div>
        </div>
        <p class="text-base text-gray-300 mb-6">{{ movie.Plot }}</p>
        <div class="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <UsersIcon class="w-5 h-5" />
          <span class="font-semibold">Starring:</span>
          <span>{{ movie.Actors }}</span>
        </div>
        <div class="flex items-center gap-2 font-medium" title="Rating">
          <StarIcon class="w-5 h-5 text-yellow-500  " />
          <span class="text-white">{{ movie.imdbRating }} / 10</span>
        </div>
      </div>
    </div>

    <MovieDetailsSkeleton v-else-if="isLoading" />

    <div v-else class="text-center text-gray-500">
      <h1 class="text-2xl font-bold mb-4">Movie not found</h1>
      <p>We couldn't find the movie you're looking for.</p>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { StarIcon } from '@heroicons/vue/24/solid';
import { FilmIcon, CalendarDaysIcon, ClockIcon, UsersIcon } from '@heroicons/vue/24/outline';
import MovieDetailsSkeleton from '@/components/MovieDetailsSkeleton.vue';

const route = useRoute()
const movie = ref(null)
const isLoading = ref(true)

// Fetch movie data on component mount
onMounted(async () => {
  const movieId = route.params.id || route.query.movieId;
  if (!movieId) {
    isLoading.value = false;
    return;
  }
  try {
    const res = await fetch(`/api/movie?id=${movieId}`);
    const data = await res.json();
    // If valid response, assign it to the movie ref
    if (data && data.Response !== 'False') {
      movie.value = data;
    }
  } catch (err) {
    console.error('Failed to fetch movie:', err)
  } finally {
    isLoading.value = false;
  }
})
</script>
