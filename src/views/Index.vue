<template>
  <div class="index">
    <el-container>
      <el-header>
        <el-row type="flex">
          <el-col :span="16" :offset="3">
            <div class="header-banner">
              <div class="header-banner-left">
                <div class="header-logo">
                  <h1>
                    Film
                  </h1>
                </div>
                <div class="header-menu">
                  <el-menu
                    :default-active="'1'"
                    text-color="#333333"
                    background-color="#f9f9f9"
                    class="header-menu-list"
                    mode="horizontal"
                    @select="handleSelect"
                  >
                    <el-menu-item index="1" class="menu-item"
                      >公告</el-menu-item
                    >
                    <el-menu-item index="2" class="menu-item"
                      >榜单</el-menu-item
                    >
                  </el-menu>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="3" :push="2" class="header-banner-right">
            <div class="login_register_button">
              <el-button type="text" class="login_button">登录</el-button>
              <el-button type="text" class="register_button"
                >快速注册</el-button
              >
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="neck"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="20" :offset="3">
              <div class="main">
                <ul class="content-ul-item">
                  <el-divider></el-divider>
                  <li class="post-li" v-for="film in this.filmList" :key="film">
                    <div class="content-item">
                      <div class="item-cover">
                        <img
                          v-bind:src="film.cover"
                          height="200px"
                          v-bind:alt="film.fileName"
                        />
                      </div>
                      <div class="item-right">
                        <div class="item-data">
                          <h2 class="item-title">{{ film.filmName }}</h2>
                          <div class="item-desc font-base">
                            <p align="left">{{film.introduction}}</p>
                          </div>
                          <div class="item-data-other">
                            <ul class="item-data-other-list">
                              <li class="item-director">
                                {{ film.director }}
                              </li>
                              <li class="item-date">
                                {{ film.screenDate }}&nbsp;{{ film.screenLocation }}
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
        </el-main>
        <el-aside width="400px">
          <div class="aside">
            <div class="encourag font-base-small">
              <p class="b2-color" align="left">嗨！朋友</p>
              <p align="left">所有的伟大，都源于一个勇敢的开始</p>
            </div>
            <div class="interval"></div>
            <div class="active-user">
              <h3>活跃排行</h3>
              <el-divider></el-divider>
              <ul>
                <li class="font-small">
                  <div class="active-rank">
                    <div class="active-ranl-left">
                      <el-avatar
                        shape="square"
                        :size="36"
                        :src="
                          'http://image.bowensun.top/avatar%E5%94%90%E6%96%87%E9%A3%9E.jpg'
                        "
                      ></el-avatar>
                      <div class="active-rank-desc">
                        <span>kof跑跑宝宝</span>
                        <span style="text-align: left; color: #bcbcbc"
                          >Lv1</span
                        >
                      </div>
                    </div>
                    <div class="active-rank-right">
                      <el-image
                        style="width: 16px; height: 16px"
                        :src="'http://image.bowensun.top/iconfire.svg'"
                        :fit="fit"
                      ></el-image
                      >24
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-aside>
      </el-container>
      <el-footer class="footer">
        <el-row type="flex">
          <el-col :span="4" :offset="3">
            <div class="footer-1">
              <h1>Film</h1>
              <span>个人资源分享 & 聊天吐槽</span>
              <br />
              <span>一个涵盖电影、游戏，小说的兴趣爱好社区</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="footer-2">
              <h3>友链</h3>
              <ul>
                <li>
                  <el-link type="primary" href="https://www.bowensun.top">
                    <span class="font-medium">孙博文的个人博客</span>
                  </el-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="4" :offset="6">
            <div class="footer-2">
              <h3>我们的团队</h3>
              <ul>
                <li>
                  <div class="footer-3">
                    <el-avatar
                      shape="square"
                      :size="36"
                      :src="
                        'http://image.bowensun.top/avatar%E5%AD%99%E5%8D%9A%E6%96%87.webp'
                      "
                    ></el-avatar>
                    &nbsp; &nbsp;
                    <span style="line-height: 36px">霸道学长孙博文</span>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="2">
            <div class="footer-bottom font-small">
              <span>Copyright © 2021 Film网站</span>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { getFilmList } from "@/api/index";
