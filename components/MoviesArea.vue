<template>
  <div class="animate__animated animate__fadeIn container mx-auto">
    <div class="grid p-6 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <BaseMovie
          v-for="movie in movies.results"
          :key="movie.id"
          :movie="movie"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import BaseMovie from './BaseMovie.vue'

// Options
defineOptions({
  name: 'MoviesArea',
  inheritAttrs: false,
  customOptions: {},
})

// Props definition
const props = defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
const {movies} = toRefs(props);

</script>
