import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        view: 'table',
        searchString: '',
        data: {
            countryName: String,
            activeCases: Number,
            deaths: Number,
            recoveries: Number
        },
        isLoading: true,
        count: 1
    },
    getters: {},
    mutations: {
        toggleView(state): void {
            state.view = state.view === 'table' ? 'chart' : 'table';
            console.log('<MUTATION> Toggling the View to: ', state.view);
        }
    },
    actions: {
        toggleView(context): void {
            if (context.state.count) {
                context.commit('toggleView');
                console.log('<ACTION> Commiting mutation');
            }
        }
    }
});
