<template>
  <div class="index">
    <el-container class="header">
      <el-header>
        <el-row type="flex">
          <el-col :span="10" :offset="3">
            <div class="header-banner">
              <div class="header-banner-left">
                <div class="header-logo">
                  <h1 style="line-height: 49px">
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
          <el-col :span="10" :push="0" class="header-banner-right">
            <div class="search">
              <el-input v-model="input" placeholder="搜索" :disabled="true"></el-input>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="primary" size="medium" icon="el-icon-search"> 搜索</el-button>
            </div>
            <div class="login_register_button" v-show="loginRegisterShow">
              <el-button type="text" class="login_button" @click="login"
                >登录</el-button
              >
              <el-button type="text" class="register_button"
                >快速注册</el-button
              >
            </div>
            <div class="already-login" v-show="alreadyLoginShow">
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
            <div class="encourag font-base-small">
              <p class="b2-color" align="left">嗨！朋友</p>
              <p align="left">所有的伟大，都源于一个勇敢的开始</p>
            </div>
            <div class="interval"></div>
            <div class="active-user">
              <h3>活跃排行</h3>
              <el-divider></el-divider>
              <ul>
                <li
                  class="font-base activity-rank-li"
                  v-for="activity in this.userActivityRank"
                  :key="activity"
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
                        :fit="fit"
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

    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="22%"
      :before-close="handleClose"
    >
      <el-form
        :model="loginForm"
        :status-icon="true"
        :rules="rules"
        ref="loginForm"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input
            type="input"
            placeholder="用户名/邮箱"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="font-extra-small login-tip">
          <div><a href="www.baidu.com">忘记密码?</a></div>
          <span>新用户?<a href="www.baidu.com">注册</a></span>
        </div>
        <el-form-item>
          <el-button
            class="login-submit"
            type="primary"
            @keyup.enter.native="handleLogin"
            @click.native.prevent="handleLogin"
            >快速登录</el-button
          >
        </el-form-item>
        <div class="other-login font-extra-small">
          <span>微信登录</span>
          <a href="http://www.baidu.com">
            <el-image
              style="width: 20px; height: 20px"
              :src="'http://image.bowensun.top/iconwechat.svg'"
              :fit="fit"
            ></el-image>
          </a>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getFilmList, getActivityRank } from "@/api/index";
export default {
  name: "Index",
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (value.length < 2 || value.length > 20) {
        return callback(new Error("用户名长度在2-20字符内"));
      }
      callback();
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      filmList: null,
      userActivityRank: null,
      dialogVisible: false,
      loginRegisterShow: true,
      alreadyLoginShow: false,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: checkPass, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }]
      },
      user: {
        username: "bwensun",
        avatar:
          "http://image.bowensun.top/avatar%E5%AD%99%E5%8D%9A%E6%96%87.webp",
        nickname: "霸道学长孙博文"
      }
    };
  },
  async created() {
    console.log("初始化...");
    this.getContent();
    this.getActivityRank();
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
      this.dialogVisible = true;
    },
    handleLogin() {
      const that = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          that.$store
            .dispatch("Login", that.loginForm)
            .then(() => {
              that.$router.push({ path: "/" });
              that.$refs["loginForm"].resetFields();
              that.dialogVisible = false;
              that.loginRegisterShow = false;
              that.alreadyLoginShow = true;
            })
            .catch(a => {
              console.log("error!");
            });
        }
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
.header-logo {
  display: flex;
  align-content: center;
}
.el-header {
  background-color: #f9f9f9;
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
  width: 75%;
  height: 120px;
}
.interval {
  width: 80%;
  height: 30px;
  background: #f9f9f9;
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
.login_form {
  padding: 0 10px;
}
.el-form-item__content {
  margin-left: 0 !important;
}
.login-submit {
  width: 100%;
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
