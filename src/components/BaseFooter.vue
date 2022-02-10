<template>
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
                ></el-avatar>&nbsp; &nbsp;
                <span style="line-height: 36px">霸道学长孙博文</span>
              </div>
            </li>
            <li>
              <div class="footer-3">
                <el-avatar
                  shape="square"
                  fit="scale-down"
                  :size="36"
                  :src="
                    '../../static/img/baobao.png'
                  "
                ></el-avatar>&nbsp; &nbsp;
                <span style="line-height: 36px">跑跑宝宝</span>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="2">
        <div class="font-small footer-bottom">
          <span>Copyright © 2021 Film网站</span>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {

    }

  }
};
</script>

<style scoped>
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
.footer-2 li {
  margin-top: 20px;
}
.footer-3 {
  display: flex;
  align-content: center;
}
.footer-bottom {
  padding-top: 100px;
}
</style>
