<template>
  <Card class="setting-card" :bordered="true" :dis-hover="true" :shadow="false">
    <p slot="title">
      <Icon type="md-cog" />
      Setting
    </p>
    <Button type="primary" slot="extra" @click="next" :disabled="nextDisable">Next</Button>
    <Layout class="fill">
      <Layout>
        <Sider :width="180" hide-trigger>
          <Steps class="init-steps" :current="current" direction="vertical" :status ="status" size="small">
            <Step title="Git检查" content="本地Git运行环境检查"></Step>
            <Step title="角色选择" content=""></Step>
            <Step title="工作环境" content="配置本地工作目录"></Step>
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
  nextDisable = true
  stepState = {
    current: 0,
    status: 'wait'
  }

  roleData = ''
  repoSettinig = {}

  created () {
    Bus.$on('git-sucess', () => {
      // this.next()
      this.nextDisable = false
    })
    Bus.$on('change-role', (data: any) => {
      this.roleData = data.roleData
      this.nextDisable = !data.checked
    })
    Bus.$on('repo-setting', (data: any) => {
      // console.log(data)
      if (data.state) {
        this.repoSettinig = data
        this.nextDisable = false
      } else {
        this.nextDisable = true
      }
    })
  }

  mounted () {
    // this.next()
  }

  next () {
    this.nextDisable = true
    if (this.current < 4) {
      this.current++
    } else {
      this.current = 0
    }
    console.log(this.current)
  }
}
</script>

<style lang="less">
@import '~@/theme/index.less';

.setting-card {
  width: 900px;
  height: 500px;
  margin: 50px auto;
  &>.ivu-card-body{
    height: 446px;
  }
  .init-steps {
    margin-top: 10px;
    border-right: solid 1px @border-color-split;
    .ivu-steps-main {
      min-height: 80px;
    }
  }
}
</style>
