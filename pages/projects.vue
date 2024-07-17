<script setup lang="ts">
const { data: projects } = await useFetch('/api/projects')
</script>

<template>
  <div class="title">Our Projects</div>

  <div class="container">
    <div v-for="project in projects" class="box-project">
      <NuxtLink :to="'/project/'+project.id">
        <div class="project">
          <img :src="project.img" alt="Project">
          <h3>{{ project.name }}</h3>
        </div>
      </NuxtLink>
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
.box-project {
  width: 50%;
  margin-bottom: 50px;
}
.box-project a{
  text-decoration: none;
}
.project {
  width: 500px;
  /* height: 300px;*/
  border-radius: 10px;
  background-color: #3B9489;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  color: white;
}
.project img {
  width: 450px;
  height: 150px;
  border-radius: 10px;
  margin-top: 10px;
  object-fit: cover;
}
.project h3 {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.project p {
  margin-top: 5px;
  font-size: 14px;
}
.back {
  background-color: #d3d3d3;
  width: 200px;
  height: 50px;
  position: absolute;
  left: 20px;
  top: 20px;
  border-radius: 5px;
}
.back i {
  color: white;
  font-size: 20px;
  line-height: 50px;
  position: absolute;
  left: 30px;
}
</style>
