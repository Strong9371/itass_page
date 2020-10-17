<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="downLordUrl">
          <a-input @change="urlChange"
            v-decorator="['downLordUrl', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}],initialValue:task.downLordUrl}]"
            placeholder="请输入访问地址即SessionId"
          />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="startTask">
          <a-radio-group  :default-value="task.startTask" @change="onChange">
            <a-radio :value="0">
              关闭
            </a-radio>
            <a-radio :value="1">
              开启
            </a-radio>

          </a-radio-group>
        </a-form-item>

      </a-col>


      <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="startSerTask">
          <a-radio-group :default-value="task.startSerTask" @change="onChange02">
            <a-radio :value="0">
              关闭
            </a-radio>
            <a-radio :value="1">
              开启
            </a-radio>

          </a-radio-group>
        </a-form-item>

      </a-col>




    </a-row>
    <a-form-item v-if="showSubmit" style="text-align: center">
      <a-button htmlType="submit" type="primary">设置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {setTask} from "@/services/user";
export default {
  name: 'TaskForm',
  props: ['showSubmit','task'],
  i18n: require('./i18n-task'),
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    urlChange(e){
      this.task.downLordUrl = e.target.value
    },
    onChange(e){
      this.task.startTask = e.target.value
    },
    onChange02(e){
      this.task.startSerTask = e.target.value
    },
    handleSubmit () {
      var formdataSt = JSON.stringify(this.task)
      setTask(formdataSt).then((response) => {
        if (response.data.state == 1) {

          this.$message.success(response.data.message);
        } else {
          this.$message.error(response.data.message);
        }

      })
      // e.preventDefault()
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //   }
      // })
    }
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
