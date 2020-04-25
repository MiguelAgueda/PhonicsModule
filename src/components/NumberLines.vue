<template>
  <b-container class="pl-3 pr-3">
    <h3>Let's Use Some Number Lines</h3>
    <b-container class="text-left pt-4 pb-4">
      <label for="nl1"><h4>Choose your favorite number on the number line.</h4></label>
      <b-input-group class="pb-2" prepend="0" append="10">
        <b-form-input id="nl1" v-model="numberLine1" type="range" min="0" max="10"></b-form-input>
      </b-input-group>
      <label for="nl1">Your favorite number is {{ numberLine1 }}.</label>
    </b-container>

    <b-container class="text-left pt-4 pb-4">
      <label for="nl2"><h4>Choose the number 4 on the number line.</h4></label>
      <b-input-group class="pt-2 pb-2" prepend="0" append="10">
        <b-form-input id="nl2" v-model="numberLine2" type="range" min="0" max="10"></b-form-input>
      </b-input-group>
      <label for="nl2">Is {{ numberLine2 }} = 4? {{ NL2Result }}.</label>
    </b-container>

    <b-container class="text-left pt-4 pb-4">
      <label class="pt-4" for="nl3"><h4>Choose your favorite number on the number line</h4></label>
      <b-input-group class="pt-2 pb-2" prepend="0" append="10">
        <b-form-input id="nl3" v-model="numberLine3" type="range" min="0" max="10"></b-form-input>
      </b-input-group>
      <label for="nl3">Your favorite number is {{ numberLine3 }}.</label>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'NumberLines',
  data() {
    return {
      numberLine1: 0,
      numberLine2: 7,
      NL2Result: this.isEqual(this.numberLine2, 4),
      numberLine3: 0,
    };
  },
  methods: {
    isEqual(submission, answer) {
      let result;
      if (submission === answer) {
        result = 'Yes! Good Job.';
      } else {
        result = 'Not Quite...';
      }
      return result;
    },
  },
};
</script>
