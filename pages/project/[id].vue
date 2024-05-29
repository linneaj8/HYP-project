<script setup lang="ts">
const { id } = useRoute().params
const { data: project} = useFetch(`/api/project/${id}`)
</script>

<template>
  <div>Project</div>

  <div>{{ project }}</div>
</template>

<style scoped></style>