<template>
  <div id="app">
    <header>

    </header>
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-tre msg="Welcome to Your Vue.js App 2"/>
    <HelloTre :msg="Goodbye"></HelloTre>
    <library></library>
    <h3>bag</h3>
    <bag></bag>
  </div>
</template>

<script>
import HelloTre from "@/components/HelloWorld";
import Library from "@/components/Library";

export default {
  name: 'App',
  data(){
    return {Goodbye: 'Goodbyess'}
  },
  components: {
    HelloTre,
    Library,
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
