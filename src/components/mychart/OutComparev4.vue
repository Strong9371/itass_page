<template>
  <div class="bar">
    <h1 style="font-weight: bolder">{{title}}</h1>
    <a-empty v-if="outV4Data.length < 1"></a-empty>
    <div class="chart">
      <v-chart :forceFit="true" :height="height" :data="outV4Data">
        <v-tooltip />
        <v-axis />
        <v-legend />
        <v-bar position="country*amount" color="type" :adjust="adjust" />
      </v-chart>
    </div>
  </div>
</template>

<script>

export default {
  name: 'outV4',
  props:['title','outV4Data'],
  data() {

    return {
      // data,
      height: 400,
      adjust: [{
        type: 'dodge',
        marginRatio: 1 / 32,
      }],
    };
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