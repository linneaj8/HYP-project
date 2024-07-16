<script setup lang="ts">
const { id } = useRoute().params
const { data: project} = useFetch(`/api/project/${id}`)
</script>

<template>
  <div class="container">
    <div class="profile">
      <img :src="project?.project?.img" alt="Project Picture">
      
    </div>

    <div class="info">
      <div class="name">
        <h1>{{ project?.project?.name }}</h1>
      </div>
      <div class="top-info">
        <div class="line">
          <span>Participants: </span>
          <NuxtLink v-for="person in project?.people" :to="'/person/'+person.id">{{ person.name }}</NuxtLink>
        </div>
      </div>
      <p>{{ project?.project?.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  /*background-color: #f1f1f1;*/
  padding: 10px;
}

.profile {
  /*background-color: #fff;*/
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