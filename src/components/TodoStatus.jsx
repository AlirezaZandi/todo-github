import React from "react";

import { Box, Button, Paper, Typography } from "@mui/material";
import TodoCard from "./TodoCard";
import AddTodoPopop from "./AddTodoPopop";

const TodoStatus = ({ title }) => {
  //create todos state
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn JS",
    },
    {
      id: 3,
      title: "Learn JSX",
    },
    {
      id: 4,
      title: "Learn HTML",
    },
  ]);

  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <Paper
        elevation={5}
        sx={{
          height: "90%",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          p: "1rem",
          gap: "1rem",
        }}>
        {/* title */}
        <Box>
          <Typography variant="h5" component={"h3"}>
            {title}
          </Typography>
        </Box>

        {/* todos */}
        <Box
          flex={1}
          sx={{
            overflowY: "overlay",
            "& > *": {
              marginInline: "1rem",
              marginBottom: ".75rem",
            },
          }}>
          {todos.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                title={todo.title}
                todos={todos}
                setTodos={setTodos}
                id={todo.id}
              />
            );
          })}
        </Box>

        {/* add todo */}
        <Box>
          <Button variant="contained" onClick={() => setOpenDialog(true)}>
            Add new todo
          </Button>
        </Box>
      </Paper>
      <AddTodoPopop
        open={openDialog}
        setOpen={setOpenDialog}
        todos={todos}
        setTodo={setTodos}
      />
    </>
  );
};

export default TodoStatus;
