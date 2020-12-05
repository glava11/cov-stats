<template>
    <div id="app">
        <header class="header">
            <div class="topbar bg-dark"></div>
        </header>
        <main class="container">
            <div class="jumbo d-flex justify-content-strech align-items-center p-4">
                <h2 class="col-md-6 display-4">Hero text</h2>
                <img class="col-md-4" alt="Vue logo" src="./assets/logo.png" />
            </div>
            <div class="d-flex justify-content-between align-items-center py-4">
                <Search />
                <ViewSwitch />
            </div>
            <Table msg="Welcome to Your Vue.js + TypeScript App" />
            <Chart />
        </main>
        <footer class="topbar bg-dark"></footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import './assets/custom.scss';
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
    }
});
</script>

<style lang="scss">
@import './assets/custom.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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
            align-items: center;
        }
    }
    footer {
        height: 3rem;
        width: 100%;
        background-color: dodgerblue;
    }
}
</style>
