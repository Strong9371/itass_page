<template>
  <div class="analysis">

    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <!-- 接通率 -->
      <a-col :sm="24" :md="12" :xl="6">
        <chart-card :loading="loading" :title="'武汉'+$t('nowjietonglv')" total="45 %">
          <a-tooltip :title="$t('introduce01')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-area :jietonglvdata="jietonglvdata"/>
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
            <double-bar/>
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
            <mini-bar :fd="fakeY"/>
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
            <mini-progress target="90" :percent="permoney" color="#13C2C2" height="8px"/>
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
          <a-col :span="12">
            <a-form style="max-width: 500px; margin: 0px 0px -20px;background-color: white;z-index: 9999;">
              <a-form-item :label="$t('payment')" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
                <a-select value="1" placeholder="ant-design@alipay.com">
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                </a-select>
              </a-form-item>
            </a-form>
          </a-col>
          <a-col :span="12">
            <a-form style="max-width: 500px; margin: 0px 0px -20px;background-color: white;z-index: 9999;">
              <a-form-item :label="$t('payment')" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
                <a-select value="1" placeholder="ant-design@alipay.com">
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                  <a-select-option value="1">ant-design@alipay.com</a-select-option>
                </a-select>
              </a-form-item>
            </a-form>
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
import DoubleBar from '../../../components/chart/DoubleBar.vue'
import MiniBar from '../../../components/chart/MiniBar'
import MiniProgress from '../../../components/chart/MiniProgress'
import Bar from '../../../components/chart/Bar'
import RankingList from '../../../components/chart/RankingList'
import HotSearch from './HotSearch'
import SalesData from './SalesData'
import Trend from '../../../components/chart/Trend'

//我的插件
import MiniArea from '../../../components/mychart/MiniArea'


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
      permoney: 20,

      //    我的测试数据
      //  接通率数据
      jietonglvdata: [
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


    }
  },
  methods: {},
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
    // const tim = setInterval(()=>{
    // 	this.permoney += 5
    // 	if(this.permoney > 90) {
    // 		clearInterval(tim)
    // 	}
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
