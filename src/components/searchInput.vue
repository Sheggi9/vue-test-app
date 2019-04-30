<template>
  <input class="search-input" type="text" placeholder="Hi">
</template>

<script>
    export default {
        name: "searchInput"
    }
</script>

<style scoped>
  .search-input{
    width: 100%;
    height: 28px;
    margin: 0 5%;
    padding: 0 20px;
    border: 2px outset #ffc5f2;
    border-radius: 16px;
    outline: none;
  }
  .search-input::placeholder{
    color: #fa85d8;
  }
</style>
