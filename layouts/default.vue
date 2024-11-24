<template>
  <div>
    <header>
      <h1>Default Layout Header</h1>
    </header>
    <main>
      <NuxtPage/>
    </main>
    <FooterDiv/>
  </div>
</template>

<script setup>

defineOptions({
  name: 'default',
  inheritAttrs: false,
  customOptions: {},
})
</script>
