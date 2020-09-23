<template>
  <div class="analysis">

    <a-row style="margin-top: 0" :gutter="[24, 24]" >
      <!-- 接通率 -->
      <a-col :sm="24" :md="12" :xl="4">
        <chart-card :loading="loading" :title="$t('nowjietonglv')" :total="testtol">
          <!--          <a-tooltip :title="$t('introduce01')" slot="action">-->
          <!--            <a-icon type="info-circle-o"/>-->
          <!--          </a-tooltip>-->
          <div>
            <a-select default-value="lucy" style="width: 100px;position: absolute;top: -110px;right: 0px"
                      @change="handleChange">
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

          </div>
          <div>
            <mini-area :jietonglv="jietonglv"/>
          </div>
          <div slot="footer">{{ $t('averagelv') }}<span> 38 %</span></div>
        </chart-card>
      </a-col>



      <!-- 接通量 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title=" $t('nowjietongliang')" :total="myall.alldata + '/450' + '=45%'">
          <a-tooltip :title="$t('introduce02') " slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <double-bar :jietongliang="jietongliang"/>
          </div>
          <div slot="footer">
            <span >{{ $t('average') }} 45%</span>
            <trend style="margin-left: 1rem"  :percent="12" :is-increase="true" :scale="0" />
          </div>
        </chart-card>
      </a-col>

      <!-- 30/60秒时长 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('secondliang')" :total="secliang ">
                    <a-tooltip :title="$t('introduce05')" slot="action">
                      <a-icon type="info-circle-o"/>
                    </a-tooltip>

          <div>
            <sec-bar :secdata="secdata"/>
          </div>
          <div slot="footer">
            <span>{{ $t('average') }} 1900/1420 </span>
            <trend style="margin-left: 1rem" :term="$t('reach')" :target="100" :value="60" :scale="0"/>
            /
            <trend   :percent="12" :is-increase="true" :scale="0" />

          </div>
        </chart-card>
      </a-col>


      <!-- 时长 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('nowshichang')" total="189,345">
          <a-tooltip :title="$t('introduce03')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-bar :tonghuatime="tonghuatime"/>
          </div>
          <div slot="footer">
            <span>{{ $t('average') }} 265,256</span>
<!--             <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" />-->
            <trend style="margin-left: 1rem" :term="$t('reach')" :target="100" :value="60" :scale="0"/>
          </div>
        </chart-card>
      </a-col>

      <!-- 费用 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('nowmoney')" total="¥ 638">
          <a-tooltip :title="$t('introduce04')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-progress :target="phonecharge.target" :residue="phonecharge.residue"/>
          </div>
          <div slot="footer" style="white-space: nowrap;overflow: hidden">
            <span>{{ $t('average') }} 652</span>
<!--             <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" />-->
            <trend style="margin-left: 1rem;" :term="$t('reach')" :target="100" :value="46" :scale="0"/>
          </div>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" style="margin-top: 24px" :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1"  size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" @change="changeTab" style="height: 600px">
          <a-tab-pane loading="true" tab="分公司内比" key="1" style="height: 400px">

            <div style="background-color: white;">
              <a-row>
                <a-col :span="24">
                  <div>
                    <a-radio-group default-value="a" button-style="solid">
                      <a-radio-button value="a">
                        日详情
                      </a-radio-button>
                      <a-radio-button value="b">
                        日视图
                      </a-radio-button>
                      <a-radio-button value="c">
                        周视图
                      </a-radio-button>

                    </a-radio-group>

                    <a-date-picker @change="onChange" style="margin-left: 5px"/>

                    <a-tree-select
                        v-model="value"
                        style="width: 180px;margin-left: 5px"
                        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                        :tree-data="treeData"
                        placeholder="请选择分公司或以下业态"
                        change="se"
                    >
                    </a-tree-select>

                    <a-select   style="width: 180px;margin-left: 5px"  placeholder="请选择查询类型（如接通率）" >
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


                  </div>
                </a-col>

              </a-row>

            </div>


            <a-row style="margin-top: 20px">
              <a-col :span="16" >
<!--                <right-jtl></right-jtl>-->
                <left-bar   />
              </a-col>

              <a-col :span="8" >
                <div style=" text-align: center" >
                  <div style="margin: 40px auto  30px">
                    <a-button type="primary" @click="showModal" style="width: 200px">
                      生成日报
                    </a-button>
                    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </a-modal>
                  </div>
                </div>
                <right-jtl style=""></right-jtl>

                <div style=" text-align: center" >
                  <div style="margin: -100px auto  30px">
                    接通率
                  </div>
                </div>


              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="分公司外比" key="2">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :title="$ta('visits|trend', 'p')"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list :title="$ta('stores|visits|ranking', 'p')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <a-row style="margin: 0 -12px">
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" style="margin-top: 24px" :title="$t('search')">
          <hot-search/>
        </a-card>
      </a-col>
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">

        <a-card :loading="loading" :bordered="false" style="margin-top: 24px;" :title="$t('proportion')">
          <sales-data />
          <a-radio-group slot="extra" style="margin: -12px 0">
            <a-radio-button value="a">{{ $t('all') }}</a-radio-button>
            <a-radio-button value="b">{{ $t('online') }}</a-radio-button>
            <a-radio-button value="c">{{ $t('stores') }}</a-radio-button>
          </a-radio-group>
        </a-card>
      </a-col>
      <a-col :span="x2" v-if=xx>
        <huanbi-bar style="width: 100%" ></huanbi-bar>
        <!--                <ranking-list :title="$ta('stores|sales|ranking', 'p')" :list="rankList"/>-->
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChartCard from '../../../components/card/ChartCard'
import Bar from '../../../components/chart/Bar'
import RankingList from '../../../components/chart/RankingList'
import HotSearch from './HotSearch'
import SalesData from './SalesData'
import Trend from '../../../components/chart/Trend'

