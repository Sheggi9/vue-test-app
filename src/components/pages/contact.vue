<template>
  <div class="cb">
    <h1 class="contact__title">Contsct</h1>
    <div>{{ countStoreOld }}</div>
    <div id="example">{{ count }}</div>

    <hr>
    <ul><contact-list-users v-for="(user, index) in users" :key="index" :user="user" :id="'user-' + index"/></ul>

    <hr>
    <ul><zzzz :users="users"/></ul>

    <hr>
    <div>
      <ul><contact-list-articles v-for="(post, index) in visibleArticles" :key="index" :post="post"/></ul>
      <contact-list-articles-pagination @changePagination="currentPageNumber" :totalPages="totalPages"/>
    </div>

    <div >
      <first-active-div :items="activeId"/>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ContactListUsers from "@/components/contactListUsers";
  import ContactListArticles from "@/components/contactListArticles";
  import Zzzz from "@/components/zzzz";
  import ContactListArticlesPagination from "@/components/contactListArticlesPagination";
  import FirstActiveDiv from "@/components/firstActiveDiv";

  export default {
    name: "contact",
    components: {FirstActiveDiv, ContactListArticlesPagination, Zzzz, ContactListArticles, ContactListUsers},
    data() {
      return {
        page: 0,
        step: 5,
        AutoScrollStep: 1
      }
    },
    computed: {
      ...mapState({
        countStoreOld: state => state.count,
        count: state => state.count1,
        postsAll: state => state.postsAll,
        users: state => state.users,
        activeId: state => state.activeId
      }),
      totalPages() {
        return (Math.ceil(Number(this.postsAll.length) / this.step))
      },
      visibleArticles(){
        return this.postsAll.slice(this.page * this.step, (this.page + this.AutoScrollStep) * this.step)
      }
    },
    methods: {
      currentPageNumber(pageNumber) {
        this.page = pageNumber
      }
    },
    mounted() {
      this.$store.dispatch('getPostAll');
      this.$store.dispatch('getUsersAll')
    }
  }
</script>

<style lang="scss" scoped>
  .contact__title {
    margin: 20px;
  }

</style>
