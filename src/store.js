import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        Loaded: false,
        clickedTimes: 0
    },
    actions: {
        GetUser({ commit, dispatch }) {
            axios.get('https://randomuser.me/api/')
                .then(function (res) {
                    // handle success
                    console.log(res.data.results[0]);
                    commit('MyMutations')
                    // dispatch('AnotherActions')
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        // AnotherActions() {
        //     console.log('Another Actions run!');
        // },
        ClickedActions({ commit }, payload) {
            commit('addTimes', payload)
        }
    },
    mutations: {
        MyMutations(state) {
            console.log('MyMutations run!');
            state.Loaded = true;
        },
        SetFalse(state) {
            state.Loaded = false;
        },
        addTimes(state, payload) {
            state.clickedTimes = state.clickedTimes + payload.count;
        }

    }
})

export default store;