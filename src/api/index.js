import request from "@/utils/request";

//电影分页查询
export function getFilmList(pageNumber, pageSize) {
  const page = {
    pageNumber,
    pageSize
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
    url: "/user/activity/rank?count=5",
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
export function getRegisterCaptcha(captchaDTO) {
  return request({
    url: "/captcha/gen",
    method: "post",
    data: captchaDTO
  });
}