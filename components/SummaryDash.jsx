import { Typography, Paper, Grid, Skeleton } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SavingsIcon from "@mui/icons-material/Savings";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";
import { grey, blue } from "@mui/material/colors";
import { getTodayStatistics } from "../pages/api";
import { useEffect } from "react";
const SummaryDash = ({ currentMonth }) => {
  // 통계 조회 API
  const callAPI = () => getTodayStatistics(currentMonth);

  const { data, isLoading } = useQuery(
    ["/dashboard/todayStatistics", currentMonth],
    callAPI,
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    console.log("조회 결과", data);
  }, [data]);

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          paddingX: 3,
          paddingY: 3,
          marginY: 3,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6} sm={12} md={12}>
            <Typography sx={{ color: grey[500] }}>
              {format(currentMonth, "MM")}월 매출 금액
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            sm={12}
            md={12}
            container
            justifyContent={"flex-end"}
          >
            {isLoading ? (
              <Skeleton
                variant="text"
                animation="wave"
                width={120}
                sx={{ fontSize: "1rem" }}
              />
            ) : (
              <Typography variant={"h5"} sx={{ color: blue[500], pr: 1 }}>
                {/* addCommas 질문하기 */}
                {data?.totalSalesOfMonth ? data.totalSalesOfMonth : 0}원
              </Typography>
            )}
            <PointOfSaleIcon
              sx={{
                color: blue[500],
                width: "35%",
                height: "35%",
                ml: { xs: 4, sm: 1, md: 3, lg: 8 },
              }}
            />
          </Grid>

          <Grid item xs>
            <Typography>입금 예정 금액</Typography>
            <Typography>0원</Typography>
            <SavingsIcon />
          </Grid>

          <Grid item xs>
            <Typography>오늘 입금된 금액</Typography>
            <Typography>0원</Typography>
            <SavingsIcon />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SummaryDash;
