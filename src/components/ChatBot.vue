<template>
  <div class="card chatbox">
    <div class="card head">
      <label>ChatBot</label>
    </div>

    <div class="card head-username">
      {{ userName }}
    </div>
    <div class="card messages" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <span class="card username">{{ message.username }}</span>
        <span class="card text-message">{{ message.text }}</span>
      </div>
    </div>
    <div class="text-button-area" id="text-button-area">
      <textarea type="text" v-model="newMessage" @input="autoResize" placeholder="Type your message..."></textarea>
      <button class="send-button" @click.prevent="sendMessage($event)"><img src="../assets/sendicon.svg" /></button>
    </div>
  </div>
</template>

<script setup>
import { ref ,nextTick, onMounted} from 'vue';

const messages = ref([]);
let userName = ref('Mahamud');
let messagesContainer=ref(null)
const newMessage = ref('');

const sendMessage = (event) => {
  if (newMessage.value.trim()) {
    messages.value.push({
      username: 'Y',
      text: newMessage.value
    })
    newMessage.value = '';
    var resizeTextArea = document.getElementById('text-button-area')
    resetTextarea(resizeTextArea.lastChild.previousSibling);
    nextTick(() => {
          scrollToBottom();
        });
  }
};

const autoResize = (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  const maxHeight = 100;

  if (textarea.scrollHeight > maxHeight) {
    textarea.style.height = `${maxHeight}px`;
    textarea.style.overflowY = 'scroll'
  } else {
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.overflowY = 'hidden'
  }
};
const resetTextarea = (textarea) => {
  console.log("reset");
  textarea.style.height = '50px'; // Set back to initial height (min-height)
  textarea.style.overflowY = 'hidden'; // Hide scrollbar again
};
const scrollToBottom = () => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    };
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

.messages {
  margin: 4px;
  padding: 2px 4px;
  /* Adds padding inside the border */
  border-radius: 10px;
  /* Rounds the corners */
  height: 400px;
  border: 1px solid blueviolet;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */

}
.username{
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  margin-right: 4px;
  height: 20px;
  border-radius: 20px;
}
.text-message {
  display: inline-block; /* Adjust to inline-block to fit content */
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  padding: 8px 12px; /* Slightly increased padding for better spacing */
  border-radius: 10px; /* More rounded corners for a bubble effect */
  white-space: pre-wrap; /* Preserve line breaks */
  word-wrap: break-word; /* Ensure long words break correctly */
  overflow-wrap: break-word; /* Same as word-wrap, for compatibility */
  background-color: #e0e0e0; /* Light grey background for the message bubble */
  line-height: 1.5;
  width: fit-content; /* The width adjusts to fit the content */
  max-width: 80%; /* Ensure bubbles don't take more than 80% of the container */
  height: fit-content; /* Adjusts height to fit content */
  margin: 10px 0; /* Space between messages */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
}

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