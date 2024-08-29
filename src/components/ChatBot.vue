<template>
  <div class="card chatbox">
    <div class="card head">
      <label>ChatBot</label>
    </div>

    <div class="card head-username">
      {{ userName }}
    </div>
    <MessageList :messages="messages" />
   <ChatInput :userName="userName"/>
  </div>
</template>

<script setup>
import { ref ,nextTick, onMounted} from 'vue';
import ChatInput from "./ChatInput.vue";



let userName = ref('Mahamud Hasan');

</script>

<style scoped>
.chatbox {
  width: 90vw;
  /* 90% of the viewport width */
  height: 80vh;
  /* 80% of the viewport height */
  max-width: 600px;
  /* Maximum width */
  max-height: 500px;
  /* Maximum height */
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
}

.head {
  font-size: 18px;
  font-family: 'Times New Roman';
  font-weight: 500px;
  color: blueviolet;
  text-align: center;
}

.head-username {
  font-size: 18px;
  font-family: 'Times New Roman';
  font-weight: 500px;
  color: blueviolet;
  padding: 2px 8px;
  /* Adds padding inside the border */
  border-radius: 10px;
  /* Rounds the corners */
  background-color: #e0e0e0;
  /* Light background color to make it stand out */
  border: 1px solid blueviolet;
  /* Adds a border with the same color as the text */
  display: inline-block;
  /* Ensures the styling doesn't affect the flow of the text */
}



</style>