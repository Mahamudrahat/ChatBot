<template>

 <div id="app">
    <ChatBot />
 </div>
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {
    ChatBot
  },
 
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #eaeaea; */
  padding: 20px; /* Adding some padding to ensure the chatbox is not too close to the edges */
  box-sizing: border-box;
}

</style>
