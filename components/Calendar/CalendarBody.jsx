import { Grid, Skeleton, Typography } from "@mui/material";
import { blue, grey, red, teal } from "@mui/material/colors";
import { useSetRecoilState } from "recoil";
import clientDashBoard from "../../pages/recoil/atom";
import { addCommas } from "../../pages/libs/Comma";
import { parse, format } from "date-fns";
parse;

export const CalendarBody = ({ isLoading, data }) => {
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  // modal
  const setSelectedCell = useSetRecoilState(clientDashBoard);
  const cellClickHandler = (data) => {
    setSelectedCell({ ...data, isOpen: true });
  };

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
        {isLoading
          ? Array.from({ length: 35 }).map((_, index) => (
              <Grid
                key={index}
                item
                xs={7}
                sm={1}
                sx={{ borderBottom: 1, minHeight: 110, p: 1 }}
                className="dateBox"
              >
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={30}
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={150}
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={150}
                  sx={{ fontSize: "1rem" }}
                />
              </Grid>
            ))
          : data?.map((cell, index) => (
              <Grid
                key={index}
                item
                xs={7}
                sm={1}
                sx={{
                  borderBottom: 1,
                  height: 110,
                  p: 1,
                }}
              >
                <div onClick={() => cellClickHandler(cell)}>
                  <Typography
                    sx={{
                      color:
                        index % 7 === 0 || index % 7 === 6 || cell.isHoliday
                          ? red[500]
                          : grey[500],
                      p: 1,
                      fontWeight: cell.isCurrentMonth ? 600 : null,
                      opacity: cell.isCurrentMonth ? null : 0.5,
                    }}
                  >
                    {format(
                      parse(cell.referenceDate, "yyyy-MM-dd", new Date()),
                      "dd"
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      color: blue[500],
                      paddingLeft: 1,
                      fontWeight: cell.isCurrentMonth ? 600 : null,
                      opacity: cell.isCurrentMonth ? null : 0.5,
                    }}
                  >
                    {addCommas(cell.totalPayment)}
                  </Typography>
                  <Typography
                    sx={{
                      color: cell.isComplete ? teal[500] : grey[500],
                      paddingLeft: 1,
                      fontWeight: cell.isCurrentMonth ? 600 : null,
                      opacity: cell.isCurrentMonth ? null : 0.5,
                    }}
                  >
                    {cell.isComplete
                      ? addCommas(cell.depositAmount)
                      : addCommas(cell.expectedDepositAmount)}
                  </Typography>
                </div>
              </Grid>
            ))}
      </Grid>
      <style>{`
      .css-pz3qmw-MuiGrid-root {
        cursor: pointer;
        transition: all 0.5s;
      }
      .css-pz3qmw-MuiGrid-root:hover {
        background: #f2f2f2;
      }
      `}</style>
    </>
  );
};
