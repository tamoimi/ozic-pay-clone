import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import ListItemLink from "../components/NavLink";
import CalculateIcon from "@mui/icons-material/Calculate";
import ListAltIcon from "@mui/icons-material/ListAlt";

const PaymentList = [
  {
    component: <PaymentsIcon />,
    componentActive: <PaymentsIcon color="primary" />,
    primary: "거래 내역",
    to: "/payments"
  }
];

const PurchaseList = [
  {
    component: <AddShoppingCartIcon />,
    componentActive: <AddShoppingCartIcon color="primary" />,
    primary: "매입 내역",
    to: "/purchases"
  }
];

const SettlementList = [
  {
    component: <CalculateIcon />,
    componentActive: <CalculateIcon color="primary" />,
    primary: "정산 내역",
    to: "/settlements"
  }
  // {
  //   component: <ListAltIcon />,
  //   componentActive: <ListAltIcon color="primary" />,
  //   primary: "정산 지급 내역",
  //   to: "/settlements/payout"
  // }
];

export const PaymentListItems = () => (
  <>
    <ListSubheader component="div" inset>
      거래
    </ListSubheader>
    {PaymentList.map((list, index) => (
      <ListItemLink
        to={list.to}
        primary={list.primary}
        icon={list.component}
        iconActive={list.componentActive}
        key={`Payment ${index}`}
      />
    ))}
  </>
);

export const PurchaseListItems = () => {
  return (
    <>
      <ListSubheader component="div" inset>
        매입
      </ListSubheader>
      {PurchaseList.map((list, index) => (
        <ListItemLink
          to={list.to}
          primary={list.primary}
          icon={list.component}
          iconActive={list.componentActive}
          key={`Purchase ${index}`}
        />
      ))}
    </>
  );
};

export const SettlementListItem = () => (
  <>
    <ListSubheader component="div" inset>
      정산
    </ListSubheader>
    {SettlementList.map((list, index) => (
      <ListItemLink
        to={list.to}
        primary={list.primary}
        icon={list.component}
        iconActive={list.componentActive}
        key={`Settlement ${index}`}
      />
    ))}
  </>
);