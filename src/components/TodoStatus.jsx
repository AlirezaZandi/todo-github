import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import TodoCard from "./TodoCard";
import AddTodoPopop from "./AddTodoPopop";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColorLens } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { removeTodoStatus, updateTodoStatusName } from "../store/todoStatus";
import { Droppable } from "react-beautiful-dnd";
import { removeTodo } from "../store/todo";
import ColorPicker from "./ColorPicker";

const TodoStatus = ({ id }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [statusTitle, setStatusTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { name, todos, color } = useSelector((state) =>
    state.todoStatus.find((status) => status.id === id)
  );

  useEffect(() => {
    setStatusTitle(name);
  }, []);

  const todoList = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleDeleteStatus = () => {
    todos.forEach((todoId) => {
      dispatch(removeTodo({ id: todoId }));
    });
    dispatch(removeTodoStatus({ id: id }));
  };

  const handleUpdateStatusName = () => {
    dispatch(updateTodoStatusName({ id: id, name: statusTitle }));
    setEditMode(false);
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
              backgroundColor: color + ".light",
              borderRadius: "0.5rem",
              color: color + ".text",
            }}>
            {/* title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <TextField
                sx={{
                  display: editMode ? "block" : "none",

                  "& input": {
                    color: color + ".contrastText",
                    width: "100%",
                  },
                }}
                variant={"outlined"}
                size="small"
                value={statusTitle}
                onChange={(e) => setStatusTitle(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleUpdateStatusName();
                }}
                onBlur={() => handleUpdateStatusName()}
              />

              <Typography
                variant="h6"
                sx={{
                  display: editMode ? "none" : "block",
                  cursor: "pointer",
                  color: color + ".contrastText",
                }}
                onClick={() => setEditMode(true)}>
                {name || "Untitled"}
              </Typography>

              <Box sx={{ display: "flex" }}>
                <ColorPicker statusId={id} />
                <IconButton onClick={handleDeleteStatus}>
                  <DeleteIcon
                    sx={{
                      color:
                        color === "default"
                          ? "action.active"
                          : color + ".contrastText",
                    }}
                  />
                </IconButton>
              </Box>
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
              <Button
                variant="contained"
                onClick={() => setOpenDialog(true)}
                color={color === "default" ? "primary" : "inherit"}>
                Add new item
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
