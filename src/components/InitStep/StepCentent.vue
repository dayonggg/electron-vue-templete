<template>
  <div class="step-centent">
    <p class="txt">{{ txt }}</p>
    <div class="step-centent-item" v-if="stepState === 0"></div>
    <div class="step-centent-item" v-if="stepState === 1">
      <RadioGroup
        class="select-role-panel"
        v-model="roleType"
        vertical
        @on-change="checkRole"
      >
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
      <div class="role-pwd" v-if="roleType === 'root'">
        <Input
          v-model="rolePwd"
          type="password"
          password
          @on-change="checkRole"
        />
      </div>
    </div>
    <div class="step-centent-item" v-if="stepState === 2">
      <RadioGroup
        class="select-repo-panel"
        v-model="repoValue"
        @on-change="changeRepo"
      >
        <Radio label="local">
          <span>使用本地库</span>
        </Radio>
        <Radio label="clone">
          <span>克隆库到本地</span>
        </Radio>
      </RadioGroup>
      <div class="repo-setting-panel" v-if="repoValue === 'local'">
        <div class="repo-setting-cell">
          <repo-setting :type="repoValue" :role="role"></repo-setting>
        </div>
      </div>
      <div class="repo-setting-panel" v-if="repoValue === 'clone'">
        <repo-setting :type="repoValue" :role="role"></repo-setting>
      </div>
    </div>
    <Spin fix v-if="spinShow"></Spin>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'
import Bus from '@/common/Bus'
import RoleData from '@/common/StaticData/staticRoleData'
import RepoSetting from '@/components/InitStep/RepoSetting.vue'

@Component({
  name: 'step-centent',
  components: {
    RepoSetting
  }
})
export default class StepCentent extends Vue {
  @Prop(Number) stepState!: number;

  spinShow = false;
  txt = '检查Git环境';
  roleData = RoleData.data;
  roleType = '';
  rolePwd = '';
  repoValue = '';
  role = {};
  localRepoSettings = [];
  cloneRepoSettings = [];

  created () {
    console.log(this.roleData)
    ipcRenderer.on('re-git-version', (e, h) => {
      this.spinShow = false
      if (h !== 'error') {
        console.log(h)
        this.txt = 'Git环境正常'
        Bus.$emit('git-sucess')
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

  checkRole () {
    console.log(this.roleType)
    if (this.roleType !== 'root') {
      this.rolePwd = ''
    }
    Bus.$emit('change-role', {
      checked: false,
      roleData: {}
    })
    this.role = {}
    for (const i in this.roleData) {
      if (
        this.roleData[i].roleType === this.roleType &&
        this.roleData[i].pwd === this.rolePwd
      ) {
        this.role = this.roleData[i]
        Bus.$emit('change-role', {
          checked: true,
          roleData: this.roleData[i]
        })
      }
    }
  }

  changeRepo () {
    console.log('changeRepo')
  }

  @Watch('stepState')
  getState (newState: number) {
    this.do(newState)
  }
}
</script>

<style lang="less">
@import "~@/theme/index.less";

.step-centent {
  width: 100%;
  height: 100%;
  padding: 10px;
  .txt {
    padding: 10px 20px 20px;
    font-size: @font-size-large;
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
    .role-pwd {
      position: absolute;
      top: 145px;
      right: 150px;
      width: 200px;
    }
    .select-repo-panel {
      margin: 10px 30px;
    }
    .repo-setting-panel {
      margin: 0px 24px;
      padding: 12px;
      border: @border-width-base @border-color-split @border-style-base;
      background-color: @background-color-base;
    }
  }
}
</style>
