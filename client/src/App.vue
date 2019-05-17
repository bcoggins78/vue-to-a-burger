<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg.greeting"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      msg: {}
    }
  },
  created: function() {
    axios.get('api/test').then(
      function(response) {
        console.log(response.data);
        this.msg = response.data;
      }.bind(this)
    );
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
