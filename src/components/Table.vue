<template>
  <div>
    <b-table striped hover :items="items" :busy="isBusy" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
    <b-button @click="toggleBusy">Toggle Busy State</b-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    msg: String
  },
  data() {
    return {
      name: "Table",
      isBusy: false,
      items: [
        { countryName: "Austria", activeCases: 50000, deaths: 1000, recoveries: 40000 },
        { countryName: "Germany", activeCases: 70000, deaths: 1500, recoveries: 11000 },
        { countryName: "Italy", activeCases: 150000, deaths: 5000, recoveries: 23000 },
        { countryName: "Swizerland", activeCases: 40000, deaths: 750, recoveries: 50000 },
        { countryName: "Slovenia", activeCases: 30000, deaths: 500, recoveries: 20000 },
        { countryName: "Hungary", activeCases: 45000, deaths: 1200, recoveries: 30000 }
      ]
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
