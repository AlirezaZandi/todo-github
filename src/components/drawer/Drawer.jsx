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
import ListIcon from "@mui/icons-material/List";
import LabelIcon from "@mui/icons-material/Label";
import MailIcon from "@mui/icons-material/Mail";
import BadgesDialog from "../dialogs/BadgesDialog";
import BadgdesListDialog from "../dialogs/BadgesListDialog";

const badgesMenu = [
  {
    label: "Add badge",
    icon: <LabelIcon />,
  },
  {
    label: "Badges list",
    icon: <ListIcon />,
  },
];

export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [openAddBadgeDialog, setOpenAddBadgeDialog] = React.useState(false);
  const [openBadgeListDialog, setOpenBadgeListDialog] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((p) => !p);
  };

  const handleOpenMenu = (menuIndex) => {
    if (menuIndex === 0) {
      setOpenAddBadgeDialog(true);
    } else if (menuIndex === 1) {
      setOpenBadgeListDialog(true);
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}>
      <List>
        {badgesMenu.map((menu, index) => (
          <ListItem button key={index} onClick={() => handleOpenMenu(index)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Pages", "page1", "page2"].map((text, index) => (
          <ListItem button key={text} disabled>
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
        icon={<MenuIcon />}
      />
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}>
        {list()}
      </SwipeableDrawer>
      <BadgesDialog open={openAddBadgeDialog} setOpen={setOpenAddBadgeDialog} />
      <BadgdesListDialog
        open={openBadgeListDialog}
        setOpen={setOpenBadgeListDialog}
      />
    </>
  );
}
