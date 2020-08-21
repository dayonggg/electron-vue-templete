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
import ele from 'electron'

@Component({
  name: 'test',
  components: {}
})
export default class Test extends Vue {
  current = 0
  status = 'wait'
  nextDisable = true

  created () {
    ele.ipcRenderer.send('git-version')
    ele.ipcRenderer.on('re-git-version', (e, h) => {
      if (h !== 'error') {
        console.log(h)
      } else {
        console.log('请先安装Git环境，https://git-scm.com/download')
        // this.showGitMessage = true
      }
    })
  }

  mounted () {
    this.next()
    ele.ipcRenderer.send('git-version')
  }

  next () {
    this.nextDisable = true
    if (this.current === 0) {
      ele.ipcRenderer.send('git-version')
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
