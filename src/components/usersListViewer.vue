<template>
  <ul class="users__list">
    <li class="users__item" v-for="user in users">
      <h4 class="users__item-title">{{user.title}}</h4>
      <div class="users__item-description">{{user.body}}</div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      users: Array,
    },
    name: "usersListViewer"
  }
</script>

<style lang="scss" scoped>
  .users__list{
    overflow-y: scroll;
    flex: 1 0 auto;
    height: 100px;
  }
  .users__item{
    margin: 20px;
    max-width: 50%;
  }
</style>
