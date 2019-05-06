<template>
  <ul class="first-active-wrap">
    <!--<div>:class="item.id == toggled ? 'item-active' : ''"</div>-->
    <li class="item"
        v-for="item in items"
        :class="cssFunc(item.id)"
        @click="toggleItem(item.id)"
    >{{item.id}}
      <!--<div class="itemZZZ" v-if="item.id == toggled">-->
        <!--<span v-for="arrItem in testArr">{{arrItem.text}}  :   <b>{{arrItem.iterEL}}</b></span>-->
      <!--</div>-->
    </li>
  </ul>
</template>

<script>
  export default {
    name: "firstActiveDiv",
    props: [
      'items'
    ],
    data() {
      return {
        toggled: '',
        testArr: [],
      }
    },
    methods: {
      toggleItem: function (id) {
        this.toggled = id;
        // this.testArr.splice(0);
        // for( let i = 0; i < 3; i++){
        //   this.testArr.push({
        //     text: 'qwert-' + i,
        //     iterEL: this.iter
        //   })
        // }
      },
      cssFunc(id) {
        if (id == this.toggled) {
          return 'item-active'
        } else {
          return ''
        }
      }
    },
    created() {
      // this.toggled = this.items[0].id;
      this.toggleItem(this.items[0].id)
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    padding: 50px;
    margin: 10px;
    background: #f8ff9d;
  }

  .item-active {
    background: red;
  }
  .first-active-wrap{
    display: flex;
    justify-content: space-between;
  }

  .itemZZZ{
    height: 50px;
    width: 100px;
    background: #35ff02;
  }
</style>
