<template>
  <div class="analysis">

    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <!-- 接通率 -->
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="'武汉'+$t('nowjietonglv')" total="45 %">
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
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title=" $t('nowjietongliang')" :total="myall.alldata + '  通'">
          <a-tooltip :title="$t('introduce02') " slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <double-bar :jietongliang="jietongliang"/>
          </div>
          <div slot="footer"><span>{{ $t('amountliang') }} {{ myall.alldata }} 通</span>
            <span style="margin-left: 1rem;">{{ $t('averageliang') }} {{ myall.alldata }} 通 </span>
          </div>
        </chart-card>
      </a-col>
      <!-- 时长 -->
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('nowshichang')" total="189,345 秒">
          <a-tooltip :title="$t('introduce03')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-bar :tonghuatime="tonghuatime"/>
          </div>
          <div slot="footer">
            <span>{{ $t('averageshichang') }} 265,256秒</span>
            <!-- <span style="margin-left: 1rem;"> {{$t('dayreach')}} 60%</span> -->
            <!-- <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" /> -->
            <trend style="margin-left: 1rem;" :term="$t('dayreach')" :target="100" :value="60" :scale="0"/>
          </div>
        </chart-card>
      </a-col>
      <!-- 费用 -->
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="$t('nowmoney')" total="¥ 638 元">
          <a-tooltip :title="$t('introduce04')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-progress :target="phonecharge.target" :residue="phonecharge.residue"/>
          </div>
          <div slot="footer" style="white-space: nowrap;overflow: hidden">
            <span>{{ $t('averagemoney') }} 652元</span>
            <!-- <trend style="margin-right: 16px" :term="$t('wow')" :percent="12" :is-increase="true" :scale="0" /> -->
            <trend style="margin-left: 1rem;" :term="$t('daytake')" :target="100" :value="46" :scale="0"/>
          </div>
        </chart-card>
      </a-col>
    </a-row>
    <a-card :loading="loading" style="margin-top: 24px" :bordered="false" :body-style="{padding: '24px'}">
      <div style="background-color: white;">
        <a-row>
          <a-col :span="8">
            <div>
              <a-radio-group default-value="a" button-style="solid">
                <a-radio-button value="a">
                  日视图
                </a-radio-button>
                <a-radio-button value="b">
                  月视图
                </a-radio-button>

              </a-radio-group>

              <a-date-picker @change="onChange" style="margin-left: 5px"/>
            </div>
          </a-col>


          <a-col :span="8">
            <div>
              <a-tree-select
                  v-model="value"
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  :tree-data="treeData"
                  placeholder="Please select"
                  change="se"
              >

              </a-tree-select>
            </div>
          </a-col>
          <a-col :span="8">

          </a-col>
        </a-row>

      </div>
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">
            <div class="extra-item">
              <a>{{ $t('day') }}</a>
              <a>{{ $t('week') }}</a>
              <a>{{ $t('month') }}</a>
              <a>{{ $t('year') }}</a>
            </div>
            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" :tab="$t('sales')" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :title="$ta('stores|sales|trend', 'p')"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list :title="$ta('stores|sales|ranking', 'p')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('visits')" key="2">
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
          <sales-data/>
          <a-radio-group slot="extra" style="margin: -12px 0">
            <a-radio-button value="a">{{ $t('all') }}</a-radio-button>
            <a-radio-button value="b">{{ $t('online') }}</a-radio-button>
            <a-radio-button value="c">{{ $t('stores') }}</a-radio-button>
          </a-radio-group>
        </a-card>
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
import MiniProgress from '../../../components/mychart/MiniProgress'


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
          "type": "接通率",
          "nowjtl": 0,
        },
        {
          "timeSt": "08:30",
          "type": "接通率",
          "nowjtl": 0,
        },
        {
          "timeSt": "09:00",
          "type": "接通率",
          "nowjtl": 0.45,
        },
        {
          "timeSt": "09:00",
          "type": "融资",
          "nowjtl": 0.46,
        },
        {
          "timeSt": "09:00",
          "type": "融资1",
          "nowjtl": 0.23,
        },
        {
          "timeSt": "09:00",
          "type": "融资2",
          "nowjtl": 0.34,
        },
        {
          "timeSt": "09:00",
          "type": "融资3",
          "nowjtl": 0.41,
        },
        {
          "timeSt": "9:30",
          "type": "接通率",
          "nowjtl": 0.62,
        },
        {
          "timeSt": "10:00",
          "type": "接通率",
          "nowjtl": 0.27
        },
        {
          "timeSt": "10:30",
          "type": "接通率",
          "nowjtl": 0.38
        },
        {
          "timeSt": "11:30",
          "type": "接通率",
          "nowjtl": 0.25
        },
        {
          "timeSt": "18:30",
          "type": "接通率",
          "nowjtl": 0.37
        },
        {
          "timeSt": "19:00",
          "type": "接通率",
          "nowjtl": 0.45
        },
        {
          "timeSt": "19:30",
          "type": "接通率",
          "nowjtl": 0.32
        },
        {
          "timeSt": "20:00",
          "type": "接通率",
          "nowjtl": 0.27
        },
        {
          "timeSt": "20:30",
          "type": "接通率",
          "nowjtl": 0.38
        },
        {
          "timeSt": "21:30",
          "type": "接通率",
          "nowjtl": 0.25
        }
      ],
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

  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
    // const tim = setInterval(()=>{
    // },500)
  },
  components: {
    Trend,
    SalesData,
    HotSearch,
    RankingList,
    Bar,
    MiniProgress,
    MiniBar,
    MiniArea,
    DoubleBar,
    ChartCard

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
