<script setup lang="ts"></script>

<template>
  <div class="title">EmpowerHer Center</div>
  <div class="info">
    <div class="infobox">
      <div class="subtitle">Welcome to EmpowerHer</div>
      At EmpowerHer, we stand with women who are facing difficult and
      challenging times. Our mission is to provide a safe haven, compassionate
      support, and practical assistance to those affected by violence, abuse,
      and family maltreatment.
      <div class="subtitle">Our Services</div>
      <ul>
        <li>
          Emergency Shelter: A safe and confidential place to stay for women and
          children escaping violence.
        </li>
        <li>
          Counseling and Therapy: Professional support to help you heal and
          regain your strength.
        </li>
        <li>
          Legal Advocacy: Guidance and representation to navigate the legal
          system and protect your rights.
        </li>
        <li>
          Support Groups: A community of women who understand your experiences
          and offer mutual support.
        </li>
        <li>
          Educational Workshops: Empowering you with knowledge and skills to
          rebuild your life.
        </li>
        <li>
          Childcare Services: Ensuring your children are cared for while you
          focus on your recovery.
        </li>
      </ul>
      <div class="subtitle">How We Help</div>
      Our approach is holistic and tailored to each individual's needs. We
      believe in the power of community and the resilience of women. Through
      personalized support plans, we aim to address immediate safety concerns
      while also working towards long-term solutions for stability and
      independence.
      <div class="subtitle">Get Involved</div>
      Your support makes a difference. There are many ways to get involved with
      EmpowerHer:
      <ul>
        <li>Volunteer: Share your time and skills to help women in need.</li>
        <li>
          Donate: Your financial contributions directly support our programs and
          services.
        </li>
        <li>
          Advocate: Raise awareness and promote change within your community.
        </li>
      </ul>
    </div>
    <div class="timeInfo">
      <div>
        <div class="margin">
          If you or someone you know is in need of help, please reach out. We
          are here for you, 24/7.
        </div>
        <br />
        Phone: +39 123 456 7890<br />
        E-mail: example@email.com
        <div class="bold">Center opening hours:</div>
        Mon 10-16
        <br />
        Tue 10-16
        <br />
        Wed closed
        <br />
        Thu 12-15
        <br />
        Fri 10-16
        <br />
        Sat 12-18
        <br />
        Sun 10-16
      </div>
      <div>
        <div class="bold">Where to find us:</div>
        Address: example street, Milan, Italy
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

.subtitle {
  font-size: 12pt;
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: bold;
}

li {
  margin: 10px;
}

.margin {
  margin-top: 30px;
}

.info {
  display: flex;
}

.infobox {
  background-color: #bfbfbf;
  border-radius: 15px;
  margin: 100px;
  margin-top: 50px;
  margin-right: 0px;
  margin-bottom: 30px;
  padding: 25px;
  min-height: 500px;
}

.timeInfo {
  color: #f7f7f7;
  background-color: #9e8db5;
  padding: 25px;
  padding-top: 0px;
  border-radius: 15px;
  margin: 100px;
  margin-top: 100px;
  margin-left: 50px;
  min-width: 150px;
}

.bold {
  margin-top: 30px;
  font-weight: bold;
}
</style>
