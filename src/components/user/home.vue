<template>
	<div class="home">
		<div class="content">
			<el-card class="box-card" :body-style="{ height: '800px' }">123213123</el-card>
		</div>
		<div class="right">
			<el-card class="box-card">123213123</el-card>
			<el-card class="box-card">123213123</el-card>
			<el-card class="box-card">123213123</el-card>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: "home",
	data() {
		return {

		}
	},
	components: {

	},
	props: {

	},
	computed: {

	},
	methods: {

	},
}
</script>

<style scoped>
.home {
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 800px;
	grid-column-gap: 20px;
}
.right {
	display: grid;
	grid-template-rows: 20% 25% 55%;
	grid-row-gap: 20px;
}
</style>