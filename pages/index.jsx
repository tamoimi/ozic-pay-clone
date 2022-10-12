import NavBar from "../components/NavBar";
import LocationDash from "../components/LocationDash";
import SummaryDash from "../components/SummaryDash";
import { useState } from "react";
import { Drawer } from "@mui/material";
import Divider from "@mui/material";
import IconButton from "@mui/material";
import List from "@mui/material";
import MenuList from "@mui/material";
import { Calendar } from "../components/Calendar";

export default function OzicPay() {
  // const [open, setOpen] = useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <NavBar />
      <Drawer>
        <div>
          <IconButton></IconButton>
        </div>
        <Divider />
        <List>
          <MenuList />
        </List>
      </Drawer>
      <main>
        <LocationDash />
        <SummaryDash />
        <Calendar />
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
