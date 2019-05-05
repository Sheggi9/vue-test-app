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
      <zzzz :users="users"/>
    </ul>

    <hr>
    <div>
      <ul>
        <contact-list-articles v-for="post in visibleArticles" :post="post"/>
      </ul>
      <contact-list-articles-pagination @changePagination="currentPageNumber" :totalPages="totalPages"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ContactListUsers from "@/components/contactListUsers";
  import ContactListArticles from "@/components/contactListArticles";
  import Zzzz from "@/components/zzzz";
  import ContactListArticlesPagination from "@/components/contactListArticlesPagination";

  export default {
    name: "contact",
    components: {ContactListArticlesPagination, Zzzz, ContactListArticles, ContactListUsers},
    data() {
      return {
        page: 0,
        step: 10
      }
    },
    computed: {
      ...mapState({
        countStoreOld: state => state.count,
        count: state => state.count1,
        postsAll: state => state.postsAll,
        users: state => state.users
      }),
      totalPages() {
        return (Math.ceil(Number(this.postsAll.length) / this.step))
      },
      visibleArticles(){
        return this.postsAll.slice(this.page * this.step, (this.page + 1) * this.step)
      }
    },
    methods: {
      currentPageNumber(pageNumber) {
        this.page = pageNumber
      }
    },
    mounted() {
      this.$store.dispatch('getPostAll');
      this.$store.dispatch('getPostAll2')
    }
  }
</script>

<style lang="scss" scoped>
  .contact__title {
    margin: 20px;
  }
</style>
