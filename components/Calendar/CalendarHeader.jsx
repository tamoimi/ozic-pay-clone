import { Grid, Paper, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const CalendarHeader = () => {
  return (
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
          <Typography>10월</Typography>
          <Typography>2022년</Typography>
        </Grid>

        <Grid item xs={7} sm={7} md={4}>
          <Stack
            direction={"row"}
            alignItems="flex-end"
            spacing={2}
            sx={{ height: "100%", minWidth: 400 }}
          >
            <Typography>
              <CircleIcon
                sx={{ width: 16, height: 16}}
              />
              매출액
            </Typography>
            <Typography>
              <CircleIcon
                sx={{ width: 16, height: 16 }}
              />
              입금 예정 정산액
            </Typography>
            <Typography>
              <CircleIcon
                sx={{ width: 16, height: 16}}
              />
              입금 완료 정산액
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs>
          <Typography>입금 예정 금액</Typography>
        </Grid>
        <Grid item xs>
          <Typography>오늘 입금된 금액</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
