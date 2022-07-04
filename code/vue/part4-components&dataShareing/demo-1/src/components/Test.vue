<template>
  <div class="Testbox">
    <h3>Test.vue 组件 --- 从服务器得到的消息是{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    info: {},
  },
  data() {
    return {
      msg: "",
    };
  },

  methods: {
    show() {
      console.log("调用了 Test.vue 的show 方法!");
    },
    //使用Ajax请求消息
    getmessage() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        const result = xhr.responseText;
        console.log(result);
        this.msg = result;
      });
      xhr.open("GET", "https://805a7d17-c79b-4142-8fad-855330419cac.mock.pstmn.io/");
      xhr.send();
    },
  },

  //创建阶段的第一个生命周期函数
  beforeCreate() {
    // console.log(this.info);
    //console.log(this.msg);
    //this.show();
  },
  //创建阶段的第二个生命周期
  created() {
    // created 生命周期函数，非常常用。
    // 经常在它里面，调用 methods 中的方法，请求服务器的数据。
    // 并且，把请求到的数据，转存到 data 中，供 template 模板渲染的时候使用！
    this.getmessage();
  },
};
</script>

<style lang="less" scoped>
.Testbox {
  height: 200px;
  background-color: pink;
  padding: 0px 25px 25px 25px;
}
</style>
