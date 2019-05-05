<template>
  <div class="pagination">
    <div class="pagination-number" v-for="p in (totalPage)" @click="handleClickOnItem(p-1)">{{p}}</div>
  </div>
</template>

<script>
  export default {
    props: {totalPage: {
      type: Number
      }},
    name: "userListPagination",
    methods: {
      handleClickOnItem(pageNumber) {
        this.$emit('changePagination', pageNumber)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    width: 450px;
    justify-content: space-between;
    cursor: pointer;
    height: 40px;
  }
  .pagination-number{
    padding: 15px;
    background: #ff87af;
  }

</style>
