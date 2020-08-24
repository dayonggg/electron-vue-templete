<template>
  <Card class="setting-card" :bordered="false" :dis-hover="true" :shadow="true">
    <p slot="title">
      <Icon type="md-cog" />
      Setting
    </p>
    <Button type="primary" slot="extra" @click="next" :disabled="nextDisable">Next</Button>
    <Layout class="fill">
      <Layout>
        <Sider :width="160" hide-trigger>
          <Steps class="init-steps" :current="current" direction="vertical" :status ="status" size="small">
            <Step title="环境检查" content="配置本地运行环境"></Step>
            <Step title="角色选择" content=""></Step>
            <Step title="初始化" content=""></Step>
            <Step title="完成" content=""></Step>
          </Steps>
        </Sider>
        <Content>
          <step-centent :stepState.sync="current"></step-centent>
        </Content>
      </Layout>
    </Layout>
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StepCentent from '@/components/InitStep/StepCentent.vue'
import Bus from '@/common/Bus'

@Component({
  name: 'test',
  components: { StepCentent }
})
export default class InitStep extends Vue {
  current = 0
  status = 'wait'
  nextDisable = false
  stepState = {
    current: 0,
    status: 'wait'
  }

  created () {
    Bus.$on('step-next', () => {
      this.next()
    })
  }

  mounted () {
    // this.next()
  }

  next () {
    if (this.current < 3) {
      this.current++
    } else {
      this.current = 0
    }
  }
}
</script>

<style lang="less">
@import '~@/theme/index.less';

.setting-card {
  width: 900px;
  height: 500px;
  margin: 50px auto;
  .ivu-card-body{
    height: 449px;
  }
  .init-steps {
    margin-top: 10px;
    border-right: solid 1px @border-color-split;
    .ivu-steps-main {
      min-height: 100px;
    }
  }
}
</style>
