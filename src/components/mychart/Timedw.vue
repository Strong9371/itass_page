<template>
  <div class="bar">
    <h1 style="font-weight: bolder;margin-left: 90px">
      {{title}}
      <h4  style="display: inline-block;margin-left: 20px;font-weight: lighter">总时长：{{timeAmount}} </h4>
    </h1>
    <a-empty v-if="times.length < 1"></a-empty>
    <div class="chart" style="margin-top: 35px" v-else>
      <v-chart :forceFit="true" :height="height" :data="times" :scale="scale">
        <v-tooltip :showTitle="false" dataKey="item*percent" />
        <v-axis />
        <v-legend dataKey="item"  style="width: 30px"/>
        <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
        <v-coord type="theta" />
      </v-chart>
    </div>
<!--    <p style="position:absolute;right: 35px;bottom: 180px">68</p>-->
<!--    <p style="position:absolute;right: 35px;bottom: 158px">68</p>-->
<!--    <p style="position:absolute;right: 35px;bottom: 136px">68</p>-->
<!--    <p style="position:absolute;right: 35px;bottom: 114px">68</p>-->
<!--    <p style="position:absolute;right: 35px;bottom: 92px">68</p>-->
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

export default {
  name: 'Timedw',
  props:['title',"timeAmount","timeData"],
  data() {
    return {
      times:[],
      scale,
      height: 330,
      pieStyle: {
        stroke: "#fff",
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + item.point.count;
        }
      }],
    };
  },
  created() {
    // this.sourceData = [
    //   { item: '事例一', count: 40 },
    //   { item: '事例二', count: 21 },
    //   { item: '事例三', count: 17 },
    //   { item: '事例四', count: 13 },
    //   { item: '事例五', count: 9 }
    // ];

    const dv = new DataSet.View().source(this.timeData);
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    this.times = dv.rows;
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
