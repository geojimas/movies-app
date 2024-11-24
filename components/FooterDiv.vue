<template>
  <footer class="flex w-full justify-around bg-[#0b1732] p-2 mt-auto text-xs md:text-md lg:text-xl">
    <p> Copyright &#169; {{ new Date().getFullYear() }} All Rights reserved.</p>
    <a
        class="no-underline	hover:underline"
        href="https://github.com/geojimas"
        target="_BLANK"
    >Github</a>
  </footer>
</template>

<script setup lang="ts">

defineOptions({
  name: 'FooterDiv',
  inheritAttrs: false,
  customOptions: {},
})
</script>
