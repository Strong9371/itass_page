<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 46}">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[36, -10, 18, -10]" :scale = "scale">
        <v-tooltip />
        <v-smooth-area position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>
// import {format} from 'date-fns'

const data = []
// const beginDay = new Date().getTime()

const fakeY = [0,6,4,0,6,4,0,6,4,8,9,43]
// const timeSt = ["08:00","09:00","10:00","11:00","08:00","09:00","10:00","11:00",]
for (let i = 8; i < (fakeY.length + 8); i += 1) {
  data.push({
    x: i  + ":00" ,
    y: fakeY[i-8]
  })
}

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x ,
    value: y
  })
]

const scale = [{
  dataKey: 'x',
  min: 1
}, {
  dataKey: 'y',
  title: '时间',
  min: 1,
  max: 22
}]

export default {
  name: 'MiniArea',
  data () {
    return {
      data,
      scale,
      tooltip,
      height: 100
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
