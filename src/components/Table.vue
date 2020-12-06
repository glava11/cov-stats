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
        };
    },
    methods: {},
    computed: {
        isBusy(): boolean {
            const loadingState = this.$store.getters.getLoadingStatus;
            console.log('<TABLE> getLoadingState: ', loadingState);
            return loadingState;
        },
        items(): Array<Record<string, any>> {
            const data = this.$store.getters.getCountriesData;
            return data;
        },
        fetchTime(): string {
            const time = this.$store.getters.getFetchTime;
            return time;
        }
    }
});
</script>
<style scoped lang="scss">
// table {
//     td.table-align-right {
//         text-align: right !important;
//     }
// }
</style>
