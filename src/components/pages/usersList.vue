<template>
  <div class="users-list">
    <h1 class="users-list__title">Users list</h1>
    <users-list-viewer :users="newUsers"/>
  </div>

</template>

<script>
  import UsersListViewer from "@/components/usersListViewer";

  export default {
    name: "usersList",
    components: {UsersListViewer},
    data () {
      return {
        newUsers: [],
        posts: "https://jsonplaceholder.typicode.com/posts"
      }
    },
    methods: {
      getAllPosts() {
        // this.$http.get(this.posts).then(response => {
        //     console.log(response.body)
        //   },
        //   response => {
        //     console.log('error')
        //   }
        // )

        this.$http.get(this.posts)
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            this.newUsers.splice(0);
            data.forEach((item) => this.newUsers.push(item))
          }).catch(error => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.getAllPosts()
    }
  }
</script>

<style lang="scss" scoped>
  .users-list__title{
    padding: 20px;
    flex: 0 0 auto;
  }
  .users-list{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
