<template>
  <div class="bar">
    <h1 style="font-weight: bolder">分公司30/60秒量（单位：通）</h1>

    <div class="chart">
      <v-chart :forceFit="true" :height="300" :data="data" padding="auto" :scale="scale">
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
const data = [{
  country: '分公司',
  type: '30s接通量',
  value: 45
}, {
  country: '分公司',
  type: '60s接通量',
  value: 38
},{
  country: '融资',
  type: '30s接通量',
  value: 45
}, {
  country: '融资',
  type: '60s接通量',
  value: 38
},{
  country: '资质',
  type: '30s接通量',
  value: 45
}, {
  country: '资质',
  type: '60s接通量',
  value: 38
},{
  country: '大客户',
  type: '30s接通量',
  value: 45
}, {
  country: '大客户',
  type: '60s接通量',
  value: 38
},{
  country: '创发',
  type: '30s接通量',
  value: 45
}, {
  country: '创发',
  type: '60s接通量',
  value: 38
},{
  country: '法律',
  type: '30s接通量',
  value: 45
}, {
  country: '法律',
  type: '60s接通量',
  value: 38
}];

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
  data() {
    return {
      data,
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