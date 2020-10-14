<template>
  <div class="rank">
    <h1 style="font-weight: bolder;">{{title}}</h1>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list">
        <span :class="index < 3 ? 'active' : null">{{index + 1}}</span>
        <span >{{item.name}}</span>
        <span >{{item.total}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RankingList',
  props: ['title', 'list']
}
</script>

<style lang="less" scoped>
  .rank{
    padding: 0 32px 32px 72px;
    .title{
    }
    .list{
      height: 350px;
      margin: 25px 20px 0;
      padding: 0;
      list-style: none;
      display: block;padding: 0;
      white-space: nowrap;
      overflow-y: scroll;
      li {
        margin-top: 16px;
        span {
          color: @text-color-second;
          font-size: 14px;
          line-height: 22px;
        }
        span:first-child {
          background-color: @layout-bg-color;
          border-radius: 20px;
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          margin-right: 24px;
          height: 20px;
          line-height: 20px;
          width: 20px;
          text-align: center;
        }
        span.active {
          background-color: #314659 !important;
          color: @text-color-inverse !important;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>
