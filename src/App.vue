<template>
  <div id="app">
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'Blogs'}">Blogs</router-link>
    </div>
    <router-view></router-view>
    <div>FOOTER</div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
