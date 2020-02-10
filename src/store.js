import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        Loaded: false
    },
    actions: {
        GetUser({ commit, dispatch }) {
            axios.get('https://randomuser.me/api/')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    commit('MyMutations')
                    dispatch('AnotherActions')
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        AnotherActions() {
            console.log('Another Actions run!');
        }
    },
    mutations: {
        MyMutations(state) {
            console.log('MyMutations run!');
            state.Loaded = true;
        },
        SetFalse(state) {
            state.Loaded = false;
        }
    }
})

export default store;
