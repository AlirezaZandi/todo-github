import { Box, Button } from "@mui/material";
import React from "react";
import TodoStatus from "./TodoStatus";

import AddIcon from "@mui/icons-material/Add";
import AddStatusDialog from "./AddStatusDialog";

const TodoStstusList = () => {
  const [todoStatus, setTodoStatus] = React.useState([
    {
      id: Date.now(),
      title: "To Do",
    },
    {
      id: Date.now(),
      title: "In Progress",
    },
    {
      id: Date.now(),
      title: "Done",
    },
  ]);

  const [todosList, setTodosList] = React.useState([
    {
      id: Date.now() + 1,
      title: "Learn React",
      status: "To Do",
    },
    {
      id: Date.now() + 2,
      title: "Learn React",
      status: "In Progress",
    },
    {
      id: Date.now() + 3,
      title: "Learn React",
      status: "Done",
    },
    {
      id: Date.now() + 4,
      title: "Learn React",
      status: "To Do",
    },
  ]);

  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          paddingInline: "2rem",
          paddingBottom: "2rem",
          overflow: "overlay",

          "& > *": {
            flexShrink: 0,
          },
        }}
        height="80%">
        {todoStatus.map((status) => {
          const todos = todosList.filter(
            (todo) => todo.status === status.title
          );
          return (
            <TodoStatus
              key={status.id}
              title={status.title}
              todos={todos}
              setTodos={setTodosList}
            />
          );
        })}
        <Button
          variant="text"
          sx={{ alignSelf: "flex-start", color: "#ddd" }}
          onClick={() => setOpenDialog(true)}>
          <AddIcon />
          Add new status
        </Button>
      </Box>
      <AddStatusDialog
        open={openDialog}
        setOpen={setOpenDialog}
        setStatus={setTodoStatus}
      />
    </>
  );
};

export default TodoStstusList;
