import { Grid, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const CalendarBody = () => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  return (
    <>
      <Grid
        container
        columns={{ xs: 7, sm: 7, md: 7 }}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          p: 1,
        }}
      >
        {days.map((day, index) => (
          <Grid
            item
            key={index}
            sm={1}
            md={1}
            sx={{
              display: { xs: "none", sm: "block" },
              p: 1,
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                color:
                  day === "일요일" || day === "토요일" ? red[500] : grey[700],
              }}
            >
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
