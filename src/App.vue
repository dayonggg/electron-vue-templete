<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RoleData from '@/common/StaticData/RoleData'

@Component({ name: 'App' })
export default class App extends Vue {
  mounted () {
    console.log('APP')
    this.$router.push({ path: 'InitStep' })
    console.log(RoleData.data)
  }
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
