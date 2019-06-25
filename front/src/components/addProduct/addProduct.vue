<template>
  <div class="add-product">
    <div class="info">
      <input type="text" placeholder="请输入商品名称" v-model="product.name">
    </div>
    <div class="info">
      <input type="text" placeholder="请输入商品编码" v-model="product.code">
    </div>
    <div class="info">
      <input type="text" class="left-text" placeholder="请输入商品价格" v-model="product.price">
      <input type="text" placeholder="请输入商品库存" v-model="product.amount">
    </div>
    <div class="info">
      <input type="text" placeholder="请输入商品图片" v-model="product.picUrl">
    </div>
    <div class="info">
      <input type="button" class="commit" value="提交库存" @click="addProduct">
    </div>
  </div>
</template>
<script>
export default {
  name: 'addproduct',
  data () {
    return {
      product: {
        name: '',
        code: '',
        price: '',
        amount: '',
        picUrl: ''
      }
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addProduct () {
      const obj = {product: this.product, isShow: !this.isShow}
      if (this.product) {
        this.$emit('add', obj)
        this.product = {}
      }
    }
  }
}
</script>
<style scoped>
  .add-product {
    position: absolute;
    bottom: 0;
    height: 300px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 -2px 5px #000000;
  }
  .info {
    padding: 8px 16px;
    display: flex;
  }
  input {
    width: 100%;
    height: 24px;
    outline: none;
    margin-top: 16px;
    border: none;
    padding-left: 6px;
    border-bottom: 1px solid #cccccc;
  }
  .left-text {
    margin-right: 16px;
  }
  .commit {
    height: 36px;
    cursor: pointer;
    margin-top: 8px;
    background-color: blue;
    color: white;
    font-size: 18px;
  }
</style>
