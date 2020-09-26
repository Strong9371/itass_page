<template>
  <div class="bar">
    <h1 style="font-weight: bolder">分公司接通量（单位：通）</h1>

    <div class="chart">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-stack-bar position="时间*接通量" color="name" />
    </v-chart>
  </div>

  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

// const sourceData = [
//   { name: '融资', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
//   { name: '资质', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6 },
//   { name: '大客户', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
//   { name: '创发', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6 },
//   { name: '法律', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
// ];
//
// const dv = new DataSet.View().source(sourceData);
// dv.transform({
//   type: 'fold',
//   fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.','Jun3.', 'Jul3.', 'Aug3.'],
//   key: '月份',
//   value: '月均降雨量',
// });

const sourceData = [
  { name: '融资', '10:00': 63, '11:00': 28.8, '12:00': 39.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
  {name: '资质', '10:00': 62, '11:00': 18.8, '12:00': 34.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
  {name: '大客户', '10:00': 63, '11:00': 28.8, '12:00': 39.3, '14:00': 81.4, '15:00': 57, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
  { name: '创发', '10:00': 33, '11:00': 18.8, '12:00': 35.3, '14:00': 61.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
  { name: '法律', '10:00': 63, '11:00': 38.8, '12:00': 39.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00','20:00'],
  key: '时间',
  value: '接通量',
});

const data = dv.rows;


export default {
  name: 'LeftBar',
  props:['title','jtl'],
  data() {
    return {
      data,
      height: 350,
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