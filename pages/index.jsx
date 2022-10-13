import LocationDash from "../components/LocationDash";
import SummaryDash from "../components/SummaryDash";
import { Calendar } from "../components/Calendar";
import NavBar from "../components/NavBar";
import NavigationList from "../components/NavigationList";
import { useRouter } from "next/router";

const OzicPay = () => {
  return (
    <>
      <section>
        <div className="layout1">
          
        </div>
        <div className="layout2">
          
          <main>
            <LocationDash />
            <SummaryDash />
            <Calendar />
          </main>
        </div>
      </section>

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
