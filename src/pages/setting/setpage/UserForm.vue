<template>
  <form :autoFormCreate="(form) => this.form = form">
    <a-table style="overflow-y: scroll;height: 300px"
      :columns="dataColumns"
      :dataSource="dataSource"
      :pagination="false"
    >
      <template  v-for="(col, i) in ['name', 'password','isadmin', 'department']" :slot="col" slot-scope="text, record">
          <a-input
            :key="col"
            v-if="record.editable && (i != 3)  && (i!= 2)"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columns[i].title"

            @change="e => handleChange(e.target.value, record.key, col)"

          />

        <a-select @change="adminChange" :default-value="record.isadmin " style="width: 340px;margin-top: -10px;margin-bottom: -10px" v-if="record.editable && (i == 2)" :key="col">
          <a-select-option value="0">
            普通成员
          </a-select-option>
          <a-select-option value="1">
            分公司管理员
          </a-select-option>
          <a-select-option value="2" :disabled="user.isAd != 2">
            系统管理员
          </a-select-option>

        </a-select>

        <a-select @change="departChange" :default-value="firstDepart[0].pname" style="width: 340px;margin-top: -10px;margin-bottom: -10px" v-if="record.editable && (i == 3)" :key="col">
          <a-select-option v-for="(item,index) in firstDepart" :key="index" :value="item.pname+','+item.id">
            {{ item.pname }}
          </a-select-option>
        </a-select>

          <template v-if="!record.editable">{{text}}</template>
      </template>
      <template slot="operation" slot-scope="text, record">
        <template v-if="record.editable">
          <span v-if="record.isNew">
            <a @click="saveRow(record.key)">{{$t('add')}}</a>
            <a-divider type="vertical" />
            <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key,-1)">
              <a>{{$t('delete')}}</a>
            </a-popconfirm>
          </span>
            <span v-else>
            <a @click="saveRow(record.key)">{{$t('save')}}</a>
            <a-divider type="vertical" />
            <a @click="cancle(record.key)">{{$t('cancel')}}</a>
          </span>
        </template>
        <span v-else>
          <a @click="toggle(record.key)">{{$t('edit')}}</a>
          <a-divider type="vertical" />
          <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key,record.id)">
            <a>{{$t('delete')}}</a>
          </a-popconfirm>
        </span>
      </template>
    </a-table>
    <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">{{$t('newMember')}}</a-button>
  </form>
</template>

<script>
import {mapGetters} from 'vuex'
import {setUser,delUser} from "@/services/user";

