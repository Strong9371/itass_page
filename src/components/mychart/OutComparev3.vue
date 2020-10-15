<template>
  <div class="bar">
    <h1 style="font-weight: bolder">{{title}}</h1>
    <a-empty v-if="outV3Data.length < 1"></a-empty>
    <div class="chart">
      <v-chart :forceFit="true" :height="height" :data="outV3Data">
        <v-coord type="rect" />
<!--        direction="LB"-->
        <v-tooltip />
        <v-axis dataKey="country" :label="label" />
        <v-bar position="country*population" color="country"/>
      </v-chart>
    </div>
  </div>
</template>

<script>


const label = { offset: 12 };
export default {
  name: 'outV3',
  props:['title','outV3Data'],
  data() {
    return {
      // data,
      height: 400,
      label: label,
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