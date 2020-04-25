<template>
  <b-container class="pl-3 pr-3">
    <h3>Let's Use Some Number Lines</h3>
    <b-container class="text-left pt-4 pb-4">
      <label class="text-left" for="nl1"
        ><h4>Choose your favorite number on the number line</h4></label
      >
      <b-input-group class="pb-2" prepend="0" append="10">
        <b-form-input id="nl1" v-model="numberLine1" type="range" min="0" max="10"></b-form-input>
      </b-input-group>
      <label for="nl1">Your favorite number is {{ numberLine1 }}.</label>
      <zingchart :data="chartData"></zingchart>
    </b-container>
    <b-input-group class="pb-4 pt-4" prepend="0" append="10">
      <b-form-input v-model="numberLine2" type="range" min="0" max="10"></b-form-input>
    </b-input-group>
    <b-input-group prepend="0" append="10">
      <b-form-input v-model="numberLine3" type="range" min="0" max="10"></b-form-input>
    </b-input-group>
  </b-container>
</template>

<script>
export default {
  name: 'NumberLines',
  data() {
    return {
      numberLine1: 0,
      numberLine2: 0,
      numberLine3: 0,
      chartData: {
        type: 'line',
        series: [
          {
            values: [1],
          },
        ],
      },
    };
  },
};
</script>
