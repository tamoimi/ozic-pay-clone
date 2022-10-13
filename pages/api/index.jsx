import format from "date-fns";

// SummaryDash date
export const getTodayStatistics = async (searchDate: Date) => {
  const url = `/dashboard/todayStatistics`;
  const params = {
    searchYearMonth: format(searchDate, "yyyy-MM"),
  };
  const {
    data: { content },
  } = await process.env.NEXT_APP_BASE_URL.post(url, params);
  return content;
};
