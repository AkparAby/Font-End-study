<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="getInfo">发起GET请求</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    getInfo () {
      axios.get('http://www.liulongbing.top:3006/api/get')
    }
  }
}
</script>

<style>
.left-container {
  background-color: rgb(248, 135, 5);
  min-height: 200px;
  flex: 1;
}
</style>
