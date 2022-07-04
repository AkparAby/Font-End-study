<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <input ref="iptRef" type="text" v-if="inputVisable" @blur="showButton" />
    <button ref="btn" @click="showInput" v-else>展示输入框</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3. 以标签形式，使用注册好的组件 -->
      <Left></Left>
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的 .vue 组件
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  // 2. 注册组件
  components: {
    Left,
    Right,
  },

  data() {
    return {
      inputVisable: false,
    };
  },
  methods: {
    showButton() {
      this.inputVisable = false;
      console.log("showButton 被触发了");
    },
    showInput() {
      this.inputVisable = true;
      console.log("showInput 被触发了");

      // this.$refs.iptRef.focus();
  
      this.$nextTick(() => {
        //console.log(this.$refs.iptRef);
        this.$refs.iptRef.focus();
      });
    },
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
