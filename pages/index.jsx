import LocationDash from "../components/LocationDash";
import SummaryDash from "../components/SummaryDash";
import { Calendar } from "../components/Calendar";
import NavBar from "../components/NavBar";
import NavigationList from "../components/NavigationList";

const OzicPay = () => {
  return (
    <>
      <container>
        <div className="layout1">
          <NavigationList />
        </div>
        <div className="layout2">
          <NavBar />
          <main>
            <LocationDash />
            <SummaryDash />
            <Calendar />
          </main>
        </div>
      </container>

      <style>
        {`
      main {
        padding: 24px;
        background: rgb(238, 238, 238);
      }
      container {
        width: 100%;
        display: flex;
      }
      .layout1 {
        flex: 1;
      }
      .layout2 {
        flex: 6;
      }
      `}
      </style>
    </>
  );
};
export default OzicPay;
