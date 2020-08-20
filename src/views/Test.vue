<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'test',
  components: {}
})
export default class Test extends Vue {
  mounted () {
    console.log('yes')
  }
}
</script>

<style>
</style>
