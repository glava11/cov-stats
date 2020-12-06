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
                <h1 class="col-md-6 heading">Get the latest global COVID19 data</h1>
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
            <Table v-show="selectedView == 'table'" />
            <Chart v-show="selectedView == 'chart'" />
        </main>
        <footer class="bg-dark">
            <div class="container d-flex justify-content-between">
                <div class="text-left text-light mt-3 col-12 col-md-4">
                    Made with
                    <a href="https://vuejs.org/">Vue.js </a>
                    and
                    <a href="https://vuejs.org/">Bootstrap </a>
                    by Drazen as an assesment task for
                    <a href="https://www.helu.io/">helu.io</a>
                </div>
                <div class="text-left text-light mt-3 col-12 col-md-4">
                    Data collected from
                    <a href="https://covid19api.com/">COVID19 API</a>
                    sourced from
                    <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE</a>
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
    data() {
        return {};
    },
    computed: {
        selectedView(): string {
            const selectedView = this.$store.getters.getSelectedView;
            console.log('<TABLE> getSelectedView: ', selectedView);
            return selectedView;
        }
        // ...mapState(['data'])
        // summary() {
        //     return this.$store.state.data;
        // }
    },
    methods: {},
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
        min-height: calc(100vh - 8rem);
        padding-bottom: 1rem;
        .jumbo {
            width: 100%;
            .heading {
                font-size: 3rem;
            }
        }
    }
    footer {
        height: auto;
        min-height: 5rem;
        width: 100%;
        background-color: dodgerblue;
    }
    @media (max-width: 790px) {
        main {
            .jumbo {
                flex-direction: column-reverse;
                .heading {
                    font-size: 1.5rem;
                }
            }
        }
        footer {
            .container {
                flex-direction: column;
            }
        }
    }
}
</style>
