


<template>
  <div class="bar">
    <h1 style="font-weight: bolder">{{ title }}</h1>
    <a-empty v-if="huanbiV1Data.length < 1"></a-empty>
    <div class="chart">
    <v-chart :force-fit="true" :height="height" :data="huanbiV1Data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="month*temperature" color="city" />
      <v-point position="month*temperature" color="city" :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
  </div>
  </div>
</template>

<script>
// const DataSet = require('@antv/data-set');
//
// const sourceData = [
//   { month: 'Jan', Tokyo: 0.45, London: 0.6 },
//   { month: 'Feb', Tokyo: 0.39, London: 0.42 },
//
// ];
//
// const dv = new DataSet.View().source(sourceData);
// dv.transform({
//   type: 'fold',
//   fields: ['Tokyo', 'London'],
//   key: 'city',
//   value: 'temperature',
// });
// const data = dv.rows;
// console.log(data)
const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];

export default {
  name: 'LeftBar',
  props:['title','huanbiV1Data'],
  data() {
    return {
      // data,
      scale,
      height: 350,
      style: { stroke: '#fff', lineWidth: 1 },
    };
  },
  created() {
    console.log(this.huanbiV1Data)
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
