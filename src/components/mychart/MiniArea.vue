<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">
<!--      <v-chart :force-fit="true" :height="height" :data="jietonglv" :padding="[36, -10, 18, -10]" >-->
<!--        <v-tooltip />-->
<!--        <v-smooth-area position="timeSt*nowjtl"  color="type"/>-->
<!--      </v-chart>-->

      <v-chart :forceFit="true" :height="height" :data="jietonglv"  :padding="[36, -10, 18, -10]" :scale="scale">
        <v-tooltip :crosshairs="crosshairs" />
<!--        <v-axis dataKey="nowjtl" />-->
<!--        <v-legend />-->
        <v-line position="timeSt*nowjtl" :size="2" color="type" />
        <v-area position="timeSt*nowjtl" color="type" />
      </v-chart>
    </div>
  </div>
</template>

<script>

// const data = []
// const fakeY = [0.3,0.6,0.4,0.0,0.43,0.4,0.0,0.6,0.4]
// const timeSt = ["08:00","09:00","10:00","11:00","08:00","09:00","10:00","11:00",]
// for (let i = 8; i < (fakeY.length + 8); i += 1) {
//   data.push({
//     x: i  + ":00" ,
//     y: fakeY[i-8]
//   })
// }

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
