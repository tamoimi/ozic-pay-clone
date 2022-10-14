import { create } from "@mui/material/styles/createTransitions";
import format from "date-fns/format";
import axios from "axios";

// SummaryDash date
// 대시보드 상단 내 상점 현황 데이터를 가져올것

// *key 를 숨기기 위해 & 서버?를 나누기 위해 .env파일에 키를 저장해서 불러와 사용함

export const getTodayStatistics = async (searchDate) => {
  let url = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/todayStatistics`;
  const params = {
    searchYearMonth: format(searchDate, "yyyy-MM"),
  };
  console.log({ params });

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

  const {
    data: { content },
  } = await axios({
    url: url,
    method: "POST",
    data: params,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJpZHgiOjEsImF1dGhvcml0eSI6IkFETUlOIiwiaXNVc2UiOnRydWUsImV4cCI6MTY2NTgxMjM3OCwiaWF0IjoxNjY1NzI1OTc4fQ.I5CylDFWgtreoErKIOdNlYmiwMO8blWiLw2F1R1moZE",
    },
  });

  console.log("조회 결과 백단", content);

  return content;
};

// expectedDepositAmount
// : 
// 0
// todayDepositAmount
// : 
// 0
// totalSalesOfMonth
// : 
// 1000