<template>
    <MessageList :messages="messages" />
    <div class="text-button-area" id="text-button-area">
      <textarea type="text" v-model="newMessage" @input="handleInput" placeholder="Type your message..."></textarea>
      <button class="send-button" @click.prevent="sendMessage"><img src="../assets/sendicon.svg" /></button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import MessageList from './MessageList.vue';
import { autoResize, resetTextarea, messageRealTime, extractUserNameFirstLetter } from '../Utility.js';
const messages = ref([]);
const newMessage = ref('');
let props=defineProps({
    userName:String
});
function sendMessage(){
    if (newMessage.value.trim()) {
    messages.value.push({
      username: extractUserNameFirstLetter(props.userName),
      text: newMessage.value,
      time:messageRealTime()
    })
    newMessage.value = '';
    var resizeTextArea = document.getElementById('text-button-area')
    resetTextarea(resizeTextArea.lastChild.previousSibling);
  
  }
}


function handleInput(event) {
  autoResize(event.target);  // Adjust the textarea size
}


</script>

<style>
.text-button-area {
  display: flex;
  flex-direction: row;
}

textarea {
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  color: black;
  padding: 4px 8px;
  border-radius: 10px;
  background-color: #e0e0e0;
  border: 1px solid blueviolet;
  width: 400px;
  min-height: 50px;
  max-height: 100px;
  /* Minimum height of the textarea */
  resize: none;
  /* Prevent manual resizing */
  overflow-y: hidden;
  /* Hide scrollbar */
  box-sizing: border-box;
}

.send-button {
  width: 50px;
  height: 50px;
  padding: 2px 8px;
  background-color: transparent;
  margin-left: 10px;
  cursor: pointer;
  border: none;
}

.send-button img {
  width: 50px;
  /* Adjust the image width */
  height: 50px;
  /* Adjust the image height */
  object-fit: contain;
}

</style>