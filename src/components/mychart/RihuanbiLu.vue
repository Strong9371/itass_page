<template>
  <div class="bar">
    <h1 style="font-weight: bolder">{{ title }}</h1>

    <div class="chart">
      <v-chart :force-fit="true" :height="height" :data="jtlv"  :scale = "scale">
        <v-axis />
        <v-legend />
        <v-tooltip />
        <v-smooth-area position="x*y" />
      </v-chart>
    </div>
  </div>
</template>

<script>


const tooltip = [
  'x*y',
  (x) => ({
    name: x ,
    value: "sad"
  })
]

const scale = [{
  dataKey: 'x',
  min: 10
}, {
  dataKey: 'y',
  title: '时间',
  min: 1,
  max: 1
}]

export default {
  name: 'RiHuanbi',
  props:['title','jtlv'],
  data () {
    return {
      scale,
      tooltip,
      height: 350
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
