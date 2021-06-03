<template>
  <div class="index">
    <el-container>
      <el-header>
        <el-row type="flex">
          <el-col :span="16" :offset="3">
            <div class="header-banner">
              <div class="header-banner-left">
                <div class="header-logo">
                  <h1>
                    Film
                  </h1>
                </div>
                <div class="header-menu">
                    <el-menu :default-active="activeIndex" background-color="#EBECED" class="header-menu-list" mode="horizontal"  @select="handleSelect">
                        <el-menu-item index="1">公告</el-menu-item>
                        <el-menu-item index="2">榜单</el-menu-item>
                    </el-menu>    
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="3" :push="2">
            <div class="header-banner-right">
              <el-button type="text">登录</el-button>
              <el-button type="text">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!-- <el-container>
        <el-main>Main</el-main>
        <el-aside width="400px">Aside</el-aside>
      </el-container>
      <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-banner-left {
    display: flex;
}
.header-menu {
    display: flex;
}
.el-header {
  background-color: #EBECED;
  color: #333;
  text-align: center;
  height: 70px !important;
}
.header-banner-right {
  height: 70px;
  display: inline-flex;
}
</style>
