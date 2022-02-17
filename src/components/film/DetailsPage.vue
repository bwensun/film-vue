<template>
	<div class="DetailsPage">
		<div class="showdata">
			<el-row class="img">
				<el-image style="height: 360px" :src="
					film.cover
				" fit="contain" class="img1"></el-image>
				<el-image
					style="height: 360px"
					:src="
						'../../static/img/film-left.png'
					"
					fit="contain"
					class="img1"
				></el-image>
			</el-row>
			<el-row class="tag">
				<el-tag
					class="maintag"
					v-for="(item, index) in filmType"
					:key="index"
					:effect="isplain(index)"
					:size="issmall(index)"
				>{{ item }}</el-tag>
				<!-- <el-tag effect="plain" size="small" class="deputytag">动作</el-tag>
				<el-tag effect="plain" size="small" class="deputytag">冒险</el-tag>
				<el-tag effect="plain" size="small" class="deputytag">喜剧</el-tag>-->
				<el-button @click="test">test</el-button>
			</el-row>
			<el-row class="description">
				<ul>
					<li>
						<span class="about">{{ film.introduction }}</span>
					</li>
					<el-divider></el-divider>
					<li>
						<span class="creators title">编剧&&导演</span>
						<t-link v-for="item in creator" :key="item">{{ item }}</t-link>
						<!-- <t-link>Brian Koppelman</t-link>
						<t-link>David Levien</t-link>
						<t-link>Andrew Ross Sorkin</t-link>-->
					</li>
					<el-divider></el-divider>
					<li>
						<a href class="stars title">演员</a>
						<t-link v-for="item in mainActor" :key="item">{{ item }}</t-link>
						<!-- <t-link>Paul Giamatti</t-link>
						<t-link>Damian Lewis</t-link>
						<t-link>Maggie Siff</t-link>-->
					</li>
					<el-divider></el-divider>
					<li>
						<t-link>
							<i class="el-icon-video-camera-solid" slot="prefix"></i>
							See production, box office & company info
							<svg
								class="icon"
								aria-hidden="true"
								slot="suffix"
							>
								<use xlink:href="#icon-launch" />
							</svg>
						</t-link>
					</li>
				</ul>
			</el-row>
		</div>
		<div class="showmessage">
			<el-row class="message">
				<div>
					<h3>
						留言
						<span>43</span>
						<i class="el-icon-arrow-right"></i>
					</h3>
				</div>
			</el-row>
			<el-row></el-row>
		</div>
	</div>
</template>

<script type="text/javascript">
import TLink from "../link.vue"

export default {
	name: "",
	data() {
		return {
		}
	},
	components: {
		TLink,
	},
	props: {

	},
	computed: {
		film: {
			get() {
				return this.$store.getters["film/film"]
			}
		},
		director: function () {
			let temp = String([this.film.director])
			let director = temp.split("/")
			return director
		},
		screenwriter: function () {
			let temp = String([this.film.screenwriter])
			let screenwriter = temp.split(" / ")
			return screenwriter
		},
		filmType: function () {
			let temp = String([this.film.filmType])
			let filmType = temp.split(" / ")
			return filmType
		},
		mainActor: function () {
			let temp = String([this.film.mainActor])
			let mainActor = temp.split(" / ")
			return mainActor
		},
		creator: function () {
			let temp = this.director.concat(this.screenwriter)
			return Array.from(new Set(temp))
		}
	},
	// mounted: function () {
	// 	document.querySelector('.maintag').removeAttribute('size')
	// },
	methods: {
		test() {
			// const film = this.$store.getters["film/film"]
			// console.log("123456789" + typeof (this.director));
			// console.log("987654321" + typeof (this.screenwriter));
			let temp = this.director.concat(this.screenwriter)
			console.log(temp);
		},
		issmall(index) {
			console.log('6666666' + index);
			if (index != 0) {
				return "small"
			} else {
				return "medium"
			}
		},
		isplain(index) {
			if (index != 0) {
				return "plain"
			} else {
				return "light"
			}
		}

	},
	created: function () {
		this.issmall();
	}
}
</script>

<style scoped>
.link-wrap + .link-wrap:before {
	content: "/";
	padding: 0 5px;
	color: #909399;
	width: 16px;
	display: inline-block;
	text-align: center;
}
a {
	text-decoration: none !important;
}

.description .stars {
	color: #303133;
}
.description .stars:hover {
	color: #909399;
}
.showmessage {
	background-color: #fff;
}
.DetailsPage {
	margin-top: 70px;
	text-align: left;
}
.img {
	display: flex;
	justify-content: space-between;
}
.img1 {
	flex-grow: 1;
	margin-right: 0.25em;
}
.tag {
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
}
.maintag {
	margin-right: 8px;
}
/* .tag .maintag:nth-of-type(1) {
	background-color: aqua;
} */
.deputytag {
	margin-right: 0.25em;
}
/* .description {
	text-align: left;
} */
.title {
	font-size: 16px;
	color: #303133;
	letter-spacing: 0.00937em;
	line-height: 1.5rem;
	font-weight: 800;
}
.icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>