import React from "react";

import { Box, Button, Paper, Typography } from "@mui/material";
import TodoCard from "./TodoCard";
import AddTodoPopop from "./AddTodoPopop";

const TodoStatus = ({ title, todos, setTodos }) => {
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
      <Paper
        elevation={5}
        sx={{
          height: "95%",
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
        setTodo={setTodos}
        statusTitle={title}
      />
    </>
  );
};

export default TodoStatus;
