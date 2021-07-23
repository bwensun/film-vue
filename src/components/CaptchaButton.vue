<template>
  <el-button type="primary" :disabled="isDisabled" @click="getCaptcha">
    {{ isDisabled ? count + "s后获取" : click }}
  </el-button>
</template>
<script>
const TIME_COUNT = 60;
export default {
  name: "captcha-button",
  props: {
    registerForm: null
  },
  data: () => ({
    count: TIME_COUNT,
    isDisabled: false,
    click: "获取验证码"
  }),
  methods: {
    countTime() {
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.isDisabled = true;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.isDisabled = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    getCaptcha() {
      //调用验证码接口
      const captchaDTO = {
        username: this.registerForm.username,
        to: this.registerForm.email,
        captchaType: "register"
      };
      console.log("captchaDTO: %o", captchaDTO);
      this.$store.dispatch("user/getCaptcha", captchaDTO);
      //修改计时器
      this.countTime();
    }
  }
};
</script>
