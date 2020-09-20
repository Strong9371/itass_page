<template>
	<div class="mini-chart">
		<div class="chart-content" :style="{height: 46}">
			<!-- 		<v-chart :forceFit="true" :height="height" :data="data" :padding="[36, -10, 18, -10]">
				<v-tooltip />

				<v-stack-bar position="depart*amount" color="type" />
			</v-chart>
 -->
			<v-chart :forceFit="true" :height="height" :data="jietongliang" :padding="[36, -10, 18, -10]" >
				<v-tooltip />
				<v-bar position="depart*amount" color="type" />
			</v-chart>


		</div>
	</div>

</template>

<script>

	export default {
		name: 'DoubleBar',
    props: ['jietongliang'],
		data() {
			return {
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
