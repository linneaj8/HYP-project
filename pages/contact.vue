<script setup lang="ts">
const { enhance, data } = await useFormAction()
</script>

<template>
  <div class="title">Contact Us</div>
  <div class="contact">
    E-mail: example@email.com | Phone: +39 123 456 7890
    <br />Address: example street, Milan, Italy
  </div>
  <div v-if="data.formResponse?.sent" class="popup">
    <div class="popup-content">
      <p>Your request has been sent successfully!</p>
      <p>We will contact you as soon as possible.</p>
    </div>
  </div>
  <form v-if="!data.formResponse?.sent" v-enhance="enhance" method="POST">
    <div>
      <label for="name">Full name*</label>
      <input type="text" id="name" name="name" placeholder="Name" required/>
    </div>
    <div>
      <label for="mail">E-mail address*</label>
      <input type="email" id="mail" name="mail" placeholder="E-mail" required/>
    </div>
    <div>
      <label for="subject">Subject*</label>
      <input type="text" id="subject" name="subject" placeholder="Subject" required/>
    </div>
    <div id="message-div">
      <label for="message">Message*</label>
      <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
    </div>
    <div>
      <button type="submit" class="purpleButton">Send</button>
    </div>
  </form>
</template>

<style scoped>
.title {
  font-size: 30pt;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.contact {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
}

form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 15px;
  row-gap: 20px;
}

form div {
  display: grid;
  flex-direction: row;
  justify-content: center;
}

form input {
  width: 500px;
  border-radius: 5px;
  background-color: #bfbfbf;
  border: 1px solid black;
  min-height: 25px;
}

form textarea {
  width: 500px;
  border-radius: 5px;
  background-color: #bfbfbf;
  border: 1px solid black;
  min-height: 150px;
}

form label {
  text-align: left;
}

.purpleButton {
  display: inline-block;
  background-color: #9e8db5;
  color: #f7f7f7;
  font-size: 15pt;
  border-radius: 35px;
  padding: 5px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  width: 130px;
  cursor: pointer;
  justify-content: right;
}

.purpleButton:hover {
  text-decoration: underline;
}

.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.popup-content {
  background-color: #3B9489;
  padding: 20px; 
  border-radius: 10px;
  text-align: center;
  color: white;
}
</style>
