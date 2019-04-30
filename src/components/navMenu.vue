<template>
  <nav class="nav-menu">
    <ul class="nav-menu__urls">
      <router-link class="nav-menu__url" to="/" tag="li">Home</router-link>
      <router-link class="nav-menu__url" to="/articles" tag="li">Articles</router-link>
      <router-link class="nav-menu__url" to="/contact" tag="li">Contact</router-link>
      <router-link class="nav-menu__url" to="/users-list" tag="li">Users list</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "nav-menu"
  }
</script>

<style lang="scss" scoped>

  .nav-menu{
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 420px;
    width: 100%;
  }
  .nav-menu__urls{
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .nav-menu__url{
    color: #874976;
    text-align: center;
    background: #ffa893;
    max-width: 120px;
    width: 100%;
    padding: 5px 10px;
    margin: 0 10px;
    transition: all 0.2s linear;
    cursor: pointer;
    border-radius: 30px;
    border: 2px solid rgba(255, 164, 142, 0.74);
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .nav-menu__url:hover{
    background: rgba(190, 255, 187, 0.58);
    border: 2px solid rgba(179, 255, 126, 0.58);
  }
  .nav-menu__url:active{
    background: rgba(161, 215, 158, 0.58);
    border: 2px solid rgba(110, 157, 79, 0.58);
  }
  .router-link-exact-active{
    background: #b7ffd6;
    transition: all 0.2s linear;
    border: 2px solid #54d49a;
  }
</style>
