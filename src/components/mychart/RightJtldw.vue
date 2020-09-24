<template>
  <div class="bar">
    <h1 style="font-weight: bolder">分公司费用（单位：元）</h1>

    <div class="chart">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <v-legend  dataKey="item" />

<!--      <v-legend  dataKey="item" position="right" :offsetX="-180"/>-->

      <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig" />
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>

<!--    <p style="position:absolute;right: 100px;bottom: 180px">68</p>-->
<!--    <p style="position:absolute;right: 100px;bottom: 158px">68</p>-->
<!--    <p style="position:absolute;right: 100px;bottom: 136px">68</p>-->
<!--    <p style="position:absolute;right: 100px;bottom: 114px">68</p>-->
<!--    <p style="position:absolute;right: 100px;bottom: 92px">68</p>-->

  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

const sourceData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
]

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const data = dv.rows
export default {
  name: 'SalesData',
  data () {
    return {
      data,
      scale,
      height: 385,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + item.point.count
        }
      }]
    }
  }
}
</script>

<style scoped lang="less">
.bar{
  position: relative;
  .chart{
  }
}
</style>
