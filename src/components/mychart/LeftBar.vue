<template>
  <div class="bar">
    <h4>{{title}}</h4>
    <div class="chart">
<!--      <v-chart :force-fit="true" height="400" :data="data" :padding="[24, 0, 0, 0]">-->
<!--        <v-tooltip />-->
<!--        <v-axis />-->
<!--        <v-bar position="x*y"/>-->
<!--      </v-chart>-->

      <v-chart :forceFit="true" :height="height" :data="data" :padding="[24, 0, 0, 0]">
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
  { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
  { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
  { name: 'Berlin2', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
  { name: 'Berlin3', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
  { name: 'Berlin4', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
  key: '月份',
  value: '月均降雨量',
});
const data = dv.rows;

export default {
  data() {
    return {
      data,
      height: 300,
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
