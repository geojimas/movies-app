<template>
  <div class="flex flex-col relative hover:transform hover:scale-105">
    <div>
      <div class="overflow-hidden rounded-2xl  cursor-pointer">
        <NuxtPicture
            format="webp"
            class="block w-full h-full"
            :src="`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`"
        />
      </div>
    </div>
    <div class="mt-1 ml-1">
      <p class="font-semibold text-md">
        {{ movie.original_title }}
      </p>
      <p class="absolute top-[0.3em] right-[0.3em] p-[0.3em] bg-black/50 tracking-[0.05em] rounded-full font-bold">
        <span class="text-[#EDC126]">TMDB</span> {{ movie.vote_average.toFixed(1) }}⭐
      </p>
      <p class="mt-1 opacity-60 text-sm">
        Released:
        {{
          new Date(movie.release_date).toLocaleString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {toRefs} from "vue";

// Options
defineOptions({
  name: 'BaseMovie',
  inheritAttrs: false,
  customOptions: {},
})

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
const {movie} = toRefs(props);

</script>