export default {
  name: "Index",
  data() {
    return {
      filmList: null
    };
  },
  async created() {
    console.log("初始化...");
    this.getContent();
  },
  methods: {
    async getContent() {
      getFilmList(1, 10).then(response => {
        console.log(response.data.records);
        this.filmList = response.data.records;
      });
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 20px;
}
.header-banner-left {
  display: flex;
}
.header-menu {
  margin-left: 20px;
  display: flex;
}

.el-header {
  background-color: #f9f9f9;
  color: #333333;
  text-align: center;
  height: 70px !important;
  padding: 0;
}
.header-banner-right {
  height: 70px;
  display: inline-flex;
}
.header-banner-right {
  align-items: center;
}
.el-menu-item {
  font-size: 18px;
}
.menu-item:focus,
.menu-item:hover {
  background-color: #f9f9f9 !important;
}

.login_button {
  background-color: #efefef;
  color: #333333;
  font-size: 13px;
  font-weight: 200;
  width: 60px;
}
.register_button {
  background-color: #efefef;
  color: #333333;
  font-size: 13px;
  width: 80px;
}
.login_button:focus,
.register_button:focus,
.register_button:hover,
.login_button:hover {
  background-color: #efefef;
  color: #333333;
}
.neck {
  background-color: white;
  height: 40px;
  width: 100%;
}
.main {
  margin-top: 80px;
  background: white;
  height: 1000px;
  border-radius: 5px;
  padding: 0px !important;
}
.post-li {
  width: 100%;
  box-sizing: border-box;
}
.content-item {
  display: flex;
  width: 100%;
}
.item-right {
  width: 78%;
}
.item-data-other-list {
  height: 60px;
  display: flex;
  padding: 0;
  align-items: flex-end;
  justify-content: space-between;
  list-style: none;
}
.item-data {
  padding-left: 20px;
}
.item-director,
.item-date {
  font-size: 12px;
  color: #7e7b7b;
}
.content-ul-item {
  list-style: none;
  padding: 0;
}
.item-title {
  text-align: left;
}
.item-desc {
  padding-top: 10px;
}
.aside {
  padding-top: 98px;
}
.encourag {
  padding-top: 10px;
  padding-left: 20px;
  background-image: linear-gradient(
    90deg,
    #fff2ec 0,
    #f0f1f6 42%,
    #e1f0ff 100%
  );
  width: 65%;
  height: 120px;
}
.interval {
  width: 70%;
  height: 30px;
  background: #f9f9f9;
}
.active-user {
  padding-top: 5px;
  width: 70%;
  height: 500px;
  background: white;
}
.active-rank {
  display: flex;
  justify-content: space-between;
}
.active-ranl-left {
  display: flex;
  justify-content: flex-start;
}

.active-rank-desc {
  display: flex;
  flex-direction: column;
}
.active-rank-right {
  padding: 10px;
  width: 28px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  background-color: #efefef;
}
.el-footer {
  width: 100%;
  height: 280px !important;
  padding: 0;
  background-color: #212121;
}
.footer {
  color: white;
}
.footer-1 {
  text-align: left;
}
.footer-3 {
  display: flex;
  align-content: center;
}
.footer-bottom {
  padding-top: 100px;
}
/* 公用css */
.b2-color {
  color: #4387fd;
}
.font-extra-small {
  font-size: 12px;
}
.font-small {
  font-size: 13px;
}
.font-base-small {
  font-size: 13.5px;
}
.font-base {
  font-size: 14px;
}
.font-medium {
  font-size: 16px;
}
.font-large {
  font-size: 18px;
}
.font-extra-large {
  font-size: 20px;
}
.span-right {
  text-align: left;
}
</style>
