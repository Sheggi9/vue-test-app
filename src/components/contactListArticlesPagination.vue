<template>
  <ul class="cont-list-articles-pag">
    <li class="cont-list-articles-pag__item" v-for="p in totalPages" @click="handleClickOnItem(p-1)">{{p}}</li>
  </ul>
</template>

<script>
  export default {
    name: "contactListArticlesPagination",
    props:{
      totalPages:{
        type: Number
      }
    },
    methods: {
      handleClickOnItem(pageNumber) {
        this.$emit('changePagination', pageNumber)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cont-list-articles-pag {
    display: flex;
    &__item{
      padding: 10px 15px;
      background: #ff726d;
      margin: 5px;
      cursor: pointer;
    }
  }
</style>
