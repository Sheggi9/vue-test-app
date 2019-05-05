import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const state = {
    count: 3,
    count1: 5,
    postsAll: [],
    users: []
}

const actions = {
  getPostAll({commit}) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.data)
      .then(postsAll => {
        // console.log(postsAll)
        commit('SET_POSTSALL', postsAll)
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  getPostAll2({commit}) {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(r => r.data)
      .then(users => {
        // console.log(users)
        commit('SET_USERS', users)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

const mutations = {
  SET_POSTSALL(state, postsAll) {
    // console.log(postsAll)
    state.postsAll = postsAll
  },
  SET_USERS(state, users) {
    state.users = users
  }
}

const getters = {}



export default new Vuex.Store({state, mutations, getters, actions})

