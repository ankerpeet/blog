<template>
  <div class="blog">
    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
  </div>
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'blog',
    data() {
      return {
        blog: ""
      }
    },
    methods: {
      getBlog(res){
        this.blog = res
      }
    },
    mounted() {
      store.getBlog((this.$route.params.id), (this.getBlog))
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