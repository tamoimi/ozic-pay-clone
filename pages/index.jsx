import { Box } from "@mui/system";
import NavBar from "../components/NavBar";
import styles from "../styles/index.module.css";
import { Typography, Paper, Breadcrumbs } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function OzicPay() {
  return (
    <>
      <NavBar />
      <main>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: 96,
            },
          }}
        >
          <Paper elevation={3} className={styles.location}>
            <Typography variant="h5">대시보드</Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography variant="h7" gutterBottom>
                홈
              </Typography>
              <Typography variant="h7">
                <DashboardIcon /> 대시보드
              </Typography>
            </Breadcrumbs>
          </Paper>
        </Box>
      </main>
      <style>
        {`
      main {
        padding: 24px;
        background: rgb(238, 238, 238);
      }
      `}
      </style>
    </>
  );
}
