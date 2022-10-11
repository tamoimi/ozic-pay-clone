import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../components/NavBar";
import styles from "../styles/index.module.css";

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
            <h2>대시보드</h2>
            <p>홈 / 대시보드</p>
          </Paper>
        </Box>
      </main>
      <style>
        {`
      main {
        padding: 24px;
        background: rgb(238, 238, 238);
      }
      }
      `}
      </style>
    </>
  );
}
