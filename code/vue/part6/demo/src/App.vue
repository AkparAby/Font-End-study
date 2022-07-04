<template>
  <div>
    <h1>APP根组件</h1>

    <hr />
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Right from '@/components/Right.vue'
import Left from '@/components/Left.vue'

export default {
  components: {
    Right,
    Left
  }
}
</script>

<style>
.box {
  display: flex;
}
</style>
