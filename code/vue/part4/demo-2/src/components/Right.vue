<template>
  <div class="right-container">
    <h3>Right 组件 ----{{ count }}</h3>
    <hr />
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //希望把子组件自己的数据 count 的值传给父组件
      count: 0,
    };
  },

  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
