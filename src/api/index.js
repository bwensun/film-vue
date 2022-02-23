import request from "@/utils/request";
import axios from "axios";
// import { axios } from "vue/types/umd";

//电影分页查询
export function getFilmList(pageNo, pageSize) {
  const page = {
    pageNo: pageNo,
    pageSize: pageSize
  };
  return request({
    url: "/film/page",
    method: "post",
    data: page
  });
}

//用户活跃度排行
export function getActivityRank(count) {
  return request({
    url: `/rank/activity?count=${count}`,
    method: "get"
  });
}

//注册
export function register(userInfo) {
  return request({
    url: "/register",
    method: "post",
    data: userInfo
  });
}

//登录
export function login(loginDTO) {
  return request({
    url: "/login",
    method: "post",
    data: loginDTO
  });
}

//获取验证码
export function getCaptcha(captchaDTO) {
  return request({
    url: "/captcha/gen",
    method: "post",
    data: captchaDTO
  });
}
//用户详情接口
export function getUserInfo(id) {
  return request({
    url: "/user/" + id,
    method: "get"
  });
}
//用户注销
export function layout(token) {
  return axios({
    method: "DELETE",
    url: "https://api.bowensun.top/logout",
    headers: { Authorization: "Bearer" + " " + token }
  });
}
//获取电影详情
export function getFilmDetails(id) {
  return axios({
    method: "POST",
    url: "https://api.bowensun.top/film/" + id
  });
}
