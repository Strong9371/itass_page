<template>
  <div class="mini-chart">
<!--      <v-chart :force-fit="true" :height="height" :data="tonghuatime" :padding="[36, -10, 18, -10]" :scale="scale">-->
<!--        <v-tooltip/>-->
<!--        <v-bar position="depart*timeamount" color="type"/>-->
<!--      </v-chart>-->


      <div  class="chart-content" :style="{height: 46}">
        <v-chart :forceFit="true" :height="height" :data="secdata" :padding="[36, -10, 18, -10]" :scale="scale">
          <v-tooltip />
          <v-bar position="dep*num" color="sec" :adjust="adjust" />
        </v-chart>
      </div>

  </div>
</template>

<script>


export default {
  name: 'SecBar',
  props: ['secdata'],
  data() {
    return {
      data: [],
      scale: [],
      tooltip: [],
      height: 100,
      adjust: [{
        type: 'dodge',
        marginRatio: 1 / 32,
      }],
    }
  },
  created() {
    this.tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y
      })
    ]

    this.scale = [{
      dataKey: 'x',
      min: 2
    }, {
      dataKey: 'y',
      title: '时间',
      min: 1,
      max: 22
    }]


  },
}
</script>

<style lang="less" scoped>
@import "index.less";
</style>


<!--<template>-->
<!--  <div>-->
<!--    <v-chart :forceFit="true" :height="height" :data="data">-->
<!--      <v-tooltip />-->
<!--      <v-axis />-->
<!--      <v-legend />-->
<!--      <v-bar position="月份*月均降雨量" color="name" :adjust="adjust" />-->
<!--    </v-chart>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--const DataSet = require('@antv/data-set');-->

<!--const sourceData = [-->
<!--  { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },-->
<!--  { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },-->
<!--];-->

<!--const dv = new DataSet.View().source(sourceData);-->
<!--dv.transform({-->
<!--  type: 'fold',-->
<!--  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],-->
<!--  key: '月份',-->
<!--  value: '月均降雨量',-->
<!--});-->
<!--const data = dv.rows;-->


<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      data,-->
<!--      height: 400,-->
<!--      adjust: [{-->
<!--        type: 'dodge',-->
<!--        marginRatio: 1 / 32,-->
<!--      }],-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->