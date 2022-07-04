<template>
  <div>
    <p>卡片</p>

    <template>
      <div style="background-color: #ececec; padding: 20px">
        <a-row :gutter="16" id="card-contianer">
          <a-col :span="8">
            <a-card title="Card title" :bordered="false" class="card">
              <p>card content1</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <p>card content2</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <p>card content3</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </template>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
#card-contianer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
