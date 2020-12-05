<template>
    <div>
        <!-- :state="searchState" -->
        <b-form-input
            v-model="searchValue"
            type="search"
            placeholder="Search countries"
            aria-describedby="input-live-help input-live-feedback"
            trim
        ></b-form-input>
        <b-button @click="search">Search</b-button>
        <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
        </b-form-invalid-feedback>
        <b-form-text id="input-live-help">Your full name.</b-form-text>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: 'Search',
            searchValue: '',
            items: [{}]
        };
    },
    methods: {
        search() {
            this.items = [
                ...this.items,
                { countryName: 'Austria', activeCases: 50000, deaths: 1000, recoveries: 40000 }
            ];
        }
    },
    computed: {
        // searchState() {
        //     return this.searchValue
        // },
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
