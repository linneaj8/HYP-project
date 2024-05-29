<script setup lang="ts">
const { id } = useRoute().params
const { data: person} = useFetch(`/api/person/${id}`)
</script>

<template>
  <div>Person</div>
  <div>{{ person }}</div>
</template>

<style scoped></style>