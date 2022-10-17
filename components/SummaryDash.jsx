import { Typography, Paper, Grid, Skeleton } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SavingsIcon from "@mui/icons-material/Savings";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";
import { grey, blue, teal } from "@mui/material/colors";
import { getTodayStatistics } from "../pages/api";
import { useEffect } from "react";
import { addCommas } from "../pages/libs/Comma";

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
    <Paper
      elevation={4}
      sx={{
        paddingX: 3,
        paddingY: 3,
        marginY: 3,
      }}
    >
      {/* 월 매출 금액 */}
      <Grid container sx={{ minHeight: 110 }} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={4} container justifyContent={"center"}>
          <Grid item xs={10} sm={10} md={8} container alignItems={"center"}>
            <Grid item xs={6} sm={12} md={12}>
              <Typography sx={{ color: grey[500] }}>
                {/* color: name[shade] */}
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
                  {addCommas(
                    data?.totalSalesOfMonth ? data.totalSalesOfMonth : 0
                  )}
                  원
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item xs={2} sm={2} md={4} container alignItems={"center"}>
            <Grid item>
              <PointOfSaleIcon
                sx={{
                  color: blue[500],
                  width: "35%",
                  height: "35%",
                  ml: { xs: 4, sm: 1, md: 3, lg: 8 },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* 입금 예정 금액 */}
        <Grid
          item
          sx={{ borderLeft: { xs: 0, sm: 1 } }}
          xs={12}
          sm={4}
          container
          justifyContent={"center"}
        >
          <Grid item xs={10} sm={10} md={8} container alignItems={"center"}>
            <Grid item xs={6} sm={12} md={12}>
              <Typography sx={{ color: grey[500] }}>입금 예정 금액</Typography>
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
                <Typography variant={"h5"} sx={{ color: grey[500], pr: 1 }}>
                  {addCommas(
                    data?.expectedDepositAmount ? data.expectedDepositAmount : 0
                  )}
                  원
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item xs={2} sm={2} md={4} container alignItems={"center"}>
            <Grid item>
              <SavingsIcon
                sx={{
                  color: grey[500],
                  width: "35%",
                  height: "35%",
                  ml: { xs: 4, sm: 1, md: 3, lg: 8 },
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* 오늘 입금된 금액 */}
        <Grid
          item
          sx={{ borderLeft: { xs: 0, sm: 1 } }}
          xs={12}
          sm={4}
          container
          justifyContent={"center"}
        >
          <Grid item xs={10} sm={10} md={8} container alignItems={"center"}>
            <Grid item xs={6} sm={12} md={12}>
              <Typography sx={{ color: grey[500] }}>
                오늘 입금된 금액
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
                <Typography variant={"h5"} sx={{ color: teal[500], pr: 1 }}>
                  {addCommas(
                    data?.todayDepositAmount ? data.todayDepositAmount : 0
                  )}
                  원
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid item xs={2} sm={2} md={4} container alignItems={"center"}>
            <Grid item>
              <SavingsIcon
                sx={{
                  color: teal[500],
                  width: "35%",
                  height: "35%",
                  ml: { xs: 4, sm: 1, md: 3, lg: 8 },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SummaryDash;
