<template>
  <div class="bar">
    <h4 >分公司接通量排行榜</h4>
    <div>
      <v-chart :forceFit="true" :height="height" :data="data" >
        <v-coord type="rect" direction="LB" />
        <v-tooltip />
          <v-legend  :clickable=false />
        <v-axis dataKey="State" :label="label" />
        <v-stack-bar position="State*人口数量" color="年龄段" />
      </v-chart>
    </div>
  </div>
</template>

<script>

const DataSet = require('@antv/data-set');



const sourceData = [
  { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 ,'all': 100},
  { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
  { 'State': 'VT', '小于5岁': 138253, '5至13岁': 42538, '14至17岁': 15757 },
  { 'State': 'ND', '小于5岁': 518960, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 },
  { 'State': 'W1Y', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 ,'all': 100},
  { 'State': 'DC2', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
  { 'State': 'VT1', '小于5岁': 138253, '5至13岁': 42538, '14至17岁': 15757 },
  { 'State': 'ND2', '小于5岁': 518960, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK1', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 },
  { 'State': 'ND3', '小于5岁': 518960, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK4', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 },
  { 'State': 'W15Y', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 ,'all': 100},
  { 'State': 'DC42', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
  { 'State': 'VT31', '小于5岁': 138253, '5至13岁': 42538, '14至17岁': 15757 },
  { 'State': 'ND22', '小于5岁': 518960, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK41', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
];


const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['小于5岁', '5至13岁', '14至17岁'],
  key: '年龄段',
  value: '人口数量',
  retains: ['State'],
});
const data = dv.rows;

const label = { offset: 12 };

export default {
  data() {
    return {
      data,
      height: 520,
      label: label,
    };
  },
  methods:{
    cl(){
      console.log("lll")
    }
  },

  created() {
    setInterval(()=>{
      // console.log(this.data)

      // this.data.sort(function(a, b) {
      //     return a.人口数量 -b.人口数量;
      // });
    },3000)

    console.log(this.data)
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
