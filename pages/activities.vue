<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>Our activities</div>
  <pre>{{ data }}</pre>
</template>

<style scoped></style>