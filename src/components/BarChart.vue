<script lang="ts">
// import VueCharts from 'vue-chartjs'
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartdata', 'options'],
    computed: {
        data(): Record<string, Array<any>> {
            const data = this.$store.getters.getChartData;
            console.log('<BARCHART> chartData: ', data);
            return data;
        }
    },
    mounted: function() {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: this.data.labels,
            datasets: [
                {
                    label: 'Confirmed',
                    backgroundColor: '#d04040',
                    data: this.data.confirmed
                    // data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 1110]
                },
                {
                    label: 'Deaths',
                    backgroundColor: '#2c3e50',
                    data: this.data.deaths
                    // data: [40, 20, 12, 39, 1, 40, 39, 80, 40, 20, 12, 11]
                },
                {
                    label: 'Recovered',
                    backgroundColor: '#28a745',
                    data: this.data.recovered
                    // data: [40, 20, 12, 39, 15, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        });
    }
};
</script>
<style scoped lang="scss"></style>
