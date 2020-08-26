<template>
  <div class="step-centent">
    <p class="txt">{{ txt }}</p>
    <div class="step-centent-item" v-if="stepState === 0"></div>
    <div class="step-centent-item" v-if="stepState === 1">
      <RadioGroup class="select-role-panel" v-model="role" vertical @on-change="changeRole">
        <Radio
          v-for="item in roleData"
          :key="item.roleType"
          :label="item.roleType"
        >
          <span>
            {{ item.label }} - <span class="info">{{ item.info }}</span></span
          >
        </Radio>
      </RadioGroup>
    </div>
    <div class="step-centent-item" v-if="stepState === 2">
      <RadioGroup class="select-repo-panel" v-model="repoValue" @on-change="changeRepo">
        <Radio label="local">
          <span>使用本地库</span>
        </Radio>
        <Radio label="clone">
          <span>克隆库到本地</span>
        </Radio>
      </RadioGroup>
      <div class="repo-setting-panel" v-if="repoValue === 'local'">
        <p>
          type.
        </p>
      </div>
      <div class="repo-setting-panel" v-if="repoValue === 'clone'">
        <p>
          Content
        </p>
      </div>
    </div>
    <Spin fix v-if="spinShow"></Spin>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'
import Bus from '@/common/Bus'
import RoleData from '@/common/StaticData/RoleData'

@Component({
  name: 'step-centent',
  components: {}
})
export default class StepCentent extends Vue {
  @Prop(Number) stepState!: number

  spinShow = false
  txt = '检查Git环境'
  roleData = RoleData.data
  role = ''
  repoValue = ''

  created () {
    ipcRenderer.on('re-git-version', (e, h) => {
      this.spinShow = false
      if (h !== 'error') {
        console.log(h)
        this.txt = 'Git环境正常'
        Bus.$emit('step-next')
      } else {
        console.log('请先安装Git环境，https://git-scm.com/download')
        this.txt = '请先安装Git环境，https://git-scm.com/download'
      }
    })
  }

  mounted () {
    console.log(this.stepState)

    this.do(this.stepState)
  }

  do (index: number) {
    if (index === 0) {
      this.spinShow = true
      ipcRenderer.send('git-version')
    }
    if (index === 1) {
      this.txt = '请选择你的身份'
    }
    if (index === 2) {
      this.txt = '请选择工作目录位置'
    }
  }

  changeRole () {
    Bus.$emit('change-role', this.role)
  }

  changeRepo () {
    console.log('124')
  }

  @Watch('stepState')
  getState (newState: number) {
    this.do(newState)
  }
}
</script>

<style lang="less">
@import '~@/theme/index.less';

.step-centent {
  width: 100%;
  height: 100%;
  padding: 10px;
  .txt {
    padding: 10px 20px 20px;
  }
  .step-centent-item {
    padding: 0px;
    .select-role-panel {
      margin: 10px 30px;
      .ivu-radio-wrapper {
        height: 50px;
        line-height: 50px;
        .info {
          font-size: @font-size-small;
        }
      }
    }
    .select-repo-panel{
      margin: 10px 30px;
    }
    .repo-setting-panel{
      margin: 0px 24px;
      padding: 12px;
      border: @border-width-base @border-color-split @border-style-base;
      background-color: @background-color-base ;
    }
  }
}
</style>
