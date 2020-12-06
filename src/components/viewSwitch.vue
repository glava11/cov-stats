<template>
    <div>
        <!-- TODO icon based on state (opposite of selected) -->
        <button
            class="btn btn-sm btn-outline-secondary d-flex justify-content-around"
            @click="toggleView"
        >
            <b-icon icon="bar-chart-line-fill"></b-icon>
            <span> / </span>
            <b-icon icon="table"></b-icon>
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
    computed: {}
});
</script>

<style scoped lang="scss">
button {
    min-width: 5rem;
}
</style>
