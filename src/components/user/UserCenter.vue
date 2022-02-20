<template>
	<div class="ucenter_box">
		<div class="ucenterapp">
			<div class="user_top_bg">
				<div class="theme">
					<a href title="切换查看">
						<i class="el-icon-view"></i>
					</a>
					<div title="更换皮肤">
						<i class="el-icon-menu"></i>
					</div>
				</div>
				<div class="userinfo">
					<el-avatar :size="60" :src="'../../../static/img/dfb4c905d545549039abe6f02bdffd64_1.jpg'"></el-avatar>
					<div class="basic">
						<div>
							<span>showData</span>
							<a href>
								<i class="el-icon-edit"></i>
							</a>
							<a href>
								<i class="el-icon-share"></i>
							</a>
						</div>
						<div class="write">
							<span>
								TA很懒，什么都没有留下...
								<span>
									<i class="el-icon-edit"></i>编辑
								</span>
							</span>
							<el-input placeholder="请输入内容" v-show="false"></el-input>
						</div>
					</div>
				</div>
			</div>
			<div class="user_top_nav">
				<el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					background-color="#fff"
					@select="handleSelect"
				>
					<el-menu-item index="home">主页</el-menu-item>
					<el-menu-item index="want">
						<template slot="title">想看</template>
					</el-menu-item>
					<el-menu-item index="record">
						<template slot="title">记录</template>
					</el-menu-item>
					<el-menu-item index="share">
						<template slot="title">分享</template>
					</el-menu-item>
					<el-menu-item index="surround">
						<template slot="title">圈子</template>
					</el-menu-item>
					<el-menu-item index="set">设置</el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="container">
			整页组件
			<router-view></router-view>
		</div>
		<el-drawer title="切换皮肤" :visible="false" direction="btt">
			<span>我来啦!</span>
		</el-drawer>
	</div>
</template>

<script type="text/javascript">

export default {
	name: "UserCenter",
	data() {
		return {
			activeIndex: "home"
		}
	},
	components: {

	},
	props: {

	},
	computed: {

	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
			const user = this.$store.getters["user/user"]
			console.log(user.id);
			this.$router.push(`/user/${user.id}/${key}`)
		}
	},
}
</script>

<style scoped>
.ucenter_box {
	margin-top: 80px;
}
.user_top_bg {
	background-image: url(../../../static/img/cb1c3ef50e22b6096fde67febe863494caefebad.png);
	position: relative;
	height: 190px;
}
.theme {
	width: 90px;
	height: 30px;
	background-color: rgba(130, 126, 126, 0.2);
	border-radius: 6px;
	position: absolute;
	right: 2%;
	top: 6%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.userinfo {
	position: absolute;
	left: 2%;
	bottom: 0;
	display: flex;
	align-items: center;
	text-align: left;
}
.basic {
	margin-left: 22px;
}
.write {
	width: 730px;
}
.user_top_nav {
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.nav_right {
	display: flex;
}
.el-menu-demo {
	width: 100%;
}
</style>