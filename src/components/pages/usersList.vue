<template>
  <div class="users-list">
    <h1 class="users-list__title">Users list</h1>
    <users-list-viewer :users="newUsersVisible"/>
    <user-list-pagination @changePagination="handlePaginationChange" @changePaginationScroll="handlePaginationChangeScroll" :totalPage="totalPagesPagination"/>
  </div>

</template>

<script>
  import UsersListViewer from "@/components/usersListViewer";
  import UserListPagination from "@/components/userListPagination";

  export default {
    name: "usersList",
    components: {UserListPagination, UsersListViewer},
    data() {
      return {
        newUsers: [],
        posts: "https://jsonplaceholder.typicode.com/posts",
        page: 0,
        step: 33,
        AutoScrollStep: 1
      }
    },
    methods: {
      getAllPosts() {
        this.$http.get(this.posts).then(response => {
            console.log(response.body)
            response.body.forEach((item, index) => {
              const indexedItem = {
                ...item,
                title: (index + 1) + ' ' + item.title
              }
              this.newUsers.push(indexedItem)
            })
          },
          response => {
            console.log('error')
          }
        )
      },
      handlePaginationChange(pageNumber) {
        this.page = pageNumber
      },
      handlePaginationChangeScroll(){
        this.AutoScrollStep += 1;
        console.log(AutoScrollStep)
      }
    },
    mounted() {
      this.getAllPosts()
    },
    computed: {
      newUsersVisible () {
        return this.newUsers.slice(this.page * this.step, (this.step * (this.page + this.AutoScrollStep)))
      },
      totalPagesPagination () {
        return Math.ceil(Number(this.newUsers.length) / this.step)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .users-list__title {
    padding: 20px;
    flex: 0 0 auto;
  }

  .users-list {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
