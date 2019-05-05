<template>
  <li>
    <div @click="toggleItem">
      <div class="id">{{post.id}}</div>
      <div class="title">{{post.title}}</div>
      <div class="body" v-if="toggled">{{post.body}}</div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object
      }
    },
    name: "contactListArticles",
    methods: {
      toggleItem: function() {
        this.toggled = !this.toggled;
      }
    },
    data() {
      return {
        toggled: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
