<template>
  <Card class="setting-card" :bordered="false" :dis-hover="true" :shadow="true">
    <p slot="title">
      <Icon type="md-cog" />
      Setting
    </p>
    <Button type="primary" slot="extra" @click="next">Next</Button>
    <Layout class="fill">
      <Layout>
        <Sider :width="160" hide-trigger>
          <Steps class="init-steps" :current="current" direction="vertical">
            <Step title="角色选择" content=""></Step>
            <Step title="环境配置" content="配置本地运行环境"></Step>
            <Step title="初始化" content=""></Step>
            <Step title="完成" content=""></Step>
          </Steps>
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'test',
  components: {}
})
export default class Test extends Vue {
  current = 0
  mounted () {
    console.log('yes')
  }

  next () {
    if (this.current === 3) {
      this.current = 0
    } else {
      this.current += 1
    }
  }
}
</script>

<style lang="less">
.setting-card {
  width: 900px;
  height: 500px;
  margin: 50px auto;
  .ivu-card-body{
    height: 449px;
  }
  .init-steps {
    margin-top: 10px;
    // border-right: @border-color-split;
    border-right: solid 1px #414141;
    .ivu-steps-main {
      min-height: 100px;
    }
  }
}
</style>
