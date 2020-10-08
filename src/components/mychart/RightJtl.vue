<template>
  <div class="bar">
    <h1 style="font-weight: bolder ;margin-left: 200px">{{title}}
      <h4  style="display: inline-block;margin-left: 20px;font-weight: lighter">总接通率：{{jtlv}} </h4>
    </h1>

    <a-empty v-if="rightDate.length < 1"></a-empty>
    <div class="chart" v-else>
    <v-chart :force-fit="true"   :height="height" :padding="padding" :data="rightDate" :scale="scale">
      <v-tooltip title="question" />
      <v-coord type="polar" :inner-radius="0.1" direction="rotate" />
      <v-interval
          :position="interval1Opts.position"
          :color="interval1Opts.color"
          :tooltip="interval1Opts.tooltip"
          :label="interval1Opts.label"
      />
      <v-guide v-for="(obj, index) in rightDate"
               :key="index"
               type="text"
               :top="true"
               :position="getPosition(obj)"
               :content="getContent(obj)"
               :v-style="style"

      />
    </v-chart>
    </div>
    <div style="position: absolute;right: 52px;bottom: 175px;height: 22px;" v-if="rightDate.length >= 1">
      <div style="margin-bottom: -10px"  v-for="(item,index) in rightDate" :key="index">
        <div :style="'width: 8.5px;height: 8.5px;background-color:'+  colorList[index]  + ';border-radius:50%;display: inline-block'" ></div>
        <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre;text-align: left">{{ item.question + "  :     " + item.percent01}}</p>
      </div>
<!--      <div style="margin-bottom: -10px">-->
<!--        <div style="width: 8.5px;height: 8.5px;background-color: #35cbcb;border-radius:50%;display: inline-block" ></div>-->
<!--        <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre;text-align: left">{{  rightDate[3].question + "  :     "+ rightDate[3].percent01 }}</p>-->
<!--      </div>-->
<!--      <div style="margin-bottom: -10px">-->
<!--        <div style="width: 8.5px;height: 8.5px;background-color: #4fcb74;border-radius:50%;display: inline-block" ></div>-->
<!--        <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ rightDate[2].question + "  :     " + rightDate[2].percent01 }}</p>-->
<!--      </div>-->
<!--      <div style="margin-bottom: -10px">-->
<!--        <div style="width: 8.5px;height: 8.5px;background-color: #fbd438;border-radius:50%;display: inline-block" ></div>-->
<!--        <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ rightDate[1].question + "  :     "+ rightDate[1].percent01 }}</p>-->
<!--      </div>-->
<!--      <div style="margin-bottom: -10px">-->
<!--        <div style="width: 8.5px;height: 8.5px;background-color: #f2647c;border-radius:50%;display: inline-block" ></div>-->
<!--        <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ rightDate[0].question + "  :     " + rightDate[0].percent01 }}</p>-->
<!--      </div>-->
    </div>




    
  </div>
</template>

<script>
// const data = [
//   {"question":"分公司合计","percent":1,"percent01":0.5},
//   {"question":"融资事业部","percent":1,"percent01":0.66},
//   {"question":"资质事业部","percent":1,"percent01":0.5},
//   {"question":"大客户事业部","percent":0.9,"percent01":0.45},
//   {"question":"创发事业部","percent":1,"percent01":0.5},
//   {"question":"法律事业部","percent":1,"percent01":0.5},
//
// ];

const scale = [{
  dataKey: 'percent',
  min: 0,
  max: 2,
}];



export default {
  name: 'RightJtl',
  props:['title',"rightDate","jtlv"],
  methods: {
    getPosition: (obj) => {
      return [ obj.question, 0 ];
    },
    getContent: (obj) => {
      return obj.question + ' ';
    },
  },

  data() {
    return {
      height: 370,
      padding:[ 40, 40, 130, 40 ],
      // data,
      scale,
      interval1Opts:{},
      style:{
        textAlign: 'right',
      },
      colorList:[
          "#3ba2ff",
          "#35cbcb",
          "#4fcb74",
          "#fbd438",
          "#f2647c",
          "#f264a2",
          "#4c57b8",
          "#d138fb",

      ]
    };
  },
  created() {
    this.interval1Opts = {
      position: 'question*percent',
      color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
      tooltip: ['percent', val => {
        return {
          name: '接通率',
          value: (val*50).toFixed(2) + '%',
        };
      }],
      label: ['percent01', {
        offset: -5,
      }],
    };
  }
};
</script>

<style scoped lang="less">
.bar{
  position: relative;
  .chart{
  }
}
</style>
