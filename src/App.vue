<template>
  <div id="app">
    <div class="header-line">
      <search-input/>
      <nav-menu/>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
    <div class="footer">
      <b-footer/>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/navMenu";
import SearchInput from "@/components/searchInput";
import BFooter from "@/components/b-footer";
export default {
  name: 'App',
  components: {BFooter, SearchInput, NavMenu}
}
</script>

<style lang="scss">
  body,ul,li,ol,h1,h2,h3,h4,h5{
    margin: 0px;
    padding: 0px;
  }
  ul,li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  html,body,#app{
    height: 100%;
  }
  #app{
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    font-size: 16px;
  }
  .header-line{
    display: flex;
    width: 100%;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    flex: 0 0 auto;
    background: #ff777e;
  }

  .main-content{
    flex: 1 0 auto;
  }
  .footer{
    flex: 0 0 auto;
    height: 50px;
  }

</style>