//我的插件
import MiniArea from '../../../components/mychart/MiniArea'
import DoubleBar from '../../../components/mychart/DoubleBar.vue'
import MiniBar from '../../../components/mychart/MiniBar'
import SecBar from '../../../components/mychart/SecBar'
import MiniProgress from '../../../components/mychart/MiniProgress'
import HuanbiBar from '../../../components/mychart/HuanbiBar'
import RightJtl from '../../../components/mychart/RightJtl';
import LeftBar from '../../../components/mychart/LeftBar';



const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'Analysis',
  i18n: require('./i18n'),
  data() {
    return {
      rankList,
      loading: true,
      fakeY: [1500, 1000, 1320, 860, 1135],
      //接通率假数据
      myall: {
        alldata: 231
      },

      //    我的测试数据
      //  接通率数据
      jietonglv: [
        {
          "timeSt": "08:30",
          "type": "接通量",
          "nowjtl": 0,
        },


        {
          "timeSt": "09:30",
          "type": "电话量",
          "nowjtl": 0.3,
        },
        {
          "timeSt": "09:30",
          "type": "接通量",
          "nowjtl": 0.6,
        },
        {
          "timeSt": "08:30",
          "type": "电话量",
          "nowjtl": 0.5,
        },
      ],
      testtol:1,
      //接通率其他数据
      jtldata: {},
      jietongliang: [
        {
          type: '电话量',
          depart: '融资',
          amount: 40
        }, {
          type: '接通量',
          depart: '融资',
          amount: 28
        },
        {
          type: '电话量',
          depart: '大客户',
          amount: 36
        },

        {
          type: '接通量',
          depart: '大客户',
          amount: 28
        },

        {
          type: '电话量',
          depart: '资质',
          amount: 29
        },
        {
          type: '接通量',
          depart: '资质',
          amount: 20
        },

        {
          type: '电话量',
          depart: '创发',
          amount: 22
        },
        {
          type: '接通量',
          depart: '创发',
          amount: 12
        },

        {
          type: '电话量',
          depart: '法律',
          amount: 26
        },
        {
          type: '接通量',
          depart: '法律',
          amount: 18
        },

      ],
      //接通量其他数据
      jtlidata: {},
      tonghuatime: [
        {
          depart: '融资',
          type: "时长",
          timeamount: 3800
        },
        {
          depart: '大客户',
          type: "时长",
          timeamount: 2800
        },
        {
          depart: '资质',
          type: "时长",
          timeamount: 2100
        },
        {
          depart: '创发',
          type: "时长",
          timeamount: 1200
        },
        {
          depart: '法律',
          type: "时长",
          timeamount: 2400
        },
      ],
      //30/60秒电话量
      secdata:[
          {
        sec:"30s",
        dep:'融资',
        num:122
      },
        {
          sec:"60s",
          dep:'融资',
          num:182
        },
        {
          sec:"30s",
          dep:'大客户',
          num:100
        },
        {
          sec:"60s",
          dep:'大客户',
          num:86
        },
        {
          sec:"30s",
          dep:'资质',
          num:45
        },
        {
          sec:"60s",
          dep:'资质',
          num:122
        },
        {
          sec:"30s",
          dep:'创发',
          num:45
        },
        {
          sec:"60s",
          dep:'创发',
          num:110
        },
        {
          sec:"30s",
          dep:'法律',
          num:45
        },
        {
          sec:"60s",
          dep:'法律',
          num:78
        },
      ],
      secliang:"185/152",
      //  接通时长其他数据
      thdata: {},
      phonecharge: {
        residue: 1100,
        //报警余额
        target: 1800,

      },
      //分公司数选择器假数据
      treeData : [
        {
          title: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [
            {
              value: '0-0-1',
              key: '0-0-1',
              title: 'Child Node1',
              scopedSlots: {
                // custom title
                title: 'title',
              },
            },
            {
              title: 'Child Node2',
              value: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
          key: '0-1',
        },
      ],
      value: undefined,
      x1:12,
      x2:12,
      xx:true

    }
  },
  watch: {
    value(value) {
      console.log(value);

    },
  },
  methods: {
    //实时地区选择器
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    changeTab(res){
      console.log(res)
    }

  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
    setTimeout(()=>{

      this.xx = false
      setTimeout(()=>{
        this.x1 = 6;
        this.x2 = 18;
        this.xx = true
      },100)
    },5500)
  },
  components: {
    RightJtl,
    Trend,
    SalesData,
    HotSearch,
    RankingList,
    Bar,
    MiniProgress,
    MiniBar,
    SecBar,
    MiniArea,
    DoubleBar,
    ChartCard,
    HuanbiBar,
    LeftBar

  }
}
</script>

<style lang="less" scoped>
.extra-wrap {
  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a:not(:first-child) {
      margin-left: 24px;
    }
  }
}

@media screen and (max-width: 992px) {
  .extra-wrap .extra-item {
    display: none;
  }
}

@media screen and (max-width: 576px) {
  .extra-wrap {
    display: none;
  }
}
</style>
