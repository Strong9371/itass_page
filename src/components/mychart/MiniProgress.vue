<template>
  <div class="mini-progress">
<!--    <a-tooltip :title="'余额报警：' + target + '元'" placement="top" arrowPointAtCenter="true">-->
<!--      <div class="target" :style="{left: target + '%'}">-->
<!--        <span style="background-color: red" />-->
<!--        <span style="background-color: red" />-->
<!--      </div>-->
<!--      <div class="wrap">-->
<!--        <div class="progress" :style="{backgroundColor: color, width: percent + '%', height: height}" />-->
<!--      </div>-->
<!--    </a-tooltip>-->

    <a-tooltip >
      <template slot="title">
        <pre class="tip">话费余额：{{ residue }}</pre>
        <pre class="tip">红线阈值：{{ target }}</pre>

      </template>


      <div class="wrap">
        <div class="target" style="left: 50%">
          <span style="background-color: red" />
          <span style="background-color: red" />
        </div>
<!--        <div class="progress" :style="'{backgroundColor:' + (1?'red;':'blue;') +  'width:' + percent + '%; height: height}'" />-->

<!--        <div class="progress"  :style="'background-color: red;width: 30% ;height:8px'"  />-->
        <div class="progress"  :style="'background-color: ' + (residue <= target ?'red':'green')  + ';width: ' +  (residue/(2*target) <= 1 ? residue/(2*target) : 1 )  *100  + '% ;height:16px'"  />


      </div>
    </a-tooltip>

  </div>
</template>

<script>
export default {
  name: 'MiniProgress',
  //余额，阈值，
  props: ['residue','target']
}
</script>

<style lang="less"  scoped>
  .tip{
    line-height: 20px;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  }

  .mini-progress {
    padding: 5px 0;
    position: relative;
    width: 100%;
    .wrap {
      background-color: @layout-bg-color;
      position: relative;
    }
    .progress {
      transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
      border-radius: 1px 0 0 1px;
      background-color: #13C2C2;
      width: 0;
      height: 100%;
    }
    .target {
      position: absolute;
      top: 0;
      bottom: 0;
      span {
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        height: 4px;
        width: 2px;
      }
      span:last-child {
        top: auto;
        bottom: 0;
      }
    }
  }
</style>
