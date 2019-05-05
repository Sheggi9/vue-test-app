<template>
  <div>
    <h1 class="articles__title">Articles</h1>
    <div>Count</div>
    <div>{{ count }}</div>
    <button v-on:click="increment">Выполнить через mutations синхронно (+ 10)</button>
    <button v-on:click="incrementOne">Выполнить асинхронно через actions через 1 сек (+ 3)</button>


    <hr>
    <div>Todos</div>
    <ul>
      <li v-for="todo in todos">{{todo}}</li>
    </ul>

    <hr>
    <div>Todos done</div>
    <ul>
      <li>{{doneTodos}}</li>
    </ul>

    <hr>
    <div>Todos done lenght</div>
    <ul>
      <li>{{doneTodosCount}}</li>
    </ul>

    <!--<hr>-->
    <!--<div>Todos get by id 2</div>-->
    <!--<ul>-->
      <!--<li>{{getTodoById(2)}}</li>-->
    <!--</ul>-->
  </div>

</template>

<script>
  export default {
    name: "articles",
    data() {
      return {
      }
    },
    methods: {
      increment: function () {
        // this.$store.commit('inc');
        this.$store.commit('inc', 10);
      },
      incrementOne: function () {
        this.$store.dispatch('incrementAsync');
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      todos() {
        return this.$store.state.todos
      },
      doneTodos () {
        return this.$store.getters.doneTodos
      },
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      },
      getTodoById () {
        return this.$store.getters.getTodoById
      }
    }
  }

</script>

<style lang="scss" scoped>
  .articles__title{
    margin: 20px;
  }
</style>
