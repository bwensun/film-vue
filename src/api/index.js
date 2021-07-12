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