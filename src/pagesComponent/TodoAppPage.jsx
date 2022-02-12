import React from "react";
import TodoStatusList from "../components/TodoStstusList";
import { Box } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LabelIcon from "@mui/icons-material/Label";
import BadgesDialog from "../components/dialogs/BadgesDialog";
import Drawer from "../components/drawer/Drawer";

const actions = [{ icon: <LabelIcon />, name: "Add Badge" }];

const TodoAppPage = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TodoStatusList />
      {/* <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => setOpenDialog(true)}
          />
        ))}
      </SpeedDial>
      <BadgesDialog open={openDialog} setOpen={setOpenDialog} /> */}
      <Drawer />
    </Box>
  );
};

export default TodoAppPage;
