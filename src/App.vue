<template>
  <img height="15%" width="15%" alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <PlayList></PlayList>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PlayList from './components/PlayList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PlayList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
