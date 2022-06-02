<template>
  <div class="app-container">
    <h1>App 根组件-- {{ countFromson }}</h1>

    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3. 以标签形式，使用注册好的组件 -->
      <Left :msg="message" :info="userinfo"></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
// 1. 导入需要使用的 .vue 组件
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      message: "儿童节快乐！",
      userinfo: { name: "pai", age: 12 },
      //定义 countFromson 接收子组件传递过来的数据
      countFromson: 0,
    };
  },
  // 2. 注册组件
  components: {
    Left,
    Right,
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
