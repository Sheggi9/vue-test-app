<template>
  <div class="qqq">
    <li v-for="(user, index ) in users" :key="index" @click="toggleItem(index)" class="user-list">
      <div class="user-top-menu">
        <div class="name">{{user.name}}</div>
        <div v-bind:class="{ 'arrow-show': toggled }" class="arrow-hide">></div>
      </div>
      <transition name="fade">
        <div class="email" v-if="toggled === index">{{user.email}}</div>
      </transition>
    </li>
  </div>
</template>

<script>
  export default {
    name: "zzzz",
    props: {
      users: {
        type: Array
      }
    },
    data: function () {
      return {
        toggled: false
      }
    },

    methods: {
      // toggleItem: function (index) {
      //   this.toggled = !this.toggled;
      // }
      toggleItem: function (index) {
        if (this.toggled === index) this.toggled = false;
        else this.toggled = index;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
