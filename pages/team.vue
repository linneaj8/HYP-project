<script setup lang="ts">
const { data: people } = await useFetch('/api/people')
</script>

<template>
  <div>Our Team</div>

  <NuxtLink v-for="person in people" :to="'/person/'+person.id">{{ person }}</NuxtLink>
</template>

<style scoped></style>
