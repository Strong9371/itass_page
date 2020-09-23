<template>
  <div class="bar">
    <h1 style="font-weight: bolder">分公司接通量（单位：通）</h1>

    <div class="chart">
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-stack-bar position="月份*月均降雨量" color="name" />
    </v-chart>
  </div>

  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const sourceData = [
  { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
  { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6 },
  { name: 'Londons', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
  { name: 'Berlins', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6 },
  { name: 'Londona', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 ,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6},
  { name: 'BerlinA', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4,'Jun3.': 20.3, 'Jul3.': 24, 'Aug3.': 35.6 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.','Jun3.', 'Jul3.', 'Aug3.'],
  key: '月份',
  value: '月均降雨量',
});
const data = dv.rows;

console.log(data)
export default {
  data() {
    return {
      data,
      height: 370,
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