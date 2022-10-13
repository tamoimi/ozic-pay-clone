import { create } from "@mui/material/styles/createTransitions";
import format from "date-fns";

// SummaryDash date
// 대시보드 상단 내 상점 현황 데이터를 가져올것

// *key 를 숨기기 위해 & 서버?를 나누기 위해 .env파일에 키를 저장해서 불러와 사용함

export const getTodayStatistics = async (searchDate) => {
  const url = `${process.env.NEXT_APP_BASE_URL}/dashboard/todayStatistics`;
  const params = {
    searchYearMonth: format(searchDate, "yyyy-MM"),
  };
  const {
    data: { content },
  } = await fetch.post(url, params);
  return content;
};
