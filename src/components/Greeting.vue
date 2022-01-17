<template>
  <div class="encourag font-base-small">
    <p align="left">嗨！朋友</p>
    <p align="left">{{sententce}}</p>
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
    getOne: function(){
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
</style>
