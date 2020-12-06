<template>
    <BarChart />
</template>

<script lang="ts">
import Vue from 'vue';
import BarChart from './BarChart.vue';

export default Vue.extend({
    components: { BarChart },
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
