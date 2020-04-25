<template>
  <b-container>
    <h1 class="pt-3 pb-3">Addition Subtraction</h1>
    <h2 class="pb-4">
      {{ randomnumber }} {{ randomopperator }} {{ randomnumber2 }} = {{ result }}
    </h2>
    <b-button variant="success" @click.prevent="Calculations()"><H2>Calculate</H2></b-button>
  </b-container>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      result: 0,
      randomnumber: 0,
      randomnumber2: 0,
      randomopperator: '+',
    };
  },
  methods: {
    Calculations() {
      const randomnumber = Math.floor(Math.abs(Math.random() * 7));
      const randomnumber2 = Math.floor(Math.abs(Math.random() * 7));
      const randomopperator = Math.floor(Math.abs(Math.random() * 2));
      let result;
      // var plus;
      // var minus;
      if (randomopperator === 0) {
        this.randomopperator = '+';
        result = randomnumber + randomnumber2;
      } else {
        this.randomopperator = '-';
        result = randomnumber - randomnumber2;
      }
      this.result = result;
      this.randomnumber = randomnumber;
      this.randomnumber2 = randomnumber2;
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
