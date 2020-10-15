<template>
  <form :autoFormCreate="(form) => this.form = form">
    <a-table style="overflow-y: scroll;height: 400px"
      :columns="dataColumns"
      :dataSource="dataSource"
      :pagination="false"
    >
      <template  v-for="(col, i) in ['name', 'password','isadmin', 'department']" :slot="col" slot-scope="text, record">
          <a-input
            :key="col"
            v-if="record.editable && (i != 3)"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columns[i].title"
            @change="e => handleChange(e.target.value, record.key, col)"
          />

        <a-select default-value="lucy" style="width: 340px;margin-top: -10px;margin-bottom: -10px" v-if="record.editable && (i == 3)" :key="col">
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            Lucy
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </a-select>

          <template v-if="!record.editable">{{text}}</template>
      </template>
      <template slot="operation" slot-scope="text, record">
        <template v-if="record.editable">
          <span v-if="record.isNew">
            <a @click="saveRow(record.key)">{{$t('add')}}</a>
            <a-divider type="vertical" />
            <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key)">
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
          <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key)">
            <a>{{$t('delete')}}</a>
          </a-popconfirm>
        </span>
      </template>
    </a-table>
    <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">{{$t('newMember')}}</a-button>
  </form>
</template>

<script>
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

const dataSource = [
  {
    key: 1,
    name: '小明',
    number: '001',
    editable: false,
    department: '行政部'
  },
  {
    key: 2,
    name: '李莉',
    number: '002',
    editable: false,
    department: 'IT部'
  },
  {
    key: 3,
    name: '王小帅',
    number: '003',
    editable: false,
    department: '财务部'
  }
]

export default {
  name: 'UserForm',
  i18n: require('./i18n-user'),
  data () {
    return {
      columns,
      dataSource
    }
  },
  computed: {
    dataColumns() {
      return this.columns.map(column => {
        column.title = this.$t('table.' + column.key)
        return column
      })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
    },
    newMember () {
      this.dataSource.push({
        key: this.dataSource.length + 1,
        name: '',
        number: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.dataSource.filter(item => item.key !== key)
      this.dataSource = newData
    },
    saveRow (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
      target.isNew = false
    },
    toggle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = !target.editable
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
      const newData = [...this.dataSource]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.dataSource = newData
      }
    }
  }
}
</script>

<style scoped>

</style>
