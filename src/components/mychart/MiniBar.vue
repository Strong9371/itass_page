<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">
      <v-chart :force-fit="true" :height="height" :data="tonghuatime" :padding="[36, -10, 18, -10]" :scale="scale">
        <v-tooltip/>
        <v-bar position="depart*timeamount" color="type"/>
      </v-chart>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MiniBar',
  props: ['tonghuatime'],
  data() {
    return {
      data: [],
      scale: [],
      tooltip: [],
      height: 100
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
