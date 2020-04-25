<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Choose which phonics cards you would like to interact with.
    </p>
    <h1>Animals</h1>

    <h1>Letters</h1>
    <ul>
      var randomnumber=Math.floor(Math.random()*11) var randomnumber2=Math.floor(Math.random()*11)

      <p></p>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><b href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</b></li>
      <li><b href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</b></li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li><b href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</b></li>
      <li>
        <b href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
          >awesome-vue</b
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld:',
  props: {
    msg: String,
  },
  methods: {
    Math() {
      const randomnumber = Math.floor(Math.random() * 11);
      const randomnumber2 = Math.floor(Math.random() * 11);
      const randomopperator = Math.floor(Math.random() * 2);
      var result;
      if (randomopperator === 0) {
        result = randomnumber + randomnumber2;
      } else {
        result = randomnumber - randomnumber2;
      }
      return result;
    },
  },
};
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
b {
  color: #b3249b;
}
</style>
