<template>
    <BarChart :chartData="datacollection" />
</template>

<script lang="ts">
import Vue from 'vue';
import BarChart from './BarChart.vue';

export default Vue.extend({
    components: { BarChart },
    data() {
        return {
            name: 'Chart',
            datacollection: {}
        };
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: this.data.labels,
                datasets: [
                    {
                        label: 'Confirmed',
                        backgroundColor: '#d04040',
                        data: this.data.confirmed
                    },
                    {
                        label: 'Deaths',
                        backgroundColor: '#2c3e50',
                        data: this.data.deaths
                    },
                    {
                        label: 'Recovered',
                        backgroundColor: '#28a745',
                        data: this.data.recovered
                    }
                ]
                // datasets: [
                //     {
                //         label: 'Data One',
                //         backgroundColor: '#f87979',
                //         data: [5, 14, 7, 9]
                //     },
                //     {
                //         label: 'Data One',
                //         backgroundColor: '#f87979',
                //         data: [13, 17, 11, 14]
                //     }
                // ]
            };
        }
    },
    computed: {
        data(): Record<string, any> {
            const data = this.$store.getters.getChartData;
            console.log('<BARCHART> chartData: ', data);
            return data;
        }
    },
    mounted() {
        this.fillData();
    }
});
</script>

<style scoped lang="scss"></style>
