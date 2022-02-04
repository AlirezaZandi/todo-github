import React from "react";

import { Box, Button, Paper, Typography } from "@mui/material";

const TodoStatus = ({ id, title, todos, setTodos }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        height: "90%",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        p: "1rem",
      }}>
      {/* title */}
      <Box>
        <Typography variant="h6" component={"h3"}>
          Todo Status title
        </Typography>
      </Box>

      {/* todos */}
      <Box
        flex={1}
        sx={{
          overflowY: "overlay",
          display: "flex",
          flexDirection: "column",
        }}>
        <button>Todo</button>
      </Box>

      {/* add todo */}
      <Box>
        <Typography variant="h6" component={"h3"}>
          Add Todo
        </Typography>
      </Box>
    </Paper>
  );
};

export default TodoStatus;
