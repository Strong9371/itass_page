<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">

      <v-chart :forceFit="true" :height="height" :data="jietonglv"  :padding="[36, -10, 18, -10]" :scale="scale">
        <v-tooltip :crosshairs="crosshairs" />

        <v-line position="timeSt*nowjtl" :size="2" color="type" />
        <v-area position="timeSt*nowjtl" color="type" />
      </v-chart>
    </div>
  </div>
</template>

<script>

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x ,
    value: y
  })
]

const scale = [{
  dataKey: 'x',
  min: 0
}, {
  dataKey: 'y',
  title: '时间',
  min: -0.5,
  max: 0.7
}]

export default {
  name: 'MiniArea',
  props: ['jietonglv'],
  data () {
    return {
      data:[],
      scale,
      tooltip,
      height: 110,
      corsshairs:{ type: 'line' },
    }
  }
}
</script>

<style scoped>
  .mini-chart {
    position: relative;
    width: 100%
  }
  .mini-chart .chart-content{
    position: absolute;
    bottom: -28px;
    width: 100%;
  }
</style>
