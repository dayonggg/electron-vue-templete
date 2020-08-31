<template>
  <div class="repo-setting">
    <div class="repo-setting-local" v-if="type === 'local'">local</div>
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
  @Prop() role!: any

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
}
</script>

<style lang="less">
@import "~@/theme/index.less";
</style>
