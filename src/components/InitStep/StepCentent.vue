<template>
  <div class="step-centent">
    <p class="txt">{{txt}}</p>
    <div class="step-centent-item" v-if="stepState === 0">
    </div>
    <div class="step-centent-item" v-if="stepState === 1">
      <RadioGroup v-model="role" vertical size="small">
        <Radio label="designer">
            <span> 策划 - <span class="info">修改和更新课程内容和资源</span></span>
        </Radio>
        <Radio label="teacher">
            <span> 教研 - <span class="info">用于浏览课程内容和编写关卡提示</span></span>
        </Radio>
        <Radio label="other">
            <span> 其他 - <span class="info">仅限于浏览课程内容</span></span>
        </Radio>
    </RadioGroup>
    </div>
    <Spin size="small" fix v-if="spinShow"></Spin>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { ipcRenderer } from 'electron'
import Bus from '@/common/Bus'

@Component({
  name: 'step-centent',
  components: {
  }
})
export default class StepCentent extends Vue {
  @Prop(Number) stepState!: number;

  spinShow = false
  txt = '检查Git环境'
  role = 'other'

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
  .txt{
    padding: 10px 20px 40px;
  }
  .step-centent-item{
    padding: 0px;
    .ivu-radio-group{
      margin: 10px 30px;
      .ivu-radio-wrapper{
        height: 50px;
        line-height: 50px;
        .info{
          font-size: @font-size-small;
        }
      }
    }
  }
}
</style>
