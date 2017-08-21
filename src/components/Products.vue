<template>
  <div class="products">
    Products

    <ul>
      <li v-for="product in products">
        <router-link>{{product.name}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'products',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      console.log("on about page")
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