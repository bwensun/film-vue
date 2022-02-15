<template>
  <el-dialog
    class="register-dialog"
    title="注册"
    :visible.sync="visible"
    width="30%"
    :before-close="handleClose"
  >
    <div class="register" v-if="register">
      <div class="register-step">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="基本信息"></el-step>
          <el-step title="邮箱验证"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
      </div>

      <div class="register_form">
        <el-form
          :model="registerForm"
          :status-icon="true"
          :rules="rules"
          ref="registerForm"
          class="register_form"
        >
          <el-form-item prop="username" v-show="step1Visible">
            <el-input
              type="input"
              placeholder="用户名"
              v-model="registerForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="nickname" v-show="step1Visible">
            <el-input
              type="input"
              placeholder="昵称"
              v-model="registerForm.nickname"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" v-show="step1Visible">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="registerForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email" v-show="step2Visible">
            <el-input type="input" placeholder="邮箱" v-model="registerForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="captcha" v-show="step2Visible">
            <div class="register-captcha">
              <el-input
                type="input"
                placeholder="验证码"
                v-model="registerForm.captcha"
                autocomplete="off"
              ></el-input>
              <captcha-button :registerForm="registerForm" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              class="register-next-step1"
              type="success"
              v-show="step1Visible"
              @click.native.prevent="nextStep()"
            >下一步</el-button>
            <div class="registerStep2Button" v-show="step2Visible">
              <el-button class="register-return" type="success" @click.native.prevent="initForm">返回</el-button>
              <el-button
                class="register-next-step2"
                type="success"
                @click.native.prevent="registerSubmit"
              >注册</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-result icon="success" title="注册成功" subTitle="是否返回主页" class="success" v-if="success">
      <template slot="extra">
        <el-button type="primary" size="medium" @click="returnhome">返回({{ time }}s)</el-button>
      </template>
    </el-result>
  </el-dialog>
</template>
<script>
import CaptchaButton from "@/components/CaptchaButton";

export default {
  name: "register",
  components: {
    CaptchaButton
  },
  data: () => ({
    registerForm: {
      username: "",
      password: "",
      nickname: "",
      email: "",
      captcha: "",
    },
    time: 5,
    user: {
      username: "",
      password: "",
    },
    //注册框显示开关.
    step1Visible: true,
    step2Visible: false,
    register: true,
    success: false,
    active: 0,
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

    //返回主页倒计时
    counttime() {
      let timer = setInterval(() => {
        if (this.time > 0 && this.time <= 5) {
          this.time--;
        } else {
          clearInterval(timer);
          this.returnhome();
          this.time = 5;
        }
      }, 1000);
    },



    //初始化表单
    initForm: function () {
      this.step1Visible = true;
      this.step2Visible = false;
    },
    //打开用户信息展示开关
    displayUser() {
      this.$store.commit("loginAndregister/SET_USERSHOW", true);
    },
    //下一步
    nextStep: function () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          if (this.active++ > 2) { this.active = 0 }
          this.step1Visible = false;
          this.step2Visible = true;
        }
      });
    },
    //提交注册信息
    registerSubmit: function () {
      this.$refs.registerForm.validate(valid => {
        this.$store.dispatch("user/register", this.registerForm);
        this.user.username = this.registerForm.username;
        this.user.password = this.registerForm.password;
        this.$refs["registerForm"].resetFields();
        this.register = false;
        this.success = true;
        this.counttime()
      });
    },
    returnhome() {
      this.visible = false;
      this.displayUser();
      this.$store.dispatch("user/login", this.user);
    },
    handleClose() {
      console.log("原生handleClose");
      this.$store.commit("register/SET_VISIBLE", false);
    }
  },
  computed: {
    visible: {
      get() {
        return this.$store.getters["register/visible"];
      },
      set(visible) {
        this.$store.commit("register/SET_VISIBLE", visible);
      }
    }
  }
};
</script>

<style>
.register {
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 80%;
}

.register-step {
  width: 100%;
  text-align: left;
}

.register-dialog .el-dialog__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
</style>