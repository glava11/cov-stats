<template>
    <div>
        here goes the chart
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            name: 'Chart',
            countryName: '',
            activeCases: 0,
            deathCases: 0,
            recoveries: 0,
            chartValues: [{}]
        };
    },
    methods: {},
    computed: {}
});
</script>

<style scoped lang="scss"></style>
