<script setup lang="ts">
const { id } = useRoute().params
const { data: service} = useFetch(`/api/service/${id}`)
</script>

<template>
  <div>Service</div>

  <div>{{ service }}</div>
</template>

<style scoped></style>