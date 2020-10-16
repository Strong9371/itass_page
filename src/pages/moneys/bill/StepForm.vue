<template>
  <a-card :bordered="false">
    <a-empty style="margin-top: 200px;margin-bottom: 200px">
      <span slot="description">正在开发中 </span>

    </a-empty>
    <a-steps class="steps" :current="current" v-if="false">
      <a-step title="请选择票据类型" />
      <a-step title="请填写票据信息" />
    </a-steps>
    <div class="content" v-if="false">
      <step1 v-if="current === 0" @nextStep="nextStep"></step1>
      <step2 v-if="current === 1" @nextStep="nextStep" @prevStep="prevStep"></step2>
    </div>
  </a-card>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'

export default {
  name: 'StepForm',
  components: {Step1, Step2},
  data () {
    return {
      current: 0
    }
  },
  computed: {
    desc() {
      return "发票助手暂只支持报销单、借款单、分摊表，因为网管只用到了这些，哈哈。"
    }
  },
  methods: {
    nextStep () {
      if (this.current < 2) {
        this.current += 1
      }
    },
    prevStep () {
      if (this.current > 0) {
        this.current -= 1
      }
    },
    finish () {
      this.current = 0
    }
  }
}
</script>

<style lang="less" scoped>
  .steps{
    max-width: 950px;
    margin: 16px auto;
  }
</style>
