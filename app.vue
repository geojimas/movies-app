<template>
  <NuxtLayout>
    <div class="animate__animated animate__fadeIn">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import 'animate.css';

</script>

<style lang="scss">
html {
  font-family: Tahoma, sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  color: rgb(243, 244, 246);
  background: radial-gradient(at center top, rgb(27, 39, 72), rgb(38, 38, 111), rgb(30, 46, 82))
}
</style>
