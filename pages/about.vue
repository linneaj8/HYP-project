<script setup lang="ts"></script>

<template>
  <div class="aboutUs">
    <div>
      <img id="image" src="~assets/img/groupImage.png" />
    </div>
    <div><button class="purpleButton">Our Team</button></div>
  </div>
  <div class="infobox">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</template>

<style scoped>
#image {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 40%;
  height: auto;
}

.aboutUs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.purpleButton {
  background-color: #9e8db5;
  color: #f7f7f7;
  font-size: 15pt;
  border-radius: 35px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
}

.purpleButton:hover {
  text-decoration: underline;
}

.infobox {
  background-color: #bfbfbf;
  border-radius: 15px;
  margin: 100px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 25px;
  min-height: 170px;
}
</style>
