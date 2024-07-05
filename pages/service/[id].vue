<script setup lang="ts">
const { id } = useRoute().params
const { data: service} = useFetch(`/api/service/${id}`)
</script>

<template>
  <div>Service</div>

  <div class="layout">{{ service }}</div>
</template>

<style scoped>
.layout a{
  display: flex;
  justify-content: center;
}
</style>