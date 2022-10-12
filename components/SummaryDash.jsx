import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Paper, Grid } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const SummaryDash = () => {
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
          <Grid item xs>
            {/* {?}월 로 바꿔야함 */}
            <Typography>10월 매출 금액</Typography>
          </Grid>
          <Grid item xs>
            <Typography>입금 예정 금액</Typography>
          </Grid>
          <Grid item xs>
            <Typography>오늘 입금된 금액</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SummaryDash;
