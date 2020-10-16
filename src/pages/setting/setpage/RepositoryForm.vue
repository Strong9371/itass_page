<template>
  <a-form @submit="handleSubmit" :form="form" class="form" >
    <a-row class="form-row" style="overflow-y: scroll;height: 300px">
      <a-col :lg="4" :md="12" :sm="24" style="margin-right: 50px">
        <a-form-item label="报警阈值">
          <a-input
              :default-value = "18"
            placeholder="请输入分公司每日费用的报警阈值"
            v-decorator="['报警阈值', {rules: [{ required: true, message: '请输入数字！', whitespace: true , pattern: '^[0-9]*$'}]}]"

          />
        </a-form-item>
      </a-col>
      <a-col style="margin-right: 50px" :xl="{span: 4}" :lg="{span: 4}" :md="{span: 4}" :sm="24" v-for="(item,index) in childrenDpart" :key="index">
        <a-form-item :label="item.pname + item.costFix">
          <a-input
              :default-value = " 0 + item.costFix"
            placeholder="请输入每分钟话费"
            v-decorator="['item.pname', {rules: [{ required: true, message: '请输入数字！', whitespace: true , pattern: '^\\d+(\\.\\d+)?$'}]}]"
          />
        </a-form-item>
      </a-col>
<!--      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">-->
<!--        <a-form-item :label="$t('manager')">-->
<!--          <a-select-->
<!--            :placeholder="$ta('select|manager')"-->
<!--            v-decorator="['repository.manager', {rules: [{ required: true, message: $ta('select|manager')}]}]"-->
<!--          >-->
<!--            <a-select-option value="王同学">王同学</a-select-option>-->
<!--            <a-select-option value="李同学">李同学</a-select-option>-->
<!--            <a-select-option value="黄同学">黄同学</a-select-option>-->
<!--          </a-select>-->
<!--        </a-form-item>-->
<!--      </a-col>-->
<!--    </a-row>-->
<!--    <a-row class="form-row">-->
<!--      <a-col :lg="6" :md="12" :sm="24">-->
<!--        <a-form-item :label="$t('approval')">-->
<!--          <a-select-->
<!--            :placeholder="$ta('select|approval')"-->
<!--            v-decorator="['repository.auditor', {rules: [{ required: true, message: $ta('select|approval')}]}]"-->
<!--          >-->
<!--            <a-select-option value="王晓丽">王晓丽</a-select-option>-->
<!--            <a-select-option value="李军">李军</a-select-option>-->
<!--          </a-select>-->
<!--        </a-form-item>-->
<!--      </a-col>-->
<!--      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">-->
<!--        <a-form-item :label="$t('date')">-->
<!--          <a-range-picker-->
<!--            style="width: 100%"-->
<!--            v-decorator="['repository.effectiveDate', {rules: [{ required: true, message: $ta('select|date')}]}]"-->
<!--          />-->
<!--        </a-form-item>-->
<!--      </a-col>-->
<!--      <a-col :xl="{span: 8, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">-->
<!--        <a-form-item :label="$t('type')">-->
<!--          <a-select-->
<!--            :placeholder="$ta('select|type')"-->
<!--            v-decorator="['repository.type', {rules: [{ required: true, message: $ta('select|type')}]}]"-->
<!--          >-->
<!--            <a-select-option value="公开">公开</a-select-option>-->
<!--            <a-select-option value="私密">私密</a-select-option>-->
<!--          </a-select>-->
<!--        </a-form-item>-->
<!--      </a-col>-->
    </a-row>
    <a-form-item v-if="showSubmit" style="text-align: center">
      <a-button type="primary" htmlType="submit" >提交</a-button>

    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'RepositoryForm',
  props: ['showSubmit','departData','childrenDpart'],
  // i18n: require('./i18n-repository'),
  data() {
    return {
      form: this.$form.createForm(this),
    }
  },
  created() {
    console.log(this.childrenDpart)
    console.log(this.departData)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    // validate (rule, value, f) {
    //   if (value !== undefined && value !== 'iczer') {
    //     f('输入\'iczer\'试下？')
    //   }
    //   f()
    // }
  }
}
</script>

<style lang="less" scoped>
  .form{
    .form-row{
      margin: 0 -8px
    }
    .ant-col-md-12,
    .ant-col-sm-24,
    .ant-col-lg-6,
    .ant-col-lg-8,
    .ant-col-lg-10,
    .ant-col-xl-8,
    .ant-col-xl-6{
      padding: 0 8px
    }
  }
</style>
