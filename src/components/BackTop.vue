<template>
  <el-button icon="el-icon-arrow-up" circle @click="backtop" class="backtop" v-show="isShow"></el-button>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      isShow: true
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    backtop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(scrollTop);
      if (scrollTop >= 60) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  },
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 1000;
}
/* .backtop {
  height: 60px;
  width: 60px;
  background-color: red;
  border-radius: 50%;
  box-shadow: 2px 2px 2px #cef;
  position: relative;
} */
/* .backtop::before {
  content: "";
  border: 16px solid transparent;
  position: absolute;
  border-bottom-color: orange; */
/* top: 50%; */
/* left: 50%; */
/* transform: translate(-50%);
  z-index: 1000; */
/* } */
/* .backtop:hover {
  background-color: #cef;
  box-shadow: 2px 2px 2px red;
} */
</style>
