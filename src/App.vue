<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from "./views/Index.vue";
export default {
  name: "App",
  components:{
    Index,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: rgb(245, 245, 245);
}
</style>
