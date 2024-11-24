<template>
  <MoviesArea v-if="data" :movies="data"/>
  <Loading v-else/>
</template>

<script setup>

definePageMeta({
  layout: 'default',
})

const config = useRuntimeConfig();
const BASE_URL = config.public.apiUrl;
const TOKEN = config.public.apiToken;


const {data, error} = useAsyncData('moviesData', () =>
    $fetch(`${BASE_URL}/movie/now_playing?language=en-GB&page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
      },
    })
);
</script>
