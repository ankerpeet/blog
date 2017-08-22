<template>
  <div class="blogs">
      <div v-for="blog in blogs">
       <h2> <router-link :to="{name: 'Blog', params:{id: blog._id}}">{{blog.title}}</router-link></h2>
       <p>{{blog.body}}</p>
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