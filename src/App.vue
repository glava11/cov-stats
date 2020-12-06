<template>
    <div id="app">
        <header class="header">
            <div class="topbar bg-dark">
                <div class="container">
                    <h4 class="text-left text-light pt-2">cov-stats</h4>
                </div>
            </div>
        </header>
        <main class="container">
            <div class="jumbo d-flex justify-content-strech align-items-center p-4">
                <h2 class="col-md-6 display-4">Get the latest global COVID19 data</h2>
                <img
                    class="col-md-6 py-5"
                    alt="Photo by CDC from Pexels"
                    title="Photo by CDC from Pexels"
                    src="./assets/virus.jpg"
                />
            </div>
            <div class="d-flex justify-content-between align-items-center py-4">
                <Search />
                <ViewSwitch />
            </div>
            <Table />
            <Chart />
        </main>
        <footer class="topbar bg-dark">
            <div class="container d-flex justify-content-between">
                <div class="text-left text-light mt-3">
                    Made by Drazen as an assesment task for
                    <a href="https://www.helu.io/">helu.io</a>
                </div>
                <div class="text-left text-light mt-3">
                    Data collected from
                    <a href="https://covid19api.com/">COVID19 API</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from './components/Search.vue';
import ViewSwitch from './components/viewSwitch.vue';
import Table from './components/Table.vue';
import Chart from './components/Chart.vue';

export default Vue.extend({
    name: 'App',
    components: {
        Search,
        ViewSwitch,
        Table,
        Chart
    },
    computed: {
        // ...mapState(['data'])
        // summary() {
        //     return this.$store.state.data;
        // }
    },
    methods: {
        // getSummary(): any {
        //     return mapState;
        // }
    },
    mounted() {
        this.$store.dispatch('getSummaryData');
    }
});
</script>

<style lang="scss">
@import './assets/custom.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    header {
        .topbar {
            height: 3rem;
            width: 100%;
            background-color: aquamarine;
        }
    }
    main {
        min-height: calc(100vh - 6rem);
        .jumbo {
            width: 100%;
            // align-items: center;
        }
    }
    footer {
        height: 3rem;
        width: 100%;
        background-color: dodgerblue;
    }
}
</style>
