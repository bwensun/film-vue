<template>
  <div class="encourag font-base-small">
    <div class="blur"></div>
    <div class="font">
      <p align="left">嗨！朋友</p>
      <p align="left">{{ sententce }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseFooter from "@/components/baseFooter";
export default {
  name: "Greeting",
  components: {
    baseFooter
  },
  data() {
    return {
      sententce: "所有的伟大，都源于一个勇敢的开始"
    };
  },
  methods: {
    getOne: function () {
      axios
        .get('https://v1.hitokoto.cn/?c=k')
        .then(response => {
          this.sententce = response.data.hitokoto;
        })
    },
  },
  created() {
    this.getOne();
  }
};
</script>

<style scoped>
.encourag {
  position: relative;
  padding-top: 10px;
  padding-left: 20px;
  background-image: linear-gradient(
    135deg,
    rgb(240, 222, 222) 0,
    rgb(133, 133, 189) 42%,
    rgb(191, 248, 191) 100%
  );
  /* backdrop-filter: blur(20px); */
  width: 75%;
  height: 120px;
}
.font-base-small {
  border-radius: 16px;
  box-shadow: 6px 8px 10px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  /* filter: blur(10px); */
  /* filter: alpha(opacity=30); */
  z-index: 1;
}
.blur {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(100px);
  z-index: 2;
}
.font {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
