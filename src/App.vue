<template>
  <div id="app">
    <div>Header</div>
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

.blog-title{
  font-size:4rem;
  text-decoration:none;
  color:navy;
}
</style>
