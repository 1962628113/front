<template>
  <div class="list">
    <div class="header">
      <span class="text">商品列表</span>
      <span class="img"><img src="../assets/add.png" alt="" @click="addProduct"></span>
    </div>
    <div class="productList"></div>
    <addProduct :isShow="isShow" v-if="isShow" @add="handleAddProduct"/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import addProduct from './addProduct/addProduct'
export default {
  name: 'list',
  components: {
    addProduct
  },
  data () {
    return {
      isShow: false
    }
  },
  created () {
    console.log(this.$store.actions.addProdcuts)
  },
  computed: {
    ...mapState({
      productList: state => state.productList
    })
  },
  methods: {
    ...mapActions(['addProducts']),
    addProduct () {
      this.isShow = true
    },
    handleAddProduct (obj) {
      this.isShow = obj.isShow
      this.$store.actions.addProdcuts(obj)
    }
  }
}
</script>
<style scoped>
.list {
  margin: 0 auto;
  width: 300px;
  height:600px;
  overflow-y: hidden;
  border: 1px solid #ccc;
  position: relative;
}
  .header {
    height: 80px;
    padding: 0 16px;
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text {
    margin-top: 50px;
    font-size: 20px;
    color: white;
    align-self: center;
  }
  .img {
    margin-top: 50px;
    align-self: center;
    cursor: pointer;
  }
</style>
