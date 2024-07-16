<script setup lang="ts">
const { data: projects } = await useFetch('/api/projects')
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <div class="title">Our Activities</div>
  <div class="activities">
    <div class="border">
      <div class="container">
        <NuxtLink to="/projects">Projects</NuxtLink>
        <div class="links">
            <ul>
            <li v-for="project in projects">
              <NuxtLink :to="'/project/'+project.id">{{ project.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border">
      <div class="container">
        <NuxtLink to="/services">Services</NuxtLink>
        <div class="links">
          <ul>
            <li v-for="service in services">
              <NuxtLink :to="'/service/'+service.id">{{ service.name }}</NuxtLink>
            </li>
          </ul>
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
  margin-top: 100px;
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
