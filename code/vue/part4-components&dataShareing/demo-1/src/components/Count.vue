<template>
  <div>
    <h5>count 组件</h5>
    <p>count 的值是{{ number }}</p>

    <button @click="add">+1</button>

    <button @click="show">打印this</button>
  </div>
</template>

<script>
export default {
  //props 是"自定义属性" ,允许使用者通过自定义属性,为当前组件指定初始值
  //props 中的数据可以直在模板结构中被使用
  //自定义属性的值 是"只读"的,不要修改props 的值, 否则终端会报错!

  // props: ["init"],
  props: {
    //自定义属性 A:{/* 配置选项 */}
    //自定义属性 B:{/* 配置选项 */}
    //自定义属性 C:{/* 配置选项 */}
    init: {
      //如果外界使用 Count 组件的时候没有传递 init 属性,则默认值 defaut 生效
      default: 0,
      //规定 init 的值 类型  例:String,Arry,Number,Object....
      type: Number,
      //必填项校验  默认为 false
      required: false,
    },
  },

  data() {
    return {
      number: this.init,
    };
  },
  methods: {
    add() {
      this.number++;
    },
    show() {
      console.log(this);
    },
  },
};
</script>

<style lang="less">
h5 {
  height: 25px;
  width: 100px;
  padding: 10px 10px 10px 0px;
  background-color: red;

  display: block;
}
</style>
