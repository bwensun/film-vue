import request from "@/utils/request";

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
