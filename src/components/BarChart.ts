// <script lang="ts">
import VueCharts from 'vue-chartjs';
import { Component, Mixins } from 'vue-property-decorator';
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

@Component({
    extends: VueCharts.Bar, // this is important to add the functionality to your component
    mixins: [VueCharts.mixins.reactiveProp]
})
export default class BarChart extends Mixins(Mixins.reactiveProp, Bar) {
    mounted() {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets: [
                {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }
            ]
        });
    }
}

// export default {
//     extends: Bar,
//     mixins: [mixins.reactiveProp],
//     props: ['chartData'],
//     computed: {},
//     mounted: function() {
//         console.log('<BARCHART> chartData: ', this.chartData);
//         // Overwriting base render method with actual data.
//         this.renderChart(this.chartData);
//     }
// };
// </script>
