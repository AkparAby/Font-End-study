<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <Count :init="15"></Count>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
h3 {
  color: rgb(28, 17, 242);
}

//当使用到第三方组件库的时候,如果有需要修改第三方组件样式的需求,需要用到/deep/
/deep/ h5 {
  color: pink;
}
</style>
