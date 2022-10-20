import format from "date-fns/format";
import Axios from "axios";

// SummaryDash data
// 대시보드 상단 내 상점 현황 데이터를 가져올것
// *key 를 숨기기 위해 & 서버?를 나누기 위해 .env파일에 키를 저장해서 불러와 사용함

export const getTodayStatistics = async (searchDate) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/todayStatistics`;
  const params = {
    searchYearMonth: format(searchDate, "yyyy-MM"),
  };
  console.log({ params });
  const {
    data: { content },
  } = await Axios({
    url: url,
    method: "POST",
    data: params,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjIzMjE1NSwiaWF0IjoxNjY2MTQ1NzU1fQ.dntEKdSipk5_kBOkJtzRJ953ajOnV_u_06PS8Lmugu4",
    },
  });
  console.log("조회 결과 백단", content);
  return content;
};

// Calendar data
// 대시 보드 하단 캘린더 조회

export const getDailyStatistics = async (searchDate) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/dailyStatistics`;
  const params = {
    searchYearMonth: format(searchDate, "yyyy-MM"),
  };
  const {
    data: { content },
  } = await Axios({
    url: url,
    method: "POST",
    data: params,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjIzMjE1NSwiaWF0IjoxNjY2MTQ1NzU1fQ.dntEKdSipk5_kBOkJtzRJ953ajOnV_u_06PS8Lmugu4",
    },
  });
  console.log("조회 결과 데일리", content);
  return content;
};

// Calendar data
// 대시 보드 하단 캘린더 공휴일 조회

export const getHolidays = async (date) => {
  const year = format(date, "yyyy");
  const month = format(date, "MM");
  const paramString = `solYear=${year}&solMonth=${month}&ServiceKey=${process.env.NEXT_PUBLIC_OPEN_API_KEY}&_type=json`;
  const url = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?${paramString}`;
  const {
    data: {
      response: {
        body: {
          items: { item },
        },
      },
    },
  } = await Axios.create().get(url);
  return item;
};

// 데이터를 fetch로 가지고 올때의 방법인데..
// const query = Object.keys(params)
//   .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
//   .join("&");
//eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjA1MjgyNiwiaWF0IjoxNjY1NDQ4MDI2fQ.DmdBe7oGu0ZljPj6U-jW-rSRDhsNLFvKdMDsfwdwx18
// url = url + query;
// const {
//   data: { content },
// } = await fetch(url, {
//   headers:
//     eyJhbGciOiJIUzI1NiJ9
//       .eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjA1MjgyNiwiaWF0IjoxNjY1NDQ4MDI2fQ
//       .DmdBe7oGu0ZljPj6U -
//     jW -
//     rSRDhsNLFvKdMDsfwdwx18,
// });
