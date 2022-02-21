<template>
	<div class="home">
		<div class="content">
			<el-card class="box-card" :body-style="{ height: '800px' }">
				<el-empty description="TA 很懒，什么都没有留下"></el-empty>
			</el-card>
		</div>
		<div class="right">
			<el-card class="box-card">
				<el-button type="warning">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dengji" />
					</svg>开通VIP享更多特权
					<icon-svg iconName="yonghu"></icon-svg>
				</el-button>
			</el-card>
			<el-card class="box-card">
				<ul>
					<li>
						<span>0</span>文章数
					</li>
					<li>
						<span>0</span>评论数
					</li>
					<li>
						<span>0</span>学习数
					</li>
				</ul>
			</el-card>
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>账户信息</span>
				</div>
				<div v-for="o in list" :key="o.id" class="text item">{{ o.name + ":" + o.data }}</div>
			</el-card>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: "home",
	data() {
		return {
			list: [{
				id: 1,
				name: "用户ID",
				data: '123456'
			}, {
				id: 2,
				name: "昵称",
				data: 'ShowData'
			}, {
				id: 3,
				name: "等级",
				data: 'LV0'
			}, {
				id: 4,
				name: "K币",
				data: '50'
			}, {
				id: 5,
				name: "注册时间",
				data: '2022-02-17'
			}]

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
	grid-template-rows: 400px;
	grid-column-gap: 20px;
}
.right {
	display: grid;
	grid-template-rows: 20% 25% 55%;
	grid-row-gap: 20px;
}
.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}
.clearfix:after {
	clear: both;
}
</style>