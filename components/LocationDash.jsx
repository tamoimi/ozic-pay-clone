
import styles from "../styles/LocationDash.module.css";
import { Typography, Paper, Breadcrumbs } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

const LocationDash = () => {
  return (
    <>

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

    </>
  );
};

export default LocationDash;
