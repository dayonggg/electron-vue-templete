<template>
  <div class="repo-setting">
    <div class="repo-setting-local" v-if="type === 'local'">
      <div class="repo-setting-item" v-for="item in repos" :key="item.name">
        <p>{{ item.name + ' :' }}</p>
        <div class="input-button-group">
          <div class="input-item" @click="selectLocalRepo(item)">
            <Input v-model="item.localPath" readonly />
          </div>
          <div class="button-item">
            <Button long  @click="selectLocalRepo(item)">浏览</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="repo-setting-clone" v-if="type === 'clone'">
      <div class="repo-setting-item">
        <p>账户 ：</p>
        <div class="input-button-group">
          <div class="input-item">
            <Input v-model="cloneSettings.user" />
          </div>
        </div>
      </div>
      <div class="repo-setting-item">
        <p>密码 ：</p>
        <div class="input-button-group">
          <div class="input-item">
            <Input v-model="cloneSettings.pwd" type="password" password />
          </div>
        </div>
      </div>
      <div class="repo-setting-item">
        <p>本地地址 ：</p>
        <div class="input-button-group">
          <div class="input-item" @click="selectLocalPath()">
            <Input v-model="cloneSettings.clonePath" readonly />
          </div>
          <div class="button-item">
            <Button long  @click="selectLocalPath()">浏览</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { staticRepoSetting } from '@/common/StaticData/staticRepoSetting'
import Bus from '@/common/Bus'

const { dialog } = require('electron').remote

@Component({
  name: 'repo-setting',
  components: {}
})
export default class RepoSetting extends Vue {
  @Prop() type!: string
  @Prop() role!: RoleData

  repos = []

  cloneSettings = {
    user: '',
    pwd: '',
    clonePath: ''
  }

  settinged = false

  created () {
    // console.log(this.type, this.role)
    for (const i in this.role.repos) {
      for (const j in staticRepoSetting) {
        if (staticRepoSetting[j].name === this.role.repos[i]) {
          const rs = staticRepoSetting[j]
          const obj = {
            name: rs.name,
            url: rs.url,
            localPath: ''
          }
          this.repos.push(obj)
        }
      }
    }
  }

  // mounted () {}

  selectLocalRepo (item: any) {
    // console.log(item)
    dialog.showOpenDialog({
      properties: ['openDirectory', 'createDirectory']
    }).then((result: any) => {
      if (!result.canceled) {
        item.localPath = result.filePaths[0]
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  selectLocalPath () {
    // console.log('local path')
    dialog.showOpenDialog({
      properties: ['openDirectory', 'createDirectory']
    }).then((result: any) => {
      if (!result.canceled) {
        this.cloneSettings.clonePath = result.filePaths[0]
      }
    }).catch((err: any) => {
      console.log(err)
    })
  }

  checkLocalInput () {
    this.settinged = true
    for (const i in this.repos) {
      if (this.repos[i].localPath === '') {
        this.settinged = false
        break
      }
    }
  }

  checkCloneInput () {
    if (this.cloneSettings.user !== '' && this.cloneSettings.pwd !== '' && this.cloneSettings.clonePath !== '') {
      this.settinged = true
    } else {
      this.settinged = false
    }
  }

  @Watch('repos', { deep: true })
  onChangeRepos () {
    this.checkLocalInput()
  }

  @Watch('cloneSettings', { deep: true })
  onChangeCloneSettings () {
    this.checkCloneInput()
  }

  @Watch('settinged', { immediate: true })
  onChangeSettinged (newValue: boolean) {
    Bus.$emit('repo-setting', {
      state: newValue,
      initType: this.type,
      localRepos: this.repos,
      cloneSettings: this.cloneSettings
    })
  }
}
</script>

<style lang="less">
@import '~@/theme/index.less';

.repo-setting {
  padding: 12px 0px;
  height: 282px;
  .repo-setting-item {
    .input-button-group {
      padding: 1px 0px 16px 0px;
    }
  }
}
</style>
