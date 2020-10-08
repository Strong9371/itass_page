<template>
  <div class="bar">
    <h1 style="font-weight: bolder;margin-left: 90px">
      {{title}}
      <h4  style="display: inline-block;margin-left: 20px;font-weight: lighter">总费用：{{moneyAmount}} </h4>
    </h1>
    <a-empty v-if="moneys.length < 1"></a-empty>

    <div class="chart" style="margin-top: 15px" v-else>
    <v-chart :forceFit="true" :height="height" :data="moneys" :scale="scale">
      <v-tooltip :showTitle="false" dataKey="items*percent" />
      <v-axis />
<!--      <v-legend  dataKey="item" />-->

      <v-legend  dataKey="items" />

      <v-pie position="percent" color="items" :vStyle="pieStyle" :label="labelConfig" />
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6" />
    </v-chart>
  </div>
<!--    <p style="position:absolute;right: 50px;bottom: 180px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 158px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 136px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 114px">68</p>-->
<!--    <p style="position:absolute;right: 50px;bottom: 92px">68</p>-->
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

// const sourceData = [
//   { items: '事例一', count: 40 },
//   { items: '事例二', count: 21 },
//   { items: '事例三', count: 17 },
//   { items: '事例四', count: 13 },
//   { items: '事例五', count: 9 }
// ]
const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}]

export default {
  name: 'RightDw',
  props:['title',"moneyAmount","moneyData"],
  data () {
    return {
      moneys:[],
      scale,
      height: 350,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.items + ': ' + item.point.count
        }
      }]
    }
  },
  created() {

    const dv = new DataSet.View().source(this.moneyData)
    dv.transform({
      type: 'percent',
      field: 'count',
      dimension: 'items',
      as: 'percent'
    })
    this.moneys = dv.rows
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
