import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { format } from "date-fns";
import { blue, grey, indigo, teal } from "@mui/material/colors";
import { NavigateBefore, NavigateNext, Today } from "@mui/icons-material";

export const CalendarHeader = ({
  currentMonth,
  goToPrevMonth,
  goToNextMonth,
  goToCurrentMonth,
}) => {
  return (
    <Grid
      container
      columns={{ xs: 7, sm: 7, md: 7 }}
      elevation={4}
      sx={{
        p: 2,
      }}
    >
      <Grid item xs={7} sm={7} md={1}>
        <Typography variant="h4" component="span">
          {format(currentMonth, "MM")}월
        </Typography>

        <Typography component="span" sx={{ marginLeft: 1 }}>
          {format(currentMonth, "yyyy")}년
        </Typography>
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
              sx={{ width: 16, height: 16, color: blue[500], marginRight: 1 }}
            />
            매출액
          </Typography>
          <Typography>
            <CircleIcon
              sx={{ width: 16, height: 16, color: grey[500], marginRight: 1 }}
            />
            입금 예정 정산액
          </Typography>
          <Typography>
            <CircleIcon
              sx={{ width: 16, height: 16, color: teal[500], marginRight: 1 }}
            />
            입금 완료 정산액
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={7} sm={7} md={2}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavigateBefore
            sx={{
              fontSize: 30,
              color: indigo[500],
              "&:hover": { color: blue[500], cursor: "pointer" },
            }}
            onClick={goToPrevMonth}
          />
          <Button
            variant="text"
            startIcon={<Today />}
            onClick={goToCurrentMonth}
            sx={{
              "&:hover": { color: blue[700], cursor: "pointer" },
            }}
          >
            이번 달
          </Button>
          <NavigateNext
            sx={{
              fontSize: 30,
              color: indigo[500],
              "&:hover": { color: blue[500], cursor: "pointer" },
            }}
            onClick={goToNextMonth}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
