import { addMonths, isSameMonth, subMonths, parse} from "date-fns";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { useQuery } from "@tanstack/react-query";
import { Paper } from "@mui/material";
import { getDailyStatistics, getHolidays } from "../../pages/api";
import { useEffect } from "react";
import format from "date-fns/format";
import { useState } from "react";

export const Calendar = ({ currentMonth, setCurrentMonth }) => {
  const [cellDatas, setCellDatas] = useState();

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
  const { data: cellData, isLoading } = useQuery(
    ["/dashboard/dailyStatistics", currentMonth],
    () => getDailyStatistics(currentMonth),
    {
      keepPreviousData: true,
    }
  );

  //휴일 여부
  const { data: holidayData, isLoading: isLoadingForHoliday } = useQuery(
    ["/api/holidays", currentMonth],
    () => getHolidays(currentMonth),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    let holidays;
    if (Array.isArray(holidayData)) {
      holidays = holidayData.map((holiday) => {
        const parsedDate = parse(holiday.locdate, "yyyyMMdd", new Date());
        return format(parsedDate, "yyyy-MM-dd");
      });
    } else {
      if (holidayData) {
        const parsedDate = parse(holidayData.locdate, "yyyyMMdd", new Date());
        holidays.push(format(parsedDate, "yyyy-MM-dd"));
      }
    }

    //합치기
    if (cellData) {
      const cellDatas = cellData.map((cell) => {
        //휴일 유무
        const isHoliday = holidays.includes(cell.referenceDate);

        //지급 완료 유무
        const isYesterday =
          cell.referenceDate < format(new Date(), "yyyy-MM-dd");
        const hasDepositAmount = cell.hasDepositAmount > 0;
        const isComplete = isYesterday || hasDepositAmount;

        const cellDate = parse(cell.referenceDate, "yyyy-MM-dd", new Date());

        //이번달 인지 아닌지
        const isCurrentMonth = isSameMonth(cellDate, currentMonth);
        return {
          ...cell,
          isHoliday,
          isComplete,
          isCurrentMonth,
        };
      });
      setCellDatas(cellDatas);
    }
  }, [cellData, holidayData, currentMonth]);

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
        <CalendarBody
          isLoading={isLoading && isLoadingForHoliday}
          data={cellDatas}
        />
      </Paper>
    </>
  );
};
