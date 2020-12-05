<template>
    <div id="app">
        <header>
            <div class="topbar"></div>
            <div class="hero">
                <img alt="Vue logo" src="./assets/logo.png" />
            </div>
        </header>
        <main>
            <Search />
            <ViewSwitch />
            <Table msg="Welcome to Your Vue.js + TypeScript App" />
            <Chart />
        </main>
        <footer></footer>
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
    }
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    header {
        .topbar {
            height: 4rem;
            width: 100%;
            background-color: aquamarine;
        }
        .hero {
        }
    }
    footer {
        height: 4rem;
        width: 100%;
        background-color: dodgerblue;
    }
}
</style>
