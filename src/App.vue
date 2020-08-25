<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Test from '@/common/Test'

@Component({ name: 'App' })
export default class App extends Vue {
  mounted () {
    console.log('APP')
    this.$router.push({ path: 'InitStep' })
    const tt = new Test('ssss')
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
