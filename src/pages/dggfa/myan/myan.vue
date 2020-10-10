<template>
  <div class="analysis">

    <a-row  :gutter="[24, 24]" >
      <!-- 接通率 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('nowjietonglv')" :total="otherDate.v1_1 ">
          <!--          <a-tooltip :title="$t('introduce01')" slot="action">-->
          <!--            <a-icon type="info-circle-o"/>-->
          <!--          </a-tooltip>-->
            <div>
              <a-select :default-value="user.pname" style="width: 130px;position: absolute;top: -110px;right: 0px"
                        @change="changeMini">

                <a-select-option v-for="(item,index) in firstDepart" :key="index" :value="item.pname+','+item.id">
<!--                  <a-tooltip :title="item.pname" slot="action">-->
                    {{ item.pname }}
<!--                  </a-tooltip>-->
                </a-select-option>
              </a-select>
            </div>

            <div >
              <mini-area v-if="loadMini" :jietonglv="v1data"/>
            </div>
            <div v-if="loadMini" slot="footer">{{ $t('dianhualiang') }}<span> {{ (otherDate.v1_2)}} </span>
              <trend  style="margin-left: 1.5rem" :term="$t('reach')"  :percent="otherDate.v1_3" :is-increase="true" :scale="0"  v-if=" otherDate.v1_3 >= 100"/>
              <trend style="margin-left: 1.5rem"  :term="$t('reach')" :target="100" :value=" 100 - otherDate.v1_3 " :scale="0"  v-else/>
            </div>

        </chart-card>
      </a-col>



      <!-- 接通量 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title=" $t('nowjietongliang')" :total="otherDate.v2_1">
          <a-tooltip :title="$t('introduce02') " slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <double-bar v-if="loadMini" :jietongliang="v2data"/>
          </div>
          <div v-if="loadMini" slot="footer">
            <span >{{ $t('average') }} {{otherDate.v2_2}} %</span>
            <trend style="margin-left: 1.5rem" :term="$t('reach')"  :percent="otherDate.v2_3" :is-increase="true" :scale="0"  v-if=" otherDate.v2_3 >= 100"/>
            <trend style="margin-left: 1.5rem"  :term="$t('reach')" :target="100" :value=" 100 - otherDate.v2_3 " :scale="0"  v-else/>
          </div>
        </chart-card>
      </a-col>

      <!-- 30/60秒时长 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('secondliang')" :total="otherDate.v3_1 ">
                    <a-tooltip :title="$t('introduce05')" slot="action">
                      <a-icon type="info-circle-o"/>
                    </a-tooltip>

          <div>
            <sec-bar v-if="loadMini" :secdata="v3data"/>
          </div>
          <div v-if="loadMini" slot="footer">
            <span>{{ $t('average') }} {{ otherDate.v3_2}}</span>
            <trend style="margin-left: 0.7rem" :term="$t('reach')"  :percent="otherDate.v3_3" :is-increase="true" :scale="0"  v-if=" otherDate.v3_3 >= 100"/>
            <trend style="margin-left: 0.7rem"  :term="$t('reach')" :target="100" :value=" 100 - otherDate.v3_3 " :scale="0"  v-else/>
            /
            <trend    :percent="otherDate.v3_4" :is-increase="true" :scale="0"  v-if=" otherDate.v3_4 >= 100"/>
            <trend    :target="100" :value=" 100 - otherDate.v3_4 " :scale="0"  v-else/>

          </div>
        </chart-card>
      </a-col>


      <!-- 时长 -->
      <a-col :sm="24" :md="12" :xl="5">
        <chart-card :loading="loading" :title="$t('nowshichang')" :total="otherDate.v4_1">
          <a-tooltip :title="$t('introduce03')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>
          <div>
            <mini-bar v-if="loadMini" :tonghuatime="v4data"/>
          </div>
          <div v-if="loadMini" slot="footer">
            <span>{{ $t('average') }} {{ otherDate.v4_2 }}</span>
            <trend style="margin-left: 0.7rem" :term="$t('reach')"  :percent="otherDate.v4_3" :is-increase="true" :scale="0"  v-if=" otherDate.v4_3 >= 100"/>
            <trend style="margin-left: 0.7rem"  :term="$t('reach')" :target="100" :value=" 100 - otherDate.v4_3 " :scale="0"  v-else/>
          </div>
        </chart-card>
      </a-col>

      <!-- 费用 -->
      <a-col :sm="24" :md="12" :xl="4"  >
        <chart-card :loading="loading" :title="$t('nowmoney')" :total="'¥' + otherDate.v5_1.toFixed(2)">
          <a-tooltip :title="$t('introduce04')" slot="action">
            <a-icon type="info-circle-o"/>
          </a-tooltip>

          <h1 style="font-weight: bolder" v-if="(otherDate.v5_5 == 0) && (user.isAd == 0)">未设置费用明细</h1>
          <h1 style="font-weight: bolder" v-if="otherDate.v5_5 == 0  && (user.isAd == 1)">去设置费用明细 <a-icon type="tool" theme="twoTone"/></h1>

          <div  v-if="otherDate.v5_5 != 0">
            <mini-progress v-if="loadMini" :target="otherDate.v5_2" :residue="otherDate.v5_1" />
          </div>
          <div v-if="loadMini" slot="footer" style="white-space: nowrap;overflow: hidden">
            <span>{{ $t('average') }} {{otherDate.v5_3}}</span>

            <trend style="margin-left: 0.7rem" :term="$t('reach')"  :percent="otherDate.v5_4" :is-increase="true" :scale="0"  v-if=" otherDate.v5_4 >= 100"/>
            <trend style="margin-left: 0.7rem"  :term="$t('reach')" :target="100" :value=" 100 - otherDate.v5_4 " :scale="0"  v-else/>
          </div>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" style="margin-top: 24px;height:1100px" :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1"  size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" @change="changeTab" style="height: 1100px">

          <div class="extra-wrap" slot="tabBarExtraContent">
            <a-button  type="primary" @click="showModal" style="width: 180px;margin-right: 100px">
              生成日报
            </a-button>
            <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </a-modal>
          </div>


          <a-tab-pane :loading="loading" tab="分公司内比" key="1" >

            <div style="margin-top: -10px">
              <a-row >
                <a-col :span="20">
                  <div>
                    <a-radio-group default-value="a" button-style="solid" @change="typeChange">
                      <a-radio-button value="a">
                        日详情
                      </a-radio-button>
                      <a-radio-button value="b">
                        日环比
                      </a-radio-button>
                      <a-radio-button value="c">
                        周环比
                      </a-radio-button>

                    </a-radio-group>

                    <a-date-picker v-if="typeValue == 'a'" :defaultValue="moment(viewDate,'YYYY-MM-DD')" @change="dateChange01" style="margin-left: 5px" :disabled-date="disableDate"/>

                    <a-select :default-value="user.pname" style="width: 220px;margin-left: 5px;z-index: 92"
                              @change="departChange01">
                      <a-select-option v-for="(item,index) in firstDepart" :key="index" :value="item.pname+','+item.id">
                        <a-tooltip :title="item.pname" slot="action">
                          {{ item.pname }}
                        </a-tooltip>
                      </a-select-option>
                    </a-select>

                    <a-button  type="primary" @click="changeBig" style="width: 180px;;margin-left: 5px">
                      查询
                    </a-button>
                  </div>
                </a-col>
              </a-row>
            </div>

