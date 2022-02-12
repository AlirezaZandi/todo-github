import React from "react";
import TodoStatusList from "../components/TodoStstusList";
import { Box } from "@mui/material";

import Drawer from "../components/drawer/Drawer";

const TodoAppPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TodoStatusList />
      <Drawer />
    </Box>
  );
};

export default TodoAppPage;
