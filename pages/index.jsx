import LocationDash from "../components/LocationDash";
import SummaryDash from "../components/SummaryDash";
import { Calendar } from "../components/Calendar/Calendar";
import { useState } from "react";
import Breadcrumb from "../components/Navi";
import { Dashboard } from "@mui/icons-material";

const OzicPay = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <>
      <main>
        <LocationDash />
        <SummaryDash currentMonth={currentMonth} />
        <Calendar currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      </main>

      <style>
        {`
      main {
        height: 100%;
        padding: 24px;
        background: rgb(238, 238, 238);
      }
      `}
      </style>
    </>
  );
};
export default OzicPay;
