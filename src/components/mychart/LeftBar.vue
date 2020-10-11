<template>
  <div class="bar">
    <h1 style="font-weight: bolder;">{{title}}
      <h4 v-if="phoneAmount"  style="display: inline-block;margin-left: 20px;font-weight: lighter">总电话量：{{phoneAmount}},  接通量：{{phoneDone}}</h4>
    </h1>
    <a-empty v-if="jtl.length < 1"></a-empty>

    <div class="chart" v-else>
    <v-chart :forceFit="true" :height="height" :data="jtl">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-stack-bar position="时间*接通量" color="name" />

    </v-chart>

  </div>

  </div>
</template>

<script>
// const DataSet = require('@antv/data-set');
// const sourceData = [
//   { name: '融资', '10:00': 63, '11:00': 28.8, '12:00': 39.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
//   {name: '资质', '10:00': 62, '11:00': 18.8, '12:00': 34.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
//   {name: '大客户', '10:00': 63, '11:00': 28.8, '12:00': 39.3, '14:00': 81.4, '15:00': 57, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
//   { name: '创发', '10:00': 33, '11:00': 18.8, '12:00': 35.3, '14:00': 61.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
//   { name: '法律', '10:00': 63, '11:00': 38.8, '12:00': 39.3, '14:00': 81.4, '15:00': 47, '16:00': 20.3, '17:00': 24, '18:00': 35.6 ,'20:00': 20.3},
// ];
// const dv = new DataSet.View().source(sourceData);
// dv.transform({
//   type: 'fold',
//   fields: ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00','20:00'],
//   key: '时间',
//   value: '接通量',
// });
// const data = dv.rows;
// console.log(data)

export default {

  name: 'LeftBar',
  props:['title','jtl','phoneAmount','phoneDone'],
  data() {
    return {
      // data,
      height: 350,
    };
  },
  created() {
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