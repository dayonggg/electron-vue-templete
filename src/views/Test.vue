<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'test',
  components: {}
})
export default class DelConfirm extends Vue {
  @Prop()
  mounted () {
    console.log('yes')
  }
}
</script>

<style>
</style>
