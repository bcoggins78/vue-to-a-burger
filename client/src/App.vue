<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center" id="top-bar">
          <img src="@/assets/images/burger.png" alt="burger">
          <h1>Eat-Da-Burger!</h1>
        </div>
        <div class="col-md-6 text-center task">
          <div id="burgers" class="row"></div>
        </div>
        <div id="devoured" class="col-md-6 text-center task"></div>
      </div>
    </div>
    <devoured/>
  </div>
</template>

<script>
import Devoured from "@/components/Devoured.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    Devoured
  },
  data: function() {
    return {
      msg: {}
    };
  },
  created: function() {
    axios.get("api/test").then(
      function(response) {
        console.log(response.data);
        this.msg = response.data;
      }.bind(this)
    );
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  width: 99%;
  height: 900px;
  background-color: #fc6;
}

#top-bar {
  margin-top: 28px;
}

.spacing-reset {
  padding: 0;
  margin: 0;
  border: 0;
}

.list-reset {
  padding: 0;
  margin: 0;
  list-style-type: none;
  border: 0;
}

.task {
  border-color: black;
  border-style: solid;
  border-width: 3px;
}

.button-size {
  padding-bottom: 20px;
}

h1 {
  color: #f30;
}
</style>
