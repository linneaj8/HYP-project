<script setup lang="ts"></script>

<template>
  <div class="aboutUs">
    <div>
      <img id="image" src="~assets/img/groupImage.jpg" />
    </div>
    <div><NuxtLink to="/team" class="purpleButton">Our Team</NuxtLink></div>
  </div>
  <div class="infobox">
    <div class="subtitle">Our Mission</div>
    At EmpowerHer, we are dedicated to providing a safe and supportive
    environment for women who are experiencing difficult situations, including
    violence, abuse, and family maltreatment. Our mission is to empower women to
    reclaim their lives through comprehensive support, advocacy, and resources
    tailored to their unique needs.
    <div class="subtitle">Our Vision</div>
    We envision a world where every woman lives free from violence and fear,
    with the confidence and tools to build a fulfilling and independent life.
    Through our work, we strive to break the cycle of abuse and create lasting
    change in the lives of the women we serve and in our community.
    <div class="subtitle">Who We Are</div>
    EmpowerHer is a nonprofit organization founded on the principles of
    compassion, respect, and empowerment. Our team consists of dedicated
    professionals, volunteers, and advocates who are passionate about making a
    difference. We believe in the strength and resilience of women and are
    committed to providing the highest level of care and support.
  </div>
</template>

<style scoped>
#image {
  margin-top: 90px;
  margin-bottom: -110px;
  width: 60%;
  /*height: auto;*/
  clip-path: inset(0 0 150px 0);
}

.aboutUs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.subtitle {
  font-size: 12pt;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
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
  text-decoration: none;
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
  padding-top: 10px;
  min-height: 170px;
}
</style>
