<template>
  <el-dialog title="登录" :visible.sync="visible" width="22%" :before-close="handleClose">
    <el-form
      :model="loginForm"
      :status-icon="true"
      :rules="rules"
      ref="loginForm"
      class="login_form"
    >
      <el-form-item prop="username">
        <el-input type="input" placeholder="用户名/邮箱" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          show-password
          v-model="loginForm.password"
          autocomplete="off"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-checkbox v-model="checked">记住密码（10天内自动登录）</el-checkbox>
      <div class="font-extra-small login-tip">
        <div>
          <a href="www.baidu.com">忘记密码?</a>
        </div>
        <span>
          新用户?
          <a href="javascript:void(0)" @click="showRegister()">注册</a>
        </span>
      </div>
      <el-form-item>
        <el-button class="login-submit" type="primary" @click.native.prevent="handleLogin">快速登录</el-button>
      </el-form-item>
      <div class="other-login font-extra-small">
        <span>微信登录</span>
        <a href="http://www.baidu.com">
          <el-image
            style="width: 20px; height: 20px"
            :src="'https://picture.bowensun.top/iconwechat.svg'"
          ></el-image>
        </a>
      </div>
    </el-form>
  </el-dialog>
</template>
<script>
import Cookies from 'js-cookie'
// import { getToken,setToken,removeToken} from '@/utils/auth'
// if (getToken() && !isToken) {
//   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
// }
export default {
  name: "login",
  data: () => ({
    //记住密码
    checked: true,
    //登录框显示开关
    loginForm: {
      username: "",
      password: "",
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
  created: function () {
    this.getCookie();
  },
  methods: {
    enterLogin() {

    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : password,
      };
    },
    // setCookie(c_name, c_pwd, exdays) {
    //   var exdate = new Date(); //获取时间
    //   exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
    //   //字符串拼接cookie
    //   window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
    //   window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    // },
    // clearCookie: function () {
    //   this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    // },
    //执行等六
    async handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("5555555555" + this.$store);
          console.log("loginForm: %o", this.loginForm);
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
          //如果点击了记住密码，将密码存储到session中
          if (this.checked) {
            console.log("记录密码");
            Cookies.set("password", this.loginForm.password, { expires: 10 });
            Cookies.set("username", this.loginForm.username, { expires: 10 });
          } else {
            console.log("清空密码");
            Cookies.remove("username");
            Cookies.remove("password");
          }

          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: "/" });
              this.$refs["loginForm"].resetFields();
              this.visible = false;
              this.displayUser();
              this.$message('登录成功');
            })
            .catch(a => {
              console.log("登录出错!");
            });
        }
      });
    },
    //打开用户信息展示开关
    displayUser() {
      this.$store.commit("loginAndregister/SET_USERSHOW", true);
    },
    showRegister() {
      this.visible = false;
      this.$store.commit('register/SET_VISIBLE', true)
    },
    handleClose() {
      console.log("原生handleClose");
      this.$store.commit('login/SET_VISIBLE', false)
    },
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