const columns = [
  {
    title: '成员姓名',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
    width: '20%',
    scopedSlots: { customRender: 'password' }
  },
  {
    title: '权限',
    dataIndex: 'isadmin',
    key: 'isadmin',
    width: '20%',
    scopedSlots: { customRender: 'isadmin' }
  },
  {
    title: '所属部门',
    dataIndex: 'department',
    key: 'department',
    width: '20%',
    scopedSlots: { customRender: 'department' }
  },
  {
    title: '操作',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

// const dataSource = [
//   {
//     key: 1,
//     name: '小明',
//     number: '001',
//     editable: false,
//     department: '行政部'
//   },
//   {
//     key: 2,
//     name: '李莉',
//     number: '002',
//     editable: false,
//     department: 'IT部'
//   },
//   {
//     key: 3,
//     name: '王小帅',
//     number: '003',
//     editable: false,
//     department: '财务部'
//   }
// ]

export default {
  name: 'UserForm',
  props: ['dataSourcef','firstDepartf'],
  i18n: require('./i18n-user'),
  data () {
    return {
      dataSource: this.dataSourcef,
      firstDepart:this.firstDepartf,
      columns,
      isadmins:['普通成员','分公司管理员','系统管理员'],
      defaultAd: 0,
      departID : 0,

    //  修改用户信息的三个数据
      nameValue:'',
      nameiS:false,
      passValue:'',
      passIs:false,
      adminValue:'普通成员',
      isAd:0,
      adis:false,
      pid:0,
      pname:'',
      pis:false,
      departValue:'',
      textKey:0,
      textColumn:'',
    }
  },
  created() {
  },

  computed: {
    dataColumns() {
      return this.columns.map(column => {
        column.title = this.$t('table.' + column.key)
        return column
      })
    },
    ...mapGetters('account', ['user']),
  },
  methods: {
    //增删改结束后方法
    textEnd(){
      this.nameValue = '';
      this.nameiS = false;
      this.passValue = '';
      this.passIs = false ;
      this.adminValue = '';
      this.isAd = 0;
      this.adis = false;
      this.pis = false;
      this.pid = 0;
      this.pname = ''
    },


    handleSubmit (e) {
      e.preventDefault()
    },
    newMember () {

      this.dataSource.push({
        key: this.dataSource.length + 1,
        name: '',
        number: '',
        department: this.firstDepart[0].pname,
        isadmin:'普通成员',
        editable: true,
        isNew: true
      })
    },
    remove (key,id) {

      var formdata = {};
      formdata["uid"] = this.user.id;
      formdata["id"] = id;
      if( id >= 0){
        var formdataSt = JSON.stringify(formdata)
        delUser(formdataSt).then( (response) => {
          if(response.data.state == 1){
            const newData = this.dataSource.filter(item => item.key !== key)
            this.dataSource = newData
            this.$message.success(response.data.message);
          }else{
            this.$message.error(response.data.message);
          }

        })
      }else{
        const newData = this.dataSource.filter(item => item.key !== key)
        this.dataSource = newData
      }
    },
    //权限选择
    adminChange(e){
      this.adis = true
      this.adminValue = this.isadmins[e];
      this.isAd = e;
    },

    departChange(e){
      this.pis = true
      const valueList = e.toString().split(",");
      this.pname = valueList[0];
      this.pid = valueList[1];
    },
    saveRow (key) {
      var formdata = {};
      formdata["uid"] = this.user.id;
      let target = this.dataSource.filter(item => item.key === key)[0]

      if(target['id']){
      //  修改
        formdata["id"] = target['id'];
      }else{
      //  添加
        if(this.nameValue  == "" || this.nameValue  ==null || this.passValue == "" ||  this.passValue ==null){
          this.$message.error("未填写账号或密码，请检查！");
          return ;
        }
      }
      if (target) {
        if(this.nameiS){
          formdata["uname"] = this.nameValue.trim()
          if(formdata["uname"]  == "" || formdata["uname"]  ==null ){
            this.$message.error("未填写账号，请检查！");
            return ;
          }
        }
        if(this.passIs){
          formdata["password"] = this.passValue.trim()
          if(formdata["password"] == "" ||  formdata["password"] ==null){
            this.$message.error("未填写密码，请检查！");
            return ;
          }
        }
        if(this.adis){
          formdata["isAd"] = this.isAd

        }
        if( this.pis){
          formdata["pid"] = this.pid;
          formdata['pname'] = this.pname
        }
      }


      var formdataSt = JSON.stringify(formdata)
      setUser(formdataSt).then( (response) => {
        if(response.data.state == 1){
          target.editable = false
          target.isNew = false

          if (target) {
            if(this.nameiS){
              target["name"] = this.nameValue
            }
            if(this.passIs){
              target["password"] = this.passValue
            }
            if(this.adis){
              target["isadmin"] = this.adminValue

            }
            if( this.pis){
              target['department'] = this.pname
            }
            this.$message.success(response.data.message);
          }else{
            this.$message.error(response.data.message);
          }
        }
        this.textEnd();

      })


    },
    toggle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = !target.editable
      this.defaultAd = target.isadmin
    },
    getRowByKey (key, newData) {
      const data = this.dataSource
      return (newData || data).filter(item => item.key === key)[0]
    },
    cancle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
    },
    handleChange (value, key, column) {

      if(column == "name"){
        this.nameValue = value  ;
        this.nameiS = true;
      }else if(column == "password"){
        this.passValue = value;
        this.passIs = true;
      }
      this.textKey = key;
      this.textColumn = column;
      // const newData = this.dataSource
      // const target = newData.filter(item => key === item.key)[0]
      // if (target) {
      //   target[column] = value
      //   this.dataSource = newData
      // }
    }
  }
}
</script>

<style scoped>

</style>
