import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        chartData: [],
        fetchTime: new Date(),
        isLoading: true,
        count: 1
    },
    getters: {
        getCountriesData: state => {
            console.log('<GETTER> getSummaryData: ', state.countriesData);
            return state.countriesData;
        },
        getChartData: state => {
            console.log('<GETTER> getChartData: ', state.chartData);
            return state.chartData;
        },
        getLoadingStatus: state => {
            console.log('<GETTER> getLoadingStatus: ', state.isLoading);
            return state.isLoading;
        },
        getFetchTime: state => {
            console.log('<GETTER> getFetchTime: ', state.fetchTime);
            return state.fetchTime;
        },
        getSelectedView: state => {
            console.log('<GETTER> getSelectedView: ', state.view);
            return state.view;
        }
    },
    mutations: {
        toggleView(state): void {
            state.view = state.view === 'table' ? 'chart' : 'table';
            console.log('<MUTATION> Toggling the View to: ', state.view);
        },
        setCountriesData(state, data): void {
            state.countriesData = data;
        },
        setChartData(state, data): void {
            state.chartData = data;
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
                        // Format countries summary data for table
                        const countriesData: Array<Record<string, any>> = res.data.Countries.map(
                            (c: any) => {
                                return {
                                    country: c.Country,
                                    confirmed: c.TotalConfirmed,
                                    deaths: c.TotalDeaths,
                                    recovered: c.TotalRecovered
                                };
                            }
                        );
                        const total: Record<string, any> = {
                            country: 'Total',
                            confirmed: res.data.Global.TotalConfirmed,
                            deaths: res.data.Global.TotalDeaths,
                            recovered: res.data.Global.TotalRecovered
                        };
                        // append total/global to array
                        countriesData.push(total);
                        // Format date-time
                        const time = new Date(res.data.Date);
                        // REDUCE !!! and Format chart data
                        const countriesReduced = countriesData.slice(0, 25);
                        const chartData: Record<string, any> = {
                            labels: [],
                            confirmed: [],
                            deaths: [],
                            recovered: []
                        };
                        countriesReduced.map((c: any) => {
                            chartData.labels.push(c.country);
                            chartData.confirmed.push(c.confirmed);
                            chartData.deaths.push(c.deaths);
                            chartData.recovered.push(c.recovered);
                        });
                        // commit to state
                        console.log('chartData: ', chartData);
                        context.commit('setCountriesData', countriesData);
                        context.commit('setChartData', chartData);
                        context.commit('setFetchTime', time);
                        context.commit('setLoading', false);
                    }
                })
                .catch(err => console.error('Something went wrong: ', err));
        }
    }
});
