<template>
	<div>
		<a-form style="max-width: 500px; margin: 40px auto 0;">
			<a-form-item label="单据类型" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
				<a-select value="1" placeholder="ant-design@alipay.com">
					<a-select-option value="1">费用报销单</a-select-option>
					<a-select-option value="1">费用借款单</a-select-option>
					<a-select-option value="1">付款通知单</a-select-option>
					<a-select-option value="1">费用分摊表</a-select-option>
				</a-select>
			</a-form-item>
			<a-form-item :label="$t('collection')" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
				<a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
					<a-select defaultValue="alipay" style="width: 100px">
						<a-select-option value="alipay">{{$t('alipay')}}</a-select-option>
						<a-select-option value="wexinpay">{{$t('wechat')}}</a-select-option>
					</a-select>
					<a-input :style="{width: 'calc(100% - 100px)'}" value="test@example.com" />
				</a-input-group>
			</a-form-item>
			<a-form-item :label="$t('collectionName')" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
				<a-input value="Alex" />
			</a-form-item>
			<a-form-item :label="$t('transferAmount')" :labelCol="{span: 7}" :wrapperCol="{span: 17}">
				<a-input prefix="￥" value="5000" />
			</a-form-item>
			<a-form-item :wrapperCol="{span: 17, offset: 7}">
				<a-button type="primary" @click="nextStep">下一步</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
	export default {
		name: 'Step1',
		methods: {
			nextStep() {
				this.$emit('nextStep')
			}
		}
	}
</script>

<style scoped>

</style>
