<template>
  <ul>
    <li v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title">
      <p> {{ post.title }}</p>
      <img v-bind:src="post.url" alt="">
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      posts: ''
    },
    created() {
      this.loadQuote()
    },
    methods: {
      loadQuote: function () {
        this.$http.get('http://localhost:8081/api/posts/')
          .then(response => {
            this.posts = response.data
          }).catch(err => {
            this.posts = 'An error occurred ' + err
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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