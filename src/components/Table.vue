<template>
    <div>
        <!-- <pre>busy: {{ isBusy }}</pre> -->
        <b-table
            sticky-header
            striped
            hover
            :items="items"
            :fields="fields"
            :busy="isBusy || !items.length"
            class="mt-3"
            outlined
            caption-top
        >
            <!-- <template v-slot:cell(confirmed)="data">
                <div class="text-right">{{ data.value }}</div>
            </template> -->
            <template #table-caption>
                <span>Last update: {{ fetchTime }}</span
                ><br />
                <span>Numbers are total sum of cases since day 1 </span>
            </template>
            <template #table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
        <!-- <b-button @click="toggleBusy">Toggle Busy State</b-button> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { mapState } from 'vuex';

export default Vue.extend({
    props: {
        covData: []
    },
    data() {
        return {
            name: 'Table',
            fields: [
                {
                    key: 'country',
                    sortable: false
                },
                {
                    key: 'confirmed',
                    sortable: true
                },
                {
                    key: 'deaths',
                    sortable: true
                },
                {
                    key: 'recovered',
                    sortable: true
                }
            ]
            // isBusy: this.$store.getters.getLoadingState,
            // items: this.$store.getters.getSummaryData
            //     { countryName: 'Austria', activeCases: 50000, deaths: 1000, recoveries: 40000 },
            //     { countryName: 'Germany', activeCases: 70000, deaths: 1500, recoveries: 11000 },
            //     { countryName: 'Italy', activeCases: 150000, deaths: 5000, recoveries: 23000 },
            //     { countryName: 'Swizerland', activeCases: 40000, deaths: 750, recoveries: 50000 },
            //     { countryName: 'Slovenia', activeCases: 30000, deaths: 500, recoveries: 20000 },
            //     { countryName: 'Hungary', activeCases: 45000, deaths: 1200, recoveries: 30000 }
            // ]
        };
    },
    methods: {
        init() {
            // this.items = this.$store.getters.getSummaryData;
            // this.isBusy = this.$store.getters.getLoadingState;
        }
        // toggleBusy() {
        //     this.isBusy = !this.isBusy;
        // },
        // async getSummary() {
        //     // return this.$store.state.data;
        //     const data = await this.$store.getters.getSummaryData;
        //     data.then((data: any) => {
        //         this.items = data;
        //     });
        // }
    },
    computed: {
        isBusy(): boolean {
            const loadingState = this.$store.getters.getLoadingStatus;
            console.log('<TABLE> getLoadingState: ', loadingState);
            return loadingState;
        },
        // getSummary() {
        //     // return this.$store.state.data;
        //     this.$store.getters.getSummaryData.then((data: any) => {
        //         return (this.items = data);
        //     });
        // }
        items(): Array<Record<string, any>> {
            // return this.$store.getters.getSummaryData.then((data: any) => {
            //     });
            const data = this.$store.getters.getSummaryData;
            return data;
        },
        fetchTime(): string {
            const time = this.$store.getters.getFetchTime;
            return time;
        }
        // [...mapState(['data'])];
        // { countryName: 'Austria', activeCases: 50000, deaths: 1000, recoveries: 40000 },
        // { countryName: 'Germany', activeCases: 70000, deaths: 1500, recoveries: 11000 },
        // { countryName: 'Italy', activeCases: 150000, deaths: 5000, recoveries: 23000 },
        // { countryName: 'Swizerland', activeCases: 40000, deaths: 750, recoveries: 50000 },
        // { countryName: 'Slovenia', activeCases: 30000, deaths: 500, recoveries: 20000 },
        // { countryName: 'Hungary', activeCases: 45000, deaths: 1200, recoveries: 30000 }
        // ...mapState(['data'])
        // summary() {
        //     return this.$store.state.data;
        // }
    },
    mounted() {
        // this.$store.dispatch('getSummaryData');
        // console.log('<TABLE MOUNTED> getLoadingState: ', this.$store.getters.getLoadingState);
        // this.init();
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
    td.table-align-right {
        text-align: right !important;
    }
}
</style>
