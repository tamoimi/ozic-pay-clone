import { addMonths, subMonths } from "date-fns";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { useQuery } from "@tanstack/react-query";
import { getDailyStatistics } from "../../pages/api";
import { Paper } from "@mui/material";

export const Calendar = ({ currentMonth, setCurrentMonth }) => {
  const goToPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const goToCurrentMonth = () => {
    setCurrentMonth(new Date());
  };

  //data 조회 API
  // const { data: cellData, isLoading } = useQuery(
  //   ["/dashboard/dailyStatistics", currentMonth],
  //   () => getDailyStatistics(currentMonth),
  //   {
  //     keepPreviousData: true,
  //   }
  // );

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          paddingX: 3,
          paddingY: 2,
        }}
      >
        <CalendarHeader
          currentMonth={currentMonth}
          goToPrevMonth={goToPrevMonth}
          goToNextMonth={goToNextMonth}
          goToCurrentMonth={goToCurrentMonth}
        />
        <CalendarBody />
      </Paper>
    </>
  );
};
