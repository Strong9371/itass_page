<template>
	<div class="mini-chart">
		<div class="chart-content" :style="{height: 46}">
			<v-chart :force-fit="true" :height="height" :data="data" :padding="[36, -10, 18, -10]">
				<v-tooltip />
				<v-bar position="depart*timeamount"  color="type"/>
			</v-chart>
		</div>
	</div>
</template>

<script>
	// import {
	// 	format
	// } from 'date-fns'

	// const data = []
	// const beginDay = new Date().getTime()

	// const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
	// for (let i = 0; i < fakeY.length; i += 1) {
	//   data.push({
	//     x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
	//     y: fakeY[i]
	//   })
	// }

	// const tooltip = [
	//   'x*y',
	//   (x, y) => ({
	//     name: x,
	//     value: y
	//   })
	// ]

	// const scale = [{
	//   dataKey: 'x',
	//   min: 2
	// }, {
	//   dataKey: 'y',
	//   title: '时间',
	//   min: 1,
	//   max: 22
	// }]

	export default {
		name: 'MiniBar',
		props: ['fd'],
		data() {
			return {
				data:[],
				scale:[],
				tooltip:[],
				height: 100
			}
		},
		created() {
			this.data = [
				{
					depart:'融资',
					type:"时长",
					timeamount:3800
				},
				{
					depart:'大客户',
					type:"时长",
					timeamount:2800
				},
				{
					depart:'资质',
					type:"时长",
					timeamount:2100
				},
				{
					depart:'创发',
					type:"时长",
					timeamount:1200
				},
				{
					depart:'法律',
					type:"时长",
					timeamount:2400
				},
			]
				
				
			// const fakeY = this.fd
			// for (let i = 0; i < fakeY.length; i += 1) {
			// 	this.data.push({
			// 		x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
			// 		timeamount: fakeY[i]
			// 	})
			// }

			this.tooltip = [
				'x*y',
				(x, y) => ({ 
					name: x,
					value: y
				})
			]

			this.scale = [{
				dataKey: 'x',
				min: 2
			}, {
				dataKey: 'y',
				title: '时间',
				min: 1,
				max: 22
			}]


		},
	}
</script>

<style lang="less" scoped>
	@import "index.less";
</style>
