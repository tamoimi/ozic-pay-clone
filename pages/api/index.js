import format from "date-fns/format";
import axios from "axios";

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
  } = await axios({
    url: url,
    method: "POST",
    data: params,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjA1NjQ5MSwiaWF0IjoxNjY1OTcwMDkxfQ.Pp8UMHFB4q2H5YQm8mzwF1866VVqKK0tyUMN_SSPtNk",
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
    searchYearMonth: format(seatchDate, "yyyy-MM"),
  };
  const {
    data: { content },
  } = await axios({
    url: url,
    method: "POST",
    data: params,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NjA1NjQ5MSwiaWF0IjoxNjY1OTcwMDkxfQ.Pp8UMHFB4q2H5YQm8mzwF1866VVqKK0tyUMN_SSPtNk",
    },
  });
  console.log(" 하단 캘린더 조회 결과", content);
  return content;
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
