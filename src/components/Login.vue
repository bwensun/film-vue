<template>
  <el-dialog
    title="登录"
    :visible.sync="visible"
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
        <span>新用户?<a href="javascript:void(0)" @click="showRegister()">注册</a></span>
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
          ></el-image>
        </a>
      </div>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "login",
  data: () => ({
    //登录框显示开关
    loginForm: {
      username: "",
      password: ""
    },
    rules: {
      password: [
        {
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error("用户名不能为空"));
            }
            if (value.length < 2 || value.length > 20) {
              return callback(new Error("用户名长度在2-20字符内"));
            }
            callback();
          },
          trigger: "blur"
        }
      ],
      username: [
        {
          validator: (rule, value, callback) => {
            if (value === "") {
              callback(new Error("请输入密码"));
            }
            callback();
          },
          trigger: "blur"
        }
      ],
      nickname: [
        {
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error("昵称不能为空"));
            }
            if (value.length < 2 || value.length > 20) {
              return callback(new Error("昵称长度在2-20字符内"));
            }
            callback();
          },
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    //执行等六
    async handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("store: %o", this.$store);
          console.log("loginForm: %o", this.loginForm);
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: "/" });
              this.$refs["loginForm"].resetFields();
              this.visible = false;
              this.displayUser();
            })
            .catch(a => {
              console.log("登录出错!");
            });
        }
      });
    },
    //打开用户信息展示开关
    displayUser(){
      this.$emit('displayUser', true);
    },
    showRegister(){
      this.visible = false;
      this.$store.commit('register/SET_VISIBLE', true)
    },
    handleClose(){
      console.log("原生handleClose");
    }
  },
  computed: {
    visible: {
      get() {
        return this.$store.getters["login/visible"];
      },
      set(visible) {
        this.$store.commit("login/SET_VISIBLE", visible);
      }
    }
  }
};
</script>
