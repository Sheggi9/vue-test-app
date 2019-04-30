<template>
  <div class="cb">
    <h1 class="contact__title">Contsct</h1>
    <div>{{ count }}</div>
  </div>
</template>

<script>
  export default {
    name: "contact",
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact__title{
    margin: 20px;
  }
</style>
