import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LabelIcon from "@mui/icons-material/Label";
import MailIcon from "@mui/icons-material/Mail";

export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((p) => !p);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        onClick={toggleDrawer}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<MenuIcon />}></SpeedDial>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}>
        {list()}
      </SwipeableDrawer>
    </>
  );
}
