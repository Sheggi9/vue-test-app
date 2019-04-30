import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count: 3,
    todos:[
      {id: 1, text: '1', done: true},
      {id: 2, text: '2', done: false}
    ]
  },
  mutations:{
    // inc(state){
    inc(state, n){
      // state.count ++
      state.count += n
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('inc', 3)
      }, 1000)
    }
  }
})
