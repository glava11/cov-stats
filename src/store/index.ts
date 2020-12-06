import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { TimePlugin } from 'bootstrap-vue';

Vue.use(Vuex);
axios.defaults.baseURL = 'https://api.covid19api.com';

export default new Vuex.Store({
    state: {
        view: 'table',
        searchString: String,
        countriesData: [],
        // {
        //     country: String,
        //     confirmed: Number,
        //     deaths: Number,
        //     recovered: Number
        // }
        fetchTime: new Date(),
        isLoading: true,
        count: 1
    },
    getters: {
        getSummaryData: state => {
            console.log('<GETTER> getSummaryData: ', state.countriesData);
            return state.countriesData;
        },
        getLoadingStatus: state => {
            console.log('<GETTER> getLoadingStatus: ', state.isLoading);
            return state.isLoading;
        },
        getFetchTime: state => {
            console.log('<GETTER> getFetchTime: ', state.fetchTime);
            return state.fetchTime;
        }
    },
    mutations: {
        toggleView(state): void {
            state.view = state.view === 'table' ? 'chart' : 'table';
            console.log('<MUTATION> Toggling the View to: ', state.view);
        },
        setSummaryData(state, data): void {
            state.countriesData = data;
        },
        setLoading(state, status): void {
            state.isLoading = status;
            console.log('loading status: ', status);
        },
        setFetchTime(state, time): void {
            state.fetchTime = time;
            console.log('fetchTime: ', time);
        }
    },
    actions: {
        toggleView(context): void {
            if (context.state.count) {
                context.commit('toggleView');
                console.log('<ACTION> Commiting mutation');
            }
        },
        async getSummaryData(context): Promise<any> {
            context.commit('setLoading', true);
            await axios
                .get('/summary')
                .then(res => {
                    console.log('Here is what I got: ', res);
                    if (res && res.data) {
                        const countries: Array<any> = res.data.Countries.map((c: any) => {
                            return {
                                country: c.Country,
                                confirmed: c.TotalConfirmed,
                                deaths: c.TotalDeaths,
                                recovered: c.TotalRecovered
                            };
                        });
                        const total: Record<string, any> = {
                            country: 'Total',
                            confirmed: res.data.Global.TotalConfirmed,
                            deaths: res.data.Global.TotalDeaths,
                            recovered: res.data.Global.TotalRecovered
                        };
                        const time = new Date(res.data.Date);
                        countries.push(total);
                        // console.log('destructured: ', countries);
                        context.commit('setSummaryData', countries);
                        context.commit('setFetchTime', time);
                        context.commit('setLoading', false);
                    }
                })
                .catch(err => console.error('Something went wrong: ', err));
        }
    }
});
