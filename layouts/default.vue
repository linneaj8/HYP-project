<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">EmpowerHer Center</NuxtLink>
      <div class="middle">
        <NuxtLink to="/activities">Our Activities</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
      </div>
      <div class="first">
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style>
header {
  background-color: #9e8db5;
  padding: 15px 0 15px 0;
}

nav {
  display: flex;
}

nav a {
  color: #f7f7f7;
  font-size: 17pt;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 20px;
}

.first {
  margin-left: 7%;
}

nav .middle {
  display: flex;
  justify-content: center;
  flex: 2;
}

nav a:hover {
  text-decoration: underline;
}
</style>
