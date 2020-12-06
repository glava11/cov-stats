<template>
    <div>
        <!-- TODO icon based on state (opposite of selected) d-flex justify-content-around -->
        <button class="btn btn-outline-secondary " @click="toggleView">
            <b-icon v-show="selectedView == 'table'" icon="bar-chart-line-fill"></b-icon>
            <b-icon v-show="selectedView == 'chart'" icon="table"></b-icon>
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            activeView: ''
        };
    },
    methods: {
        toggleView(): void {
            // this.$store.commit('toggleView'); << directly commiting mutation ??
            this.$store.dispatch('toggleView');
            console.log('<VIEW SWITCH> active view: ', this.$store.state.view);
        }
    },
    computed: {
        selectedView(): string {
            const selectedView = this.$store.getters.getSelectedView;
            console.log('<TABLE> getSelectedView: ', selectedView);
            return selectedView;
        }
    }
});
</script>

<style scoped lang="scss">
button {
    min-width: 5rem;
}
</style>