<!--            日详情-->
            <a-row style="margin-top: 20px"  v-if="typeValue == 'a'">
              <a-col :span="16" style="z-index: 90">
                <left-bar v-if="loadBig"  title="分公司接通量（单位：通)"  :jtl="v1Bigdata" :phone-amount="title.phoneAmount" :phone-done="title.phoneDone" />
              </a-col>

              <a-col :span="8" >
                <right-jtl v-if="loadBig" title="分公司接通率（单位：%）" style="margin-left: -200px"  :rightDate="v2Bigdata" :jtlv="title.jtlv"></right-jtl>
              </a-col>

              <a-col :span="8" style="margin-top: 10px">
                <left-bardw  v-if="loadBig"  title=" 分公司30/60秒量（单位：通）" :leftdw-data="v3Bigdata" :s30="title.amount30s" :s60="title.amount60s"/>
              </a-col>

              <a-col :span="8" style="margin-top: 10px;z-index: 100">

                <timedw v-if="loadBig"  title="分公司通话时长（单位：秒）" :time-data="v4Bigdata" :time-amount="title.timeAmount"></timedw>

              </a-col>

              <a-col :span="8" style="margin-top: 10px;z-index: 99">

                <right-jtldw  v-if="loadBig" title="分公司费用（单位：元）" :money-data="v5Bigdata" :money-amount="title.moneyAmount"></right-jtldw>

              </a-col>

            </a-row>


