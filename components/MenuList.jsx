import React from "react";
import { ListItem } from "@mui/material";
import ListItemIcon from "@mui/material";
import ListItemText from "@mui/material";

export const MenuList = (
  <div>
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="거래 내역" />
    </ListItem>
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="매입 내역" />
    </ListItem>
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary="정산 내역" />
    </ListItem>
    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <ListItemText />
    </ListItem>
  </div>
);


