<template>
  <div class="blogs">
      <div class="row" v-for="blog in blogs">
        <div class="col-xs-3">
          <h2> <router-link :to="{name: 'Blog', params:{id: blog._id}}">{{blog.title}}</router-link></h2>
          <h4>{{blog.date}}</h4>
        </div>
        <div class="col-xs-9">
          <p>{{blog.body}}... <router-link :to="{name: 'Blog', params:{id: blog._id}}">Read More</router-link></p>
        </div>
      </div>
  </div>
</template>

<script>

  import { store } from '../store'
  export default {
    name: 'blogs',
    data() {
      return {
        blogs:[]        
      }
    },
    methods: {
    getBlogs(res){
      this.blogs = res
    }
    },
    mounted() {
        store.getBlogs(this.getBlogs) 
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>