<template>
    <div class="card messages" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <span class="card username">{{ message.username }}</span>
        <span class="card text-message">{{ message.text }}<span class="text-time">{{ message.time }}</span></span>
    </div>
      </div>
</template>

<script setup>
import {ref, watch, nextTick} from 'vue'

const props = defineProps({
  messages: Array
});

const messagesContainer = ref(null);

watch(
  () => props.messages,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  },
  { deep: true } // Use deep watching for nested changes
);
const scrollToBottom = () => {
    
        if (messagesContainer.value) {
          messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
      };
</script>

<style>
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
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
  background-color: white;
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
  min-width: 20%; /* The width adjusts to fit the content */
  max-width: 80%; /* Ensure bubbles don't take more than 80% of the container */
  height: fit-content; /* Adjusts height to fit content */
  margin: 10px 0; /* Space between messages */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
}

.text-time {
  font-size: 12px; /* Make the time small */
  color: gray;
  text-align: right; /* Align the time to the right */
  display: block;
  
}
</style>