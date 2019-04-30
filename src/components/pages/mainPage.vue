<template>
  <div class="main-page">
    <h1 class="main-page__title">{{ msg }}</h1>
    <div class="main-page__wrap">
      <div class="main-page__left">left</div>
      <div class="main-page__right">right</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-page{
    height: 100%;
    width: 100%;
  }
  .main-page__wrap{
    width: 100%;
    height: 100px;
    display: flex;
  }
  .main-page__left{
    background: red;
    width: 70%;
    height: 100%;
    margin: 0 5px 0 10px;
  }
  .main-page__right{
    background: blue;
    width: 30%;
    height: 100%;
    margin: 0 10px 0 5px;
  }
  .main-page__title{
    margin: 20px 20px;
  }
</style>
