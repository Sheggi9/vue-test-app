<template>
  <div @scroll="test($event)" class="wrap">
    <ul class="users__list">
      <li class="users__item" v-for="(user, index) in users">
        <h4 class="users__item-title">{{user.title}}</h4>
        <div class="users__item-description">{{user.body}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      users: Array,
    },
    data() {
      return{
        load: true
      }
    },
    methods: {
      test(event) {
        let wrapper = event.target,
          list = wrapper.firstElementChild
        // console.log(wrapper)
        // console.log(list)
        let scrollTop = wrapper.scrollTop,
          wrapperHeight = wrapper.offsetHeight,
          listHeight = list.offsetHeight
        let diffHeight = listHeight - wrapperHeight
        console.log(diffHeight, scrollTop)
        if(diffHeight <= scrollTop && this.load) {
          // this.AutoScrollStep = this.AutoScrollStep + 1
          console.log("hi")
          this.load = false
          this.$emit('changePaginationScroll')
        } else {
          this.load = true
        }
      }
    },
    name: "usersListViewer",
  }
</script>

<style lang="scss" scoped>
  .wrap {
    overflow-y: scroll;
    /*flex: 1 0 auto;*/
    height: 400px;
  }

  .users__item {
    margin: 20px;
    max-width: 50%;
  }
</style>
