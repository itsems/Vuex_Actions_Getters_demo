import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        Loaded: false,
        clickedTimes: 0,
        users: {}
    },
    getters:
    {
        FemaleNum(state) {
            return state.users.filter(item => item.gender == 'female').length;
        },
        MaleNum(state, getters) {
            return state.users.length - getters.FemaleNum
        }
    },
    actions: {
        GetUser({ commit, dispatch }) {
            axios.get('https://randomuser.me/api/?results=5')
                .then(function (res) {
                    var data = res.data.results
                    commit('dataLoaded')
                    commit('setUserInfo', data)
                })
        },
        ClickedActions({ commit }, payload) {
            commit('addTimes', payload)
        }
    },
    mutations: {
        dataLoaded(state) {
            state.Loaded = true;
        },
        SetFalse(state) {
            state.Loaded = false;
        },
        addTimes(state, payload) {
            state.clickedTimes = state.clickedTimes + payload.count;
        },
        setUserInfo(state, payload) {
            state.users = payload
        }
    }
})
export default store;