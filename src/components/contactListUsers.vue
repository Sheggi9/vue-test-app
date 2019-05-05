<template>
  <li @click="toggleItem" class="user-list">
    <div class="user-top-menu">
      <div class="name">{{user.name}}</div>
      <div v-bind:class="{ 'arrow-show': toggled }" class="arrow-hide">></div>
    </div>
    <transition name="fade">
      <div class="email" v-if="toggled">{{user.email}}</div>
    </transition>
  </li>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object
      }
    },
    data: function () {
      return {
        toggled: false
      }
    },

    methods: {
      toggleItem: function () {
        this.toggled = !this.toggled;
      }
    },
    name: "contactListUsers"
  }
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s;
  }
   .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }


  .arrow-hide {
    height: 15px;
    width: 15px;
    transform: rotate(-90deg);
    margin: 0;
    padding: 0;
    transition: all .1s linear;
    margin-left: 5px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .arrow-show {
    transform: rotate(-270deg);
    transition: all .1s linear;
  }

  .user-list {
    background: #fab0ff;
    border: 1px solid #ff327e;
    cursor: pointer;
  }
  .user-list:first-child {
    background: #fab0ff;
    border-top: 2px solid #ff327e;
  }.user-list:last-child {
    background: #fab0ff;
    border-bottom: 2px solid #ff327e;
  }
  .user-top-menu{
    display: flex;
    justify-content: space-between;
  }
  .email{
    background: #77ff4b;
  }
</style>
