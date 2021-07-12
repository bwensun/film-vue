<template>
  <div class="login">
    <div class="loginDiv">
      <h2>登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="input"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="handleLogin"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
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
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: checkPass, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleLogin() {
      const that = this;
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          that.$store
            .dispatch("Login", that.ruleForm)
            .then(() => {
              that.$router.push({ path: "/" });
            })
            .catch(a => {
              console.log("error!");
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginDiv {
  height: 447.5px;
  width: 336px;
  border: 1px;
  border-color: #212121;
}
</style>
