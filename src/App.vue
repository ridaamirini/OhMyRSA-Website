<template>
  <div id="app">
    <main-terminal></main-terminal>
  </div>
</template>

<script>

import MainTerminal from './components/MainTerminal'

export default {
  name: 'app',
  components: { MainTerminal }
}
</script>

<style>
body {
  background: url('/static/assets/desktop.jpg') no-repeat center center fixed;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