<!--            日环比-->
            <a-row style="margin-top: 20px"   v-if="typeValue == 'b'">
              <a-col :span="12" >

                <ri-huanbi  title="接通率日环比" :jtlv="huanbiV1Data"/>
              </a-col>

              <a-col :span="12" >

                <left-bar   />

              </a-col>

              <a-col :span="12" >
                <double-barld   />
              </a-col>

              <a-col :span="12" >

                <left-bar   />

              </a-col>

            </a-row>

            <!--            周环比-->
            <a-row style="margin-top: 20px"   v-if="typeValue == 'c'">
              <a-col :span="12" >

                <rihuanbi-lu   />
              </a-col>

              <a-col :span="12" >

                <left-bar   />

              </a-col>

              <a-col :span="12" >
                <left-bar   />
              </a-col>

              <a-col :span="12" >

                <left-bar   />

              </a-col>

            </a-row>

          </a-tab-pane>
          <a-tab-pane tab="分公司外比" key="2">

            <div style="margin-top: -10px">
              <a-row >
                <a-col :span="20">
                  <div>
                    <a-radio-group default-value="a" button-style="solid">

                      <a-radio-button value="b">
                        日环比
                      </a-radio-button>
                      <a-radio-button value="c">
                        周环比
                      </a-radio-button>

                    </a-radio-group>

                    <a-date-picker @change="onChange" style="margin-left: 5px"/>

                    <a-button  type="primary" @click="showModal" style="width: 180px;;margin-left: 5px">
                      查询
                    </a-button>
                  </div>
                </a-col>
              </a-row>
            </div>

            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <huanbi-bar/>
                <bar :title="$ta('visits|trend', 'p')" v-if="false"/>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list :title="$ta('stores|visits|ranking', 'p')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>

  </div>
</template>

<script>
import ChartCard from '../../../components/card/ChartCard'
import Bar from '../../../components/chart/Bar'
import RankingList from '../../../components/mychart/RankingList'
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
import LeftBardw from '../../../components/mychart/LeftBardw';
import RightJtldw from '../../../components/mychart/RightJtldw';
import Timedw from '../../../components/mychart/Timedw';

//日环比
import RiHuanbi from '../../../components/mychart/RihuanbiLu'
import DoubleBarld from '../../../components/mychart/DoubleBarld.vue'
import {getAll,getMini,getBig,getDayCompare} from "@/services/user";


