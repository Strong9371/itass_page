<template>
  <div class="bar">
    <h1 style="font-weight: bolder ;margin-left: 200px">分公司接通率（单位：%）</h1>

    <div class="chart">
    <v-chart :force-fit="true"   :height="height" :padding="padding" :data="data" :scale="scale">
      <v-tooltip title="question" />
      <v-coord type="polar" :inner-radius="0.1" direction="rotate" />
      <v-interval
          :position="interval1Opts.position"
          :color="interval1Opts.color"
          :tooltip="interval1Opts.tooltip"
          :label="interval1Opts.label"
      />
      <v-guide v-for="(obj, index) in data"
               :key="index"
               type="text"
               :top="true"
               :position="getPosition(obj)"
               :content="getContent(obj)"
               :v-style="style"

      />
    </v-chart>
    </div>

    <div style="position: absolute;right: 52px;bottom: 175px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: #3ba2ff;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>
    <div style="position: absolute;right: 52px;bottom: 155px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: #35cbcb;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>
    <div style="position: absolute;right: 52px;bottom: 135px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: #4fcb74;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>
    <div style="position: absolute;right: 52px;bottom: 115px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: #fbd438;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>
    <div style="position: absolute;right: 52px;bottom: 95px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: #f2647c;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>
    <div style="position: absolute;right: 52px;bottom: 75px;text-align: center;height: 22px">
      <div style="width: 8.5px;height: 8.5px;background-color: orange;border-radius:50%;display: inline-block" ></div>
      <p style="display: inline-block ;margin-left: 10px;font-style: normal;font-size: small;color: #878787;white-space:pre">{{ txtx }}</p>
    </div>


<!--    <div style="position: absolute;right: 120px;bottom: 175px;">-->
<!--      <div style="width: 8px;height: 8px;background-color: #3ba2ff;border-radius:50%;margin-bottom: 13px" ></div>-->
<!--      <div style="width: 8px;height: 8px;background-color: #4fcb74;border-radius:50%;margin-bottom: 13px"></div>-->
<!--      <div style="width: 8px;height: 8px;background-color: #4fcb74;border-radius:50%;margin-bottom: 13px"></div>-->
<!--      <div style="width: 8px;height: 8px;background-color: #fbd438;border-radius:50%;margin-bottom: 13px"></div>-->
<!--      <div style="width: 8px;height: 8px;background-color: #f2647c;border-radius:50%;margin-bottom: 13px"></div>-->
<!--      <div style="width: 8px;height: 8px;background-color: orange;border-radius:50%"></div>-->
<!--    </div>-->
<!--    <p style="position:absolute;right: 50px;bottom: 262px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 240px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 218px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 196px">68</p>-->


    
  </div>
</template>

<script>
const data = [
  {"question":"分公司合计","percent":1,"percent01":0.5},
  {"question":"融资事业部","percent":1,"percent01":0.5},
  {"question":"资质事业部","percent":1,"percent01":0.5},
  {"question":"大客户事业部","percent":0.9,"percent01":0.45},
  {"question":"创发事业部","percent":1,"percent01":0.5},
  {"question":"法律事业部","percent":1,"percent01":0.5},

];

const scale = [{
  dataKey: 'percent',
  min: 0,
  max: 2,
}];

const interval1Opts = {
  position: 'question*percent',
  color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
  tooltip: ['percent', val => {
    return {
      name: '占比',
      value: val * 50 + '%',
    };
  }],
  label: ['percent01', {
    offset: -5,
  }],
};

export default {
  name: 'RightJtl',
  props:['title'],
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
      data,
      scale,
      interval1Opts,
      style:{
        textAlign: 'right',
      },
      txtx:'法律     168'
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
