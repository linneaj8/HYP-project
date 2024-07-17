<script setup lang="ts">
const { id } = useRoute().params
const { data: service} = useFetch(`/api/service/${id}`)
</script>

<template>
  <div class="container">
    <div class="profile">
      <img :src="service?.service?.img" alt="Service Picture">
      
    </div>

    <div class="info">
      <div class="name">
        <h1>{{ service?.service?.name }}</h1>
      </div>
      <div class="top-info">
        <div class="line">
          <span>Service Leader: </span>
          <NuxtLink v-for="person in service?.people" :to="'/person/'+person.id">{{ person.name }}</NuxtLink>
        </div>
      </div>
      <p>{{ service?.service?.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  padding: 10px;
}

.profile {
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.profile h1 {
  margin-top: 10px;
}

.info {
  background-color: #bfbfbf;
  border-radius: 15px;
  margin: 100px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 25px;
  padding-top: 10px;
  min-height: 170px;
}

.top-info{
  display: flex;
  justify-content: space-between;
}
.info h3 {
  margin-top: 0;
}

.info p {
  margin-bottom: 10px;
}

.line {
  margin-bottom: 5px;
}

.line *{
  display: inline;
  margin-right: 20px;
}

.left-block, .right-block {
  display: inline-block;
}

.name{
  text-align: center;
}
</style>