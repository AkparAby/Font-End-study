<template>
  <div class="right-container">
    <h3>Right 组件 ---- count 的值 {{ count }}</h3>
    <hr />
    <button @click="add">+1</button>
    <hr />
    <p>来自兄弟组件 Left 的消息 是{{ msgFromLeft }}</p>
  </div>
</template>

<script>
//1.导入eventBus.js 模块
import bus from "./eventBus.js";

export default {
  data() {
    return {
      //希望把子组件自己的数据 count 的值传给父组件
      count: 0,

      //接收来自 left 的数据
      msgFromLeft: "",
    };
  },

  created() {
    //2.通过 bus 接收数据
    // .$on 监听 sharemsg 事件 ，触发时调用事件处理函数
    bus.$on("sharemsg", (val) => {
      console.log("Right组件中定义的 sharemsg 被触发了");
      this.msgFromLeft = val;
    });
  },
  methods: {
    add() {
      this.count++;
      //修改数据时,通过 $emit 触发自定义事件 numchange
      this.$emit("numchange", this.count);
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
