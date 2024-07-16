<script setup lang="ts">
const { data: people } = await useFetch('/api/people')
</script>

<template>
  <div class="title">Our Team</div>

  <div class="container">
    <div v-for="person in people" class="box-member">
      <NuxtLink :to="'/person/'+person.id">
        <div class="team-member">
          <img :src="person.img" alt="Team Member">
          <h3>{{ person.name }}</h3>
          <p>{{ person.role }}</p>
          <p>{{ person.education }}</p>
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
  justify-content: flex-start;
  margin-top: 20px;
}
.box-member {
  width: 25%;
  
  margin-bottom: 50px;
}
.team-member {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: #9E8DB5;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
}
.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
  object-fit: cover;
}
.team-member h3 {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}
.team-member p {
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
