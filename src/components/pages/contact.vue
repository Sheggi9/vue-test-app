<template>
  <div class="cb">
    <h1 class="contact__title">Contsct</h1>
    <div>{{ countStoreOld }}</div>
    <div id="example">{{ count }}</div>

    <hr>
    <ul>
      <contact-list-users v-for="(user, index) in users" :key="index" :user="user" :id="'user-' + index"/>
    </ul>

    <hr>
    <ul>
      <zzzz :users="users" />
    </ul>

    <hr>
    <ul>
      <li v-for="post in postsAll">
        <contact-list-articles :post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ContactListUsers from "@/components/contactListUsers";
  import ContactListArticles from "@/components/contactListArticles";
  import Zzzz from "@/components/zzzz";

  export default {
    name: "contact",
    components: {Zzzz, ContactListArticles, ContactListUsers},
    computed: {
      ...mapState({
        countStoreOld: state => state.count,
        count: state => state.count1,
        postsAll: state => state.postsAll,
        users: state => state.users
      })
    },
    mounted() {
      this.$store.dispatch('getPostAll'),
      this.$store.dispatch('getPostAll2')
    }
  }
</script>

<style lang="scss" scoped>
  .contact__title {
    margin: 20px;
  }
</style>
