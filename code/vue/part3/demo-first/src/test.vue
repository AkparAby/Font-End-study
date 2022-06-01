<template>
  <div id="box">
    <h3>这是用户自定义的test页面----{{ username }}</h3>

    <button @click="changeName"> change name</button>
  </div>
</template>

<script>
// 默认导出 这是固定写法!
export default {
  //data 数据源
  //注意: .vue 组件中的 data 不能像之前一样 不能指向对象
  //注意: .vue 组件中的 data 必须是一个函数
  data() {
    //这个 return 出去的 {} 中可以定义数据
    return {
      username: "admin",
    };
  },
  methods:{
    changeName(){
      this.username="father"
    }
  }
};
</script>

<style lang="less">
#box {
  background-color: aquamarine;
  h3{
    color:red;
  }
}
</style>
