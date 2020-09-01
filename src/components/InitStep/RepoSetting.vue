<template>
  <div class="repo-setting">
    <div class="repo-setting-local" v-if="type === 'local'">
      <div class="repo-setting-item" v-for="item in repos" :key="item.name">
        <p>{{item.name + ':'}}</p>
        <div class="input-button-group">
          <div class="input-item">
            <Input />
          </div>
          <div class="button-item" @click="selectLocalPath(item)">
            <Button long>浏览</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="repo-setting-clone" v-if="type === 'clone'">clone</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { staticRepoSetting } from '@/common/StaticData/staticRepoSetting'

@Component({
  name: 'repo-setting',
  components: {}
})
export default class RepoSetting extends Vue {
  @Prop() type!: string
  @Prop() role!: RoleData

  repos = []

  created () {
    console.log(this.type, this.role)
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

  selectLocalPath (item: any) {
    console.log(item)
  }
}
</script>

<style lang="less">
@import "~@/theme/index.less";

.repo-setting {
  padding: 10px 0px;
  height: 220px;
  .repo-setting-local {
    .repo-setting-item {
      .input-button-group {
        padding: 1px 0px 15px 0px;
      }
    }
  }
}
</style>
