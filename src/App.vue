<template>
  <div class="container" id="app">
    <div>
      <router-link :to="{name: 'Blogs'}">Home</router-link> | 
      <router-link :to="{name: 'Create'}">Write Post</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.blog-title{
  font-size:4rem;
  text-decoration:none;
  color:navy;
}
</style>
