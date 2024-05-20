<script setup lang="ts"></script>

<template>
  <div class="title">Contact Us</div>
  <div class="contact">
    E-mail: example@email.com | Phone: +39 123 456 7890
    <br />Address: example street, Milan, Italy
  </div>
  <form>
    <div>
      <label for="name">Full name*</label>
      <input type="text" id="name" placeholder="Name" />
    </div>
    <div>
      <label for="mail">E-mail address*</label>
      <input type="email" id="mail" placeholder="E-mail" />
    </div>
    <div>
      <label for="subject">Subject*</label>
      <input type="text" id="subject" placeholder="Subject" />
    </div>
    <div id="message-div">
      <label for="message">Message*</label>
      <textarea id="message" placeholder="Write your message here"></textarea>
    </div>
    <div>
      <button class="purpleButton">Send</button>
    </div>
  </form>
</template>

<style scoped>
.title {
  font-size: 30pt;
  display: flex;
  justify-content: center;
  margin-top: 70px;
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
</style>
