<script setup lang="ts">
const { id } = useRoute().params
const { data: person} = useFetch(`/api/person/${id}`)
</script>

<template>
  <div class="container">
    <div class="profile">
      <img :src="person?.people?.img" alt="Profile Picture">
      
    </div>

    <div class="info">
      <div class="name">
        <h1>{{ person?.people?.name }}</h1>
      </div>
      <div class="top-info">
        <div class="left-block">
          <div class="line">
            <h3>Role:</h3>
            <a>{{ person?.people?.role }}</a>
          </div>
          
          <div class="line">
            <h3>Years of Experience:</h3>
            <p>{{ person?.people?.experience }}</p>
          </div>
          
          <div class="line">
            <h3>Education:</h3>
            <p>{{ person?.people?.education }}</p>
          </div>
        </div>

        <div class="right-block">
          <div class="line">
            <span>Projects: </span>
            <NuxtLink :to="'/project/'+person?.projects?.id">{{ person?.projects?.name }}</NuxtLink>
          </div>
          <div class="line">
            <span>Services: </span>
            <NuxtLink :to="'/service/'+person?.services?.id">{{ person?.services?.name }}</NuxtLink>
          </div>
        </div>
      </div>
      <p>{{ person?.people?.description }}</p>
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