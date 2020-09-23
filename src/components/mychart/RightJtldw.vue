<template>
  <div class="bar">
    <h1 style="font-weight: bolder">分公司接通率（单位：%）</h1>

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
  </div>
</template>

<script>
const data = [
  {"question":"分公司合计","percent":1,"percent01":0.5},
  {"question":"融资事业部","percent":1,"percent01":0.5},
  {"question":"大客户事业部","percent":0.9,"percent01":0.45},
  {"question":"资质事业部","percent":1,"percent01":0.5},
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
      height: 450,
      padding:[ 40, 40, 130, 40 ],
      data,
      scale,
      interval1Opts,
      style:{
        textAlign: 'right',
      },
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
