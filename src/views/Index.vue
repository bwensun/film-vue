<template>
  <div class="index">
    <el-container class="header">
      <el-header>
        <el-row type="flex">
          <el-col :span="8" :offset="2">
            <div class="header-banner">
              <div class="header-banner-left">
                <div class="header-logo" @click="goHome">
                  <el-image style="width: 100px; height: 100px" :src="require('@/assets/logo.png')"></el-image>
                  <h1 style="line-height: 49px">Film</h1>
                </div>
                <div class="header-menu">
                  <el-menu
                    :default-active="'1'"
                    class="header-menu-list"
                    background-color="#F5F5F5"
                    text-color="#545c64"
                    active-text-color="#ffd04b"
                    mode="horizontal"
                    @select="handleSelect"
                  >
                    <el-menu-item index="1" class="menu-item">公告</el-menu-item>
                    <el-menu-item index="2" class="menu-item">榜单</el-menu-item>
                  </el-menu>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12" :push="0" class="header-banner-right">
            <div class="search">
              <el-input v-model="serachValue" placeholder="搜索" clearable>
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="电影名" value="1"></el-option>
                  <el-option label="导演" value="2"></el-option>
                  <el-option label="演员" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="login_register_button" v-show="!userShow">
              <el-button type="primary" class="head_button" @click="login">登录</el-button>
              <el-button type="primary" class="head_button" @click="register">快速注册</el-button>
            </div>
            <div class="already-login" v-show="userShow">
              <div class="user">
                <el-avatar
                  shape="square"
                  :size="36"
                  v-bind:src="user.avatar || 'https://picture.bowensun.top/avatar%E5%AD%99%E5%8D%9A%E6%96%87.webp'"
                ></el-avatar>
                <el-dropdown trigger="click" @command="handleCommand">
                  <div class="dropdown">
                    <h3>{{ user.username }}</h3>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="1">个人主页</el-dropdown-item>
                    <el-dropdown-item command="2">我的订单</el-dropdown-item>
                    <el-dropdown-item command="3">我的钱包</el-dropdown-item>
                    <el-dropdown-item command="4">账户管理</el-dropdown-item>
                    <el-dropdown-item command="layout" divided>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
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
          <router-view></router-view>
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
                      <el-avatar shape="square" :size="36" v-bind:src="activity.avatar"></el-avatar>
                      <div class="active-rank-desc">
                        <span>{{ activity.nickname }}</span>
                        <span style="text-align: left; color: #bcbcbc">Lv{{ activity.level }}</span>
                      </div>
                    </div>
                    <div class="active-rank-right">
                      <el-image
                        style="width: 20px; height: 20px"
                        :src="'https://picture.bowensun.top/iconcoin.svg'"
                      ></el-image>
                      &nbsp;&nbsp;{{ activity.activity }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-aside>
      </el-container>
      <backTop :visibility-height="20" :bottom="60" :right="60"></backTop>
      <baseFooter></baseFooter>
    </el-container>
    <login></login>
    <register ref="register"></register>
  </div>
</template>

<script>
import { getFilmList, getActivityRank, getCaptcha, register, login, getUserInfo, layout } from "@/api/index";
import Login from "@/components/Login";
import Register from "@/components/register";
import Greeting from "@/components/greeting";
import BaseFooter from "@/components/baseFooter";
import BackTop from "@/components/BackTop";


export default {
  name: "Index",
  components: {
    Login,
    Register,
    Greeting,
    BaseFooter,
    BackTop,
  },
  data() {
    return {
      filmList: null,
      userActivityRank: null,
      // userShow: false,
      serachValue: null,
      //
      select: '',
      // pagerCount: 5,
      pageNumber: 1,
      pageSize: 5,
      total: 10,
    };
  },
  async created() {
    console.log("初始化...");
    this.getContent();
    this.getActivityRank();
    if (localStorage.getItem('loginResult')) {
      // this.$store.commit("login/SET_VISIBLE", true);
      this.userShow = true
      const token = localStorage.getItem('loginResult')
      const userResult = await getUserInfo(token)
      // console.dir("66666" + this.user.username);
      console.log('666666666' + userResult.data);
      this.$store.commit("user/SET_USER", userResult.data)
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["user/user"];
      }//get是默认方法，是不是可以不写
    },
    userShow: {
      get() {
        return this.$store.getters["loginAndregister/userShow"]
      },
      set(b) {
        this.$store.commit("loginAndregister/SET_USERSHOW", b)
      }
    },
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
    async getActivityRank() {
      getActivityRank(5).then(response => {
        console.log(response.data);
        this.userActivityRank = response.data;
      });
    },
    login() {
      console.log(this.userShow)
      this.$store.commit("login/SET_VISIBLE", true);
    },
    register() {
      this.$refs.register.initForm();
      this.$store.commit("register/SET_VISIBLE", true);
    },
    // showUser() {
    //   console.log(this.userShow);
    //   this.$store.commit("loginAndregister/SET_USERSHOW", true);
    // },

    handleSelect() {
      console.log("handleSelect - 跳转界面");
    },
    handleCommand(command) {
      this[command]()
      console.log(command)
    },
    async layout() {
      const token = localStorage.getItem('loginResult')
      console.log("789456655" + token)
      await layout(token)
      localStorage.clear();
      this.$store.commit("user/SET_USER", {})
      this.$store.commit("loginAndregister/SET_USERSHOW", false)
    },
    goHome() {
      console.log('9999');
      this.$router.push(`/`)
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 0px;
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
  cursor: pointer;
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

/* .login_button {
  background-color: #efefef !important;
  color: #333333;
  font-size: 13px;
  font-weight: 200;
  width: 60px;
} */
/* .register_button {
  background-color: #efefef;
  color: #333333;
  font-size: 13px;
  width: 80px;
} */
/* .head_button {
  background-color: ;
} */
/* .head_button:focus,
.head_button:hover {
  background-color: #efefef;
} */
.neck {
  background-color: white;
  height: 40px;
  width: 100%;
}
.main {
  margin-top: 80px;
  background: white;
  /* height: 1000px; */
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
  cursor: pointer;
}
.item-right:hover {
  color: #409eff;
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
  margin-top: 50px;
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
  justify-content: space-around;
}
.active-ranl-left {
  width: 60%;
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
  width: 10%;
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
.user {
  display: flex;
  width: 120px;
  justify-content: space-around;
  align-items: center;
}
/* .user:first-child {
  display: flex;
  align-content: center;
} */
.dropdown {
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  cursor: pointer;
  color: #409eff;
}
</style>
