<template>
  <div>
    <a-card  class="card" :title="$t('user')" :bordered="false">
      <user-form :dataSource="userData"/>
    </a-card>
    <a-card class="card" :title="$t('repository')" :bordered="false">
      <repository-form ref="repository" :showSubmit="true" :depart-data="departData" :children-dpart="childrenDpart"/>
    </a-card>
    <a-card class="card" :title="$t('task')" :bordered="false">
      <task-form ref="task" :showSubmit="false" />
    </a-card>

  </div>
</template>

<script>
import RepositoryForm from './RepositoryForm'
import TaskForm from './TaskForm'
import UserForm from './UserForm'

//获取vuex数据
import {mapGetters} from 'vuex'
import {getSet} from "@/services/user";


export default {
  name: 'AdvancedForm',
  components: { UserForm, TaskForm, RepositoryForm},
  i18n: require('./i18n'),
  data () {
    return {
      loading: false,
      userData : [],
      departData:[],
      childrenDpart:[]
    }
  },
  computed: {
    desc() {
      return this.$t('desc')
    },
    ...mapGetters('account', ['user']),

  },

  methods: {


  },
  created() {
    var formdata = {};
    formdata["id"] = this.user.id;
    formdata["pid"] = this.user.pid;
    formdata["pname"] = this.user.pname;
    formdata["isAd"] = this.user.isAd;

    var formdataSt = JSON.stringify(formdata)
    getSet(formdataSt).then( (response) => {
      this.userData = response.data.data.userByPid
      this.departData = response.data.data.departByPid
      this.childrenDpart = this.departData.splice(1,this.departData.length-1)
      console.log(this.departData)
      console.log(this.childrenDpart)
    })
  }
}
</script>

<style lang="less" scoped>
  .card{
    margin-bottom: 24px;
  }
</style>
