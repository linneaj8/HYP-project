<script setup lang="ts">
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <div class="title">Our Services</div>

  <div class="container">
    <div v-for="service in services" class="box-services">
      <NuxtLink :to="'/service/'+service.id">
        <div class="service">
          <img :src="service.img" alt="Service">
          <h3>{{ service.name }}</h3>
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
.box-services {
  width: 50%;
  margin-bottom: 50px;
}
.box-services a{
  text-decoration: none;
}
.service {
  width: 500px;
  /* height: 300px;*/
  border-radius: 10px;
  background-color: #3B9489;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  color: white;
}
.service img {
  width: 450px;
  height: 150px;
  border-radius: 10px;
  margin-top: 10px;
  object-fit: cover;
}
.service h3 {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.service p {
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
