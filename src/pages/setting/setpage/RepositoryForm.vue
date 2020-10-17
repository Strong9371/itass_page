<template>
  <a-form layout="inline" @submit="handleSubmit" :form="form" class="form"  >
    <a-row class="form-row">
      <a-tooltip>
        <template slot="title">
          此项是分公司每日费用的报警阈值，不是分钟费用
        </template>
        <a-form-item :label="departData[0].pname" style="margin-right: 100px;margin-bottom: 50px">

                    <a-input
                      placeholder="请输入分公司每日费用的报警阈值"
                      v-decorator="[departData[0].pname, {rules: [{ required: true, message: '请输入数字！', whitespace: true , pattern: '^\\d+(\\.\\d+)?$'}],initialValue:departData[0].costFix.toString()}]"

                    />
<!--          <a-input-number-->
<!--              :default-value = "departData[0].costFix"-->
<!--          />-->
        </a-form-item>
      </a-tooltip>

        <a-form-item :label="item.pname" v-for="(item,index) in childrenDpart" :key="index"  style="margin-right: 100px;margin-bottom: 50px">

          <a-input
            placeholder="请输入每分钟话费"
            v-decorator="[item.pname, {rules: [{  required: true,message: '请输入数字！', whitespace: true , pattern: '^\\d*(\\.\\d*)?$'}],initialValue:item.costFix.toString()}]"
          />
<!--          <a-input-number-->
<!--              :default-value = "item.costFix"-->
<!--          />-->
        </a-form-item>

    </a-row>
    <a-form-item v-if="showSubmit" style="text-align: center;position: absolute ;bottom: 20px;right: 250px" >
      <a-popconfirm
          title="确认修改费用明细?"
          ok-text="确认"
          cancel-text="取消"
          @confirm="handleSubmit"
      >
        <a-button type="primary" htmlType="submit" >设置</a-button>

      </a-popconfirm>

    </a-form-item>
  </a-form>
</template>

<script>

import {setMoney} from "@/services/user";

export default {
  name: 'RepositoryForm',
  props: ['showSubmit','departData','childrenDpart'],
  // i18n: require('./i18n-repository'),
  data() {
    return {
      form: this.$form.createForm(this),
      isSeting :false
    }
  },

  methods: {
    set(){
      this.isSeting =  true
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {

          var formdataSt = JSON.stringify(values)
          setMoney(formdataSt).then((response) => {
            if (response.data.state == 1) {

              this.$message.success(response.data.message);
            } else {
              this.$message.error(response.data.message);
            }

          })
        }else{
          this.$message.error("修改失败，请重新尝试！");
        }
      })
    },

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
