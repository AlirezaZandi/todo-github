import React from "react";

import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import TodoCard from "./TodoCard";
import AddTodoPopop from "./AddTodoPopop";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import { removeTodoStatus } from "../store/todoStatus";
import { Droppable } from "react-beautiful-dnd";
import { removeTodo } from "../store/todo";

const TodoStatus = ({ id }) => {
  const { name, todos } = useSelector((state) =>
    state.todoStatus.find((status) => status.id === id)
  );

  const todoList = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDeleteStatus = () => {
    console.log(todoList);
    todos.forEach((todoId) => {
      dispatch(removeTodo({ id: todoId }));
    });
    dispatch(removeTodoStatus({ id: id }));
  };

  return (
    <>
      <Droppable droppableId={id}>
        {(provided) => (
          <Paper
            elevation={5}
            sx={{
              height: "95%",
              maxWidth: "400px",
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              p: "1rem",
              gap: "1rem",
            }}>
            {/* title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Typography variant="h5" component={"h3"}>
                {name}
              </Typography>
              <IconButton color="default" onClick={handleDeleteStatus}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              flex={1}
              sx={{
                overflowY: "overlay",
                "& > *": {
                  marginInline: "1rem",
                  marginBottom: ".75rem",
                },
              }}>
              {todos.map((todo, index) => (
                <TodoCard id={todo} key={todo} statusId={id} index={index} />
              ))}
              {provided.placeholder}
            </Box>
            {/* add todo */}
            <Box>
              <Button variant="contained" onClick={() => setOpenDialog(true)}>
                Add new todo
              </Button>
            </Box>
          </Paper>
        )}
      </Droppable>
      <AddTodoPopop open={openDialog} setOpen={setOpenDialog} statusId={id} />
    </>
  );
};

export default TodoStatus;
