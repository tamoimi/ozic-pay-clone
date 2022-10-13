import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ListSubheader } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CalculateIcon from "@mui/icons-material/Calculate";
import Link from "next/link";

const NavigationList = () => {
  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="main mailbox folders">
          {/* 빈칸 */}
          <ListItemButton>
            <ListItemIcon>
              <KeyboardArrowLeftIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider />

          {/* 거래 */}

          <ListSubheader>거래</ListSubheader>
          <Link href="/Payments">
            <a>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <PaymentsIcon />
                </ListItemIcon>
                <ListItemText primary="거래 내역" />
              </ListItemButton>
            </a>
          </Link>

          <Divider />

          {/* 매입 */}
          <ListSubheader>매입</ListSubheader>
          <Link href="/Purchases">
            <a>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="매입 내역" />
              </ListItemButton>
            </a>
          </Link>
          <Divider />
          {/* 정산 */}
          <ListSubheader>정산</ListSubheader>
          <Link href="/Settlements">
            <a>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary="정산 내역" />
              </ListItemButton>
            </a>
          </Link>
        </List>
      </Box>
      <style>
        {`
          a {
            text-decoration: none;
            color: black;
          }
        `}
      </style>
    </>
  );
};

export default NavigationList;
