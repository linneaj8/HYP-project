<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div class="title">Our Activities</div>
  <div class="activities">
    <div class="border">
      <div class="container">
        <NuxtLink to="/project">Projects</NuxtLink>
        <div class="links">
          <NuxtLink to="/project">Project</NuxtLink>
          <NuxtLink to="/project">Project</NuxtLink>
          <NuxtLink to="/project">Project</NuxtLink>
          <NuxtLink to="/project">Project</NuxtLink>
          <NuxtLink to="/project">Project</NuxtLink>
          <pre>{{ data }}</pre>
        </div>
      </div>
    </div>
    <div class="border">
      <div class="container">
        <NuxtLink to="/service">Services</NuxtLink>
        <div class="links">
          <NuxtLink to="/service">Service</NuxtLink>
          <NuxtLink to="/service">Service</NuxtLink>
          <NuxtLink to="/service">Service</NuxtLink>
          <NuxtLink to="/service">Service</NuxtLink>
          <NuxtLink to="/service">Service</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 30pt;
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.activities {
  display: flex;
  justify-content: center;
}

.border {
  border-radius: 20px;
  background-color:#3b9489;
  margin: 100px;
  margin-top: 80px;
  margin-bottom: 80px;
  min-width: 280px;
  min-height: 400px;
}

.container {
  display: flex;
  flex: auto;
  flex-direction: column;
  background-color: #f7f7f7;
  font-size: 25pt;
  border-radius: 20px;
  margin: 50px;
  min-width: 280px;
  min-height: 400px;
}

.container a {
  text-decoration: none;
  margin: 20px;
  color: black;
  text-align: center;
}

.container a:hover {
  text-decoration: underline;
}

.links {
  font-size: 17pt;
  text-decoration: underline;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.links a {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
}

.links a:hover {
  color: #bfbfbf;
}
</style>
