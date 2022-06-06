<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr />
    <p>来自父组件 message 的值 是{{ msg }}</p>
    <p>来自父组件 userinfo 的值 是{{ info }}</p>

    <hr />
    <button @click="sendMsg">发消息给 Right</button>
  </div>
</template>

<script>
//1.导入eventBus.js 模块
import bus from "./eventBus.js";

export default {
  props: {
    msg: {},
    info: {},
  },

  data() {
    return {
      //希望把 此字符串数据 传给兄弟组件 Left
      str: "六一儿童节的第二天快乐!",
    };
  },

  methods: {
    sendMsg() {
      //2.通过 bus 发送数据 (将数据挂载到 eventBus 中的 Vue 实例上)
      bus.$emit("sharemsg", this.str);
    },
  },
};
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

// h5[data-v-3c83f0b7]
// [data-v-3c83f0b7] h5
// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 /deep/
/deep/ h5 {
  color: pink;
}
</style>