//获取vuex数据
import {mapGetters} from 'vuex'
import moment from "moment"

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
      loadBig:true,
      loadMini:true,
      viewDate:"",
      bigDate:new Date(),
      bigviewDate:"",
      paramPid:74,
      paramPname:"武汉分公司",
      //一级部门数据
      firstDepart:[],

      otherDate:{
        v1_1:0,
        v1_2:0,
        v1_3:0,
        v2_1:0,
        v2_2:0,
        v2_3:0,
        v3_1:0,
        v3_2:0,
        v3_3:0,
        v3_4:0,
        v4_1:0,
        v4_2:0,
        v4_3:0,
        v5_1:0,
        v5_2:0,
        v5_3:0,
        v5_4:0,
        v5_5:0
      },

      v1data:[],
      v2data:[],
      v3data:[],
      v4data:[],

      v1Bigdata:[],
      v2Bigdata:[],
      v3Bigdata:[],
      v4Bigdata:[],
      v5Bigdata:[],
      title:{},

      huanbiV1Data:[],















      //分公司数选择器假数据
      treeData : [],
      value: undefined,

      visible: false,

    //  视图切换value
      typeValue:'a',

    }
  },
  watch: {
    value(value) {
      console.log(value);

    },
  },
  computed:{
    ...mapGetters('account', ['user']),
  },
  methods: {
    moment,
    //实时地区选择器
    changeMini(value) {
      this.loadMini = false
      const valueList = value.toString().split(",");
      var formdata = {};
      formdata["pname"] = valueList[0];
      formdata["pid"] = valueList[1];

      formdata["viewDate"] = this.viewDate;
      var formdataSt = JSON.stringify(formdata)
      getMini(formdataSt).then( (response)=> {
        const resdata =  response.data.data.mini;

        this.v1data = resdata.v1;
        this.v2data = resdata.v2;
        this.v3data = resdata.v3;
        this.v4data = resdata.v4;

        const temp = resdata.otherDate
        console.log(temp.v5_3)
        this.otherDate={
          v1_1: temp.v1_1 ? temp.v1_1 : 0,
          v1_2:temp.v1_2 ? temp.v1_2.toFixed(0) : 0,
          v1_3:temp.v1_3 ? temp.v1_3 : 0,
          v2_1:temp.v2_1 ? temp.v2_1.toFixed(2) : 0,
          v2_2:temp.v2_2 ? temp.v2_2.toFixed(2) : 0,
          v2_3:temp.v2_3 ? temp.v2_3: 0,
          v3_1:temp.v3_1 ? temp.v3_1 : 0,
          v3_2:temp.v3_2 ? temp.v3_2 : 0,
          v3_3:temp.v3_3 ? temp.v3_3 : 0,
          v3_4:temp.v3_4 ? temp.v3_4 : 0,
          v4_1:temp.v4_1 ? temp.v4_1.toFixed(0): 0,
          v4_2:temp.v4_2 ? temp.v4_2.toFixed(0) : 0,
          v4_3:temp.v4_3 ? temp.v4_3 : 0,
          v5_1:temp.v5_1 ? temp.v5_1 : 0,
          v5_2:temp.v5_2 ? temp.v5_2 : 0,
          v5_3:temp.v5_3 ? temp.v5_3.toFixed(2) : 0,
          v5_4:temp.v5_4 ? temp.v5_4 : 0,
          v5_5:temp.v5_5 ? temp.v5_5 : 0
        }
        this.loadMini = true
      })
    },

    typeChange(res){
      this.typeValue = res.target.value
      if(this.typeValue == "b"){
        var formdata = {};
        formdata["pname"] = this.paramPname;
        formdata["limit"] = 12;
        var formdataSt = JSON.stringify(formdata)
        getDayCompare(formdataSt).then( (response)=> {
          const resdata = response.data.data;
          this.huanbiV1Data = resdata.huanbiV1Data
          console.log(this.huanbiV1Data)
        })

      }
    },

    //内比日详情日期
    dateChange01(date, dateString) {
      console.log(date, dateString);
      this.bigDate = date;
      this.bigviewDate = dateString;
    },

    //内比日详情部门
    departChange01(value) {
      const valueList = value.toString().split(",");
      this.paramPname = valueList[0];
      this.paramPid = valueList[1];


    },

    //设置时间选择器的上限（今天）
    disableDate(end){
      if(new Date() <= new Date(end)){
        return true

      }else{
        return  false
      }
    },

    //实时地区选择器
    changeBig() {
      this.loadBig = false

      var formdata = {};
      formdata["pname"] = this.paramPname;
      formdata["pid"] = this.paramPid;
      formdata["viewDate"] = this.bigviewDate;
      var h ;
      if(this.viewDate == this.bigviewDate){
          h = this.bigDate.getHours()
      }else{
        h = 24
      }
      formdata["h"] = h;
      var formdataSt = JSON.stringify(formdata)
      console.log(formdata)
      getBig(formdataSt).then( (response)=> {
        const resBigdata = response.data.data.big;
        console.log(resBigdata)
        this.v1Bigdata = resBigdata.leftData
        this.v2Bigdata = resBigdata.rightData
        this.v3Bigdata = resBigdata.leftdwData
        this.v4Bigdata = resBigdata.timeViewData
        this.v5Bigdata = resBigdata.moneyViewData
        this.title = resBigdata.titleData
        this.loadBig = true

      })

    },








    onChange(date, dateString) {
      console.log(date, dateString);
    },
    changeTab(res){
      console.log(res)
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },


  },
  created() {
    this.loadMini = false;
    this.loadBig = false
    var formdata = {};
    formdata["pid"] = this.user.pid;
    formdata["pname"] = this.user.pname;
    var nowDate = new Date();
    var month = (nowDate.getMonth() + 1) < 10 ? ("0" + (nowDate.getMonth() + 1)) : (nowDate.getMonth() + 1)
    var day = nowDate.getDate() < 10 ? ("0" + nowDate.getDate()) : nowDate.getDate()
    this.viewDate =  nowDate.getFullYear()+"-"+month+"-"+day
    this.bigviewDate =  nowDate.getFullYear()+"-"+month+"-"+day
    // var h = nowDate.getHours();
    formdata["viewDate"] = this.viewDate;
    var formdataSt = JSON.stringify(formdata)
    getAll(formdataSt).then( (response) =>{
      const resdata =  response.data.data.mini;
      const resBigdata = response.data.data.big;

      this.firstDepart = response.data.data.firstDepart;
      this.v1data = resdata.v1;
      this.v2data = resdata.v2;
      this.v3data = resdata.v3;
      this.v4data = resdata.v4;

      // //第一个小图的峰值数据
      // if(response.data.data.jtldata){
      //   this.otherPeak = response.data.data.jtldata.otherData;
      //   this.jietonglv = response.data.data.jtldata.jietonglv;
      //
      // }
      const temp = resdata.otherDate
      this.otherDate={
            v1_1: temp.v1_1 ? temp.v1_1 : 0,
            v1_2:temp.v1_2 ? temp.v1_2.toFixed(0) : 0,
            v1_3:temp.v1_3 ? temp.v1_3 : 0,
            v2_1:temp.v2_1 ? temp.v2_1.toFixed(2) : 0,
            v2_2:temp.v2_2 ? temp.v2_2.toFixed(2) : 0,
            v2_3:temp.v2_3 ? temp.v2_3: 0,
            v3_1:temp.v3_1 ? temp.v3_1 : 0,
            v3_2:temp.v3_2 ? temp.v3_2 : 0,
            v3_3:temp.v3_3 ? temp.v3_3 : 0,
            v3_4:temp.v3_4 ? temp.v3_4 : 0,
            v4_1:temp.v4_1 ? temp.v4_1.toFixed(0): 0,
            v4_2:temp.v4_2 ? temp.v4_2.toFixed(0) : 0,
            v4_3:temp.v4_3 ? temp.v4_3 : 0,
            v5_1:temp.v5_1 ? temp.v5_1 : 0,
            v5_2:temp.v5_2 ? temp.v5_2 : 0,
            v5_3:temp.v5_3 ? temp.v5_3.toFixed(2) : 0,
            v5_4:temp.v5_4 ? temp.v5_4 : 0,
            v5_5:temp.v5_5 ? temp.v5_5 : 0
      };

          this.v1Bigdata = resBigdata.leftData
          this.v2Bigdata = resBigdata.rightData
          this.v3Bigdata = resBigdata.leftdwData
          this.v4Bigdata = resBigdata.timeViewData
          this.v5Bigdata = resBigdata.moneyViewData
          this.title = resBigdata.titleData

          this.loadMini = true;
          this.loadBig = true;
          this.loading = !this.loading

    })

  //   setTimeout(()=>{
  //     this.xx = false
  //     setTimeout(()=>{
  //       this.x1 = 6;
  //       this.x2 = 18;
  //       this.xx = true
  //     },100)
  //   },5500)
  },
  components: {
    RightJtl,
    Trend,
    RankingList,
    Bar,
    MiniProgress,
    MiniArea,
    MiniBar,
    SecBar,
    DoubleBar,
    ChartCard,
    HuanbiBar,
    LeftBar,
    LeftBardw,
    RightJtldw,
    DoubleBarld,
    Timedw,
    RiHuanbi,

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
