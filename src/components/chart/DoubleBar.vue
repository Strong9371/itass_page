<template>
	<div class="mini-chart">
		<div class="chart-content" :style="{height: 46}">
			<!-- 		<v-chart :forceFit="true" :height="height" :data="data" :padding="[36, -10, 18, -10]">
				<v-tooltip />

				<v-stack-bar position="depart*amount" color="type" />
			</v-chart>
 -->
			<v-chart :forceFit="true" :height="height" :data="data" :padding="[36, -10, 18, -10]" >
				<v-tooltip />
				<v-bar position="depart*amount" color="type" />
			</v-chart>


		</div>
	</div>

</template>

<script>
	const data = [{
			type: '电话量',
			depart: '融资',
			amount: 40
		}, {
			type: '接通量',
			depart: '融资',
			amount: 28
		},
		{
			type: '电话量',
			depart: '大客户',
			amount: 36
		},

		{
			type: '接通量',
			depart: '大客户',
			amount: 28
		},

		{
			type: '电话量',
			depart: '资质',
			amount: 29
		},
		{
			type: '接通量',
			depart: '资质',
			amount: 20
		},

		{
			type: '电话量',
			depart: '创发',
			amount: 22
		},
		{
			type: '接通量',
			depart: '创发',
			amount: 12
		},

		{
			type: '电话量',
			depart: '法律',
			amount: 26
		},
		{
			type: '接通量',
			depart: '法律',
			amount: 18
		},

	]


	export default {
		name: 'DoubleBar',
		data() {
			return {
				data,
				height: 100,
				adjust: [{
					type: 'dodge',
					marginRatio: 0,
				}]
			}
		},
		
	};
</script>

<style lang="less" scoped>
	@import "index.less";
</style>
