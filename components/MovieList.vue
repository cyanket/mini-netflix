<template>
  <main class="container px-8 pt-4 pb-8">
    <h1 class="text-2xl font-bold mb-4">
      My List
    </h1>

    <!-- Movie grid: Shown only if data is loaded and available -->
    <section
      v-if="!isLoading && movies.length"
      class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center"
      aria-label="Movie list"
    >
      <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </section>

    <!-- Skeleton loader while fetching movies -->
    <MovieListSkeleton v-else-if="isLoading" />

    <!-- Fallback message if no movies were fetched -->
    <p v-else class="text-center text-gray-500 font-medium mt-6">
      No movies found
    </p>
  </main>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue';
import MovieListSkeleton from '@/components/MovieListSkeleton.vue';

// Reactive state variables
const movies = ref([]);
const isLoading = ref(true);

// IMDb IDs of movies
const movieIds = [
  'tt31036941',
  'tt1187043',
  'tt1396484',
  'tt0323013',
  'tt9663764',
  'tt2338151',
  'tt4129428',
  'tt8108202',
]

// Fetch movie details on component mount
onMounted(async () => {
  try {
    const responses = await Promise.allSettled(
      movieIds.map((id) =>
        fetch(`/api/movie?id=${id}`).then((res) =>
          res.json()
        )
      )
    );
    // Filter out movies with an invalid API response
    movies.value = responses
      .filter(r => r.status === 'fulfilled' && r.value?.Response !== 'False')
      .map(r => r.value);
  } catch (err) {
    console.error('Failed to fetch movies:', err);
  } finally {
    isLoading.value = false;
  }
})
</script>
