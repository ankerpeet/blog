<template>
  <div class="blog">
    <h2>{{blog.title}}</h2>
    <p v-html="blog.body"></p>
  </div>
</template>

<script>
  import { store } from '../store'
  export default {
    name: 'blog',
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('getBlog', this.$route.params.id)
    },
    computed: {
      blog() {
        return this.$store.state.activeBlog
      }
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