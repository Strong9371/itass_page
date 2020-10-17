<template>
  <div class="bar">
    <h1 style="font-weight: bolder">{{title}}</h1>
    <a-empty v-if="samount.length < 1"></a-empty>
    <div class="chart">
      <v-chart :forceFit="true" :height="height" :data="samount">
<!--        <v-coord type="rect" direction="LT" />-->
        <v-tooltip />
        <v-legend />
        <v-axis  />
<!--        <v-axis dataKey="label" :label="label" />-->
        <v-bar position="label*value" color="type" :adjust="adjust" />
      </v-chart>
  </div>

  </div>
</template>

<script>
// const DataSet = require('@antv/data-set');
//
// const sourceData = [
//   { label: 'Mon.', series1: 2800, series2: 2260 },
//   { label: 'Tues.', series1: 1800, series2: 1300 },
//   { label: 'Wed.', series1: 950, series2: 900 },
//   { label: 'Thur.', series1: 500, series2: 390 },
//   { label: 'Fri.', series1: 170, series2: 100 },
// ];
//
// const dv = new DataSet.View().source(sourceData);
// dv.transform({
//   type: 'fold',
//   fields: ['series1', 'series2'],
//   key: 'type',
//   value: 'value',
// });
// const data = dv.rows;
//
const label = { offset: 12 };
const adjust = [{ type: 'dodge', marginRatio: 1 / 32 }];

export default {

  name: 'LeftBar',
  props:['title','samount'],

  data() {
    return {
      // data,
      height: 350,
      label: label,
      adjust: adjust,
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