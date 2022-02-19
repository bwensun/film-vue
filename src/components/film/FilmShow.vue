<template>
	<div>
		<el-row>
			<el-col :span="20" :offset="3">
				<div class="main">
					<ul class="content-ul-item">
						<el-divider></el-divider>
						<li class="post-li" v-for="(film, index) in filmList" :key="index">
							<div class="content-item">
								<div class="item-cover">
									<img v-bind:src="film.cover" height="200px" v-bind:alt="film.fileName" />
								</div>
								<div class="item-right" @click="goDetailsPage(film.id)">
									<div class="item-data">
										<h2 class="item-title">{{ film.filmName }}</h2>
										<div class="item-desc font-base">
											<p align="left">{{ film.introduction }}</p>
										</div>
										<div class="item-data-other">
											<ul class="item-data-other-list">
												<li class="item-director">{{ film.director }}</li>
												<li class="item-date">
													{{ film.screenDate }}&nbsp;{{
														film.screenLocation
													}}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<el-divider></el-divider>
						</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<el-pagination
			background
			layout="total, sizes, prev, pager, next, jumper"
			:page-sizes="[5, 8, 10, 15, 20]"
			:page-size="pageSize"
			:pager-count="5"
			:total="total"
			@current-change="changeContent"
			@size-change="sizeChange"
		></el-pagination>
	</div>
</template>

<script type="text/javascript">
import { getFilmList, getFilmDetails } from "@/api/index";
export default {
	name: "",
	data() {
		return {
			filmList: null,
			pageNumber: 1,
			pageSize: 5,
			total: 10,
		}
	},
	created() {
		this.getContent();
	},
	components: {

	},
	props: {

	},
	computed: {

	},
	methods: {
		async getContent() {
			getFilmList(this.pageNumber, this.pageSize).then(response => {
				console.log(response.data.records);
				this.filmList = response.data.records;
				this.total = response.data.total;
				// const heard = localStorage.getItem("loginResult");
				// console.log("toubushi66666666666" + heard);
			});
		},
		//跳转电影详情页
		async goDetailsPage(id) {
			// console.log('9999999999' + id);
			// this.$store.dispatch("film/getFilmDetail", id);
			//修改路由
			getFilmDetails(id).then(response => {
				const film = response.data.data
				console.log(response.data.data);
				this.$store.commit("film/SET_FILM", film)
				this.$router.push(`/film/${id}`);
			})
		},

		changeContent(num) {
			console.log(num)
			console.log(this.filmList);
			//点击时向后端发送需要显示的页面内容信息
			// const showData = new Object();
			// showData.pageNumber=this.pageNumber,
			// showData.pageSize=this.pageSize,
			// showData.page=num,
			this.pageNumber = num;
			this.getContent();
		},
		sizeChange(num) {
			this.pageSize = num;
			this.getContent();
		},
	},
}
</script>

<style scoped>
</style>