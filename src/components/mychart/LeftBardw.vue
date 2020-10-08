<template>
  <div class="bar">
    <h1 style="font-weight: bolder">
      {{title}}
      <h4  style="display: inline-block;margin-left: 20px;font-weight: lighter">总30s：{{s30}},  总60s：{{s60}}</h4></h1>
    <a-empty v-if="leftdwData.length < 1"></a-empty>
    <div class="chart" v-else>
      <v-chart :forceFit="true" :height="280" :data="leftdwData" padding="auto" :scale="scale">
        <v-tooltip />
        <v-axis dataKey="value" :show="false"/>
        <v-legend position='top-center'></v-legend>
        <v-coord direction='LB' type='rect'/>
        <v-facet type='mirror'
                 :fields="['type']"
                 :autoSetAxis="false"
                 :transpose="true"
                 :showTitle="false"
                 :padding="[0, 10, 0, 0]"
                 :eachView="eachView"/>
      </v-chart>
  </div>

  </div>
</template>

<script>
// const data = [{
//   country: '分公司',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '分公司',
//   type: '60s接通量',
//   value: 38
// },{
//   country: '融资',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '融资',
//   type: '60s接通量',
//   value: 38
// },{
//   country: '资质',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '资质',
//   type: '60s接通量',
//   value: 38
// },{
//   country: '大客户',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '大客户',
//   type: '60s接通量',
//   value: 38
// },{
//   country: '创发',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '创发',
//   type: '60s接通量',
//   value: 38
// },{
//   country: '法律',
//   type: '30s接通量',
//   value: 45
// }, {
//   country: '法律',
//   type: '60s接通量',
//   value: 38
// }];

const scale = [{
  dataKey: 'value',
  nice: true,
  alias: '接通量'
}];

const eachView = function(view, facet) {
  var facetIndex = facet.colIndex;
  if (facetIndex === 0) {
    view.axis('country', {
      position: 'top',
      label: {
        textStyle: {
          fill: '#aaaaaa',
          fontSize: 12
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      },
      line: {
        lineWidth: 0
      }
    });
  } else {
    view.axis('country', false);
  }
  var color = facetIndex === 0 ? '#1890ff' : '#2fc25b';
  view.interval().position('country*value').color(color).size(30).opacity(1).label('value', function(val) {
    var offset = -4;
    var shadowBlur = 2;
    var textAlign = facetIndex === 1 ? 'end' : 'start';
    var fill = 'white';
    if (val < 15) {
      offset = 4;
      textAlign = facetIndex === 1 ? 'start' : 'end';
      fill = '#666666';
      shadowBlur = 0;
    }
    return {
      //position: 'middle',
      offset: offset,
      textStyle: {
        fill: fill,
        shadowBlur: shadowBlur,
        shadowColor: 'rgba(0, 0, 0, .45)',
        textAlign: textAlign
      }
    };
  });
}
export default {
  name: 'LeftBardw',
  props:['title','s30','s60','leftdwData'],
  data() {
    return {
      // data,
      scale,
      eachView
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