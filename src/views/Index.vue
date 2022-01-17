<template>
  <div class="index">
    <el-container class="header">
      <el-header>
        <el-row type="flex">
          <el-col :span="10" :offset="3">
            <div class="header-banner">
              <div class="header-banner-left">
                <div class="header-logo">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="require('@/assets/logo.png')"
                  ></el-image>
                  <h1 style="line-height: 49px">
                    Film
                  </h1>
                </div>
                <div class="header-menu">
                  <el-menu
                    :default-active="'1'"
                    text-color="#333333"
                    background-color="rgb(245,245,245)"
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
          <el-col :span="10" :push="0" class="header-banner-right">
            <div class="search">
              <el-input
                v-model="serachValue"
                placeholder="搜索"
                :disabled="true"
              ></el-input>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="primary" size="medium" icon="el-icon-search">
                搜索</el-button
              >
            </div>
            <div class="login_register_button" v-show="!userShow">
              <el-button type="text" class="login_button" @click="login"
                >登录</el-button
              >
              <el-button type="text" class="register_button" @click="register"
                >快速注册</el-button
              >
            </div>
            <div class="already-login" v-show="userShow">
              <div>
                <el-avatar
                  shape="square"
                  :size="36"
                  v-bind:src="user.avatar"
                ></el-avatar>
              </div>
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
                  <li
                    class="post-li"
                    v-for="film in this.filmList"
                    :key="film.id"
                  >
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
                            <p align="left">{{ film.introduction }}</p>
                          </div>
                          <div class="item-data-other">
                            <ul class="item-data-other-list">
                              <li class="item-director">
                                {{ film.director }}
                              </li>
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
        </el-main>
        <el-aside width="400px">
          <div class="aside">
            <greeting></greeting>
            <div class="interval"></div>
            <div class="active-user">
              <h3>活跃排行</h3>
              <el-divider></el-divider>
              <ul>
                <li
                  class="font-base activity-rank-li"
                  v-for="activity in this.userActivityRank"
                  :key="activity.id"
                >
                  <div class="active-rank">
                    <div class="active-ranl-left">
                      <el-avatar
                        shape="square"
                        :size="36"
                        v-bind:src="activity.avatar"
                      ></el-avatar>
                      <div class="active-rank-desc">
                        <span>{{ activity.nickname }}</span>
                        <span style="text-align: left; color: #bcbcbc"
                          >Lv{{ activity.level }}</span
                        >
                      </div>
                    </div>
                    <div class="active-rank-right">
                      <el-image
                        style="width: 20px; height: 20px"
                        :src="'http://image.bowensun.top/iconcoin.svg'"
                      ></el-image
                      >&nbsp;&nbsp;{{ activity.activity }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-aside>
      </el-container>
      <baseFooter></baseFooter>
    </el-container>

    <login @displayUser="showUser"></login>
    <register @displayUser="showUser" ref="register"></register>
  </div>
</template>

<script>
import { getFilmList, getActivityRank } from "@/api/index";
import Login from "@/components/Login";
import Register from "@/components/register";
import Greeting from "@/components/greeting";
import BaseFooter from "@/components/baseFooter";


export default {
  name: "Index",
  components: {
    Login,
    Register,
    Greeting,
    BaseFooter
  },
  data() {
    return {
      filmList: null,
      userActivityRank: null,
      userShow: false,
      serachValue: null
    };
  },
  async created() {
    console.log("初始化...");
    this.getContent();
    this.getActivityRank();
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["user/user"];
      }
    }
  },
  methods: {
    async getContent() {
      getFilmList(1, 10).then(response => {
        console.log(response.data.records);
        this.filmList = response.data.records;
      });
    },
    async getActivityRank() {
      getActivityRank(5).then(response => {
        console.log(response.data);
        this.userActivityRank = response.data;
      });
    },
    login() {
      this.$store.commit("login/SET_VISIBLE", true);
    },
    register() {
      this.$refs.register.initForm();
      this.$store.commit("register/SET_VISIBLE", true);
    },
    showUser() {
      console.log(this.userShow);
      this.userShow = true;
    },
    handleSelect() {
      console.log("handleSelect - 跳转界面");
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
.header-logo {
  display: flex;
  align-content: center;
}
.el-header {
  background-color: rgb(245, 245, 245);
  color: #333333;
  text-align: center;
  height: 70px !important;
  padding: 0;
}
.header-banner-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-menu-item {
  font-size: 18px;
}
.menu-item:focus,
.menu-item:hover {
  background-color: rgb(245, 245, 245) !important;
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
.interval {
  width: 80%;
  height: 30px;
  background: rgb(245, 245, 245);
}
.activity-rank-li {
  padding-bottom: 20px;
}
.active-user {
  padding-top: 5px;
  width: 80%;
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
  padding-left: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.active-rank-right {
  color: #7e7b7b;
  font-weight: 600;
  padding: 10px;
  width: 40px;
  border-radius: 5px;
  display: flex;
  align-content: center;
  background-color: #efefef;
}

.login_form {
  padding: 0 10px;
}
.register_form {
  padding: 0 10px;
  width: 240px;
}
.el-form-item__content {
  margin-left: 0 !important;
}
.login-submit,
.register-next-step1 {
  width: 100%;
}
.register-return {
  width: 30%;
}
.register-next-step2 {
  width: 60%;
}
.login-tip {
  display: flex;
  padding-bottom: 12px;
  align-items: flex-end;
  justify-content: space-between;
}
.other-login {
  color: #7e7b7b;
  display: flex;
  justify-content: left;
}
.register-dialog .el-dialog__body {
  display: flex;
  flex-direction: row;
}
.register-step {
  width: 100px;
}
.register-captcha {
  padding: 10px 0;
  display: flex;
}
.register-captcha > .el-input {
  width: 50%;
  margin-right: 10px;
}
.register-captcha > button {
  width: 45%;
}
/* 公用css */
.b2-color {
  color: #4387fd;
}
.span-right {
  text-align: left;
}




</style>
