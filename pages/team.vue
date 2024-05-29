<script setup lang="ts">
const { data: people } = await useFetch('/api/people')
</script>

<template>
  <div>Our Team</div>

  <div v-for="person in people">{{ person }}</div>
</template>

<style scoped></style>
