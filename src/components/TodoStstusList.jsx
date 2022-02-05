import { Box, Button } from "@mui/material";
import React, { useCallback } from "react";
import TodoStatus from "./TodoStatus";

import AddIcon from "@mui/icons-material/Add";
import AddStatusDialog from "./AddStatusDialog";
import { useSelector, useDispatch } from "react-redux";

import {
  addTodoToStatus,
  removeTodoFromStatus,
  UpdateTodoInStatusOrder,
} from "../store/todoStatus";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TodoStstusList = () => {
  const todoStatus = useSelector((state) => state.todoStatus);
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === "droppable") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const DestStatus = todoStatus.find((status) => {
      return status.id === destination.droppableId;
    });

    if (destination.droppableId === source.droppableId) {
      const newTaskIds = Array.from(DestStatus.todos);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      dispatch(
        UpdateTodoInStatusOrder({
          statusId: destination.droppableId,
          newOrder: newTaskIds,
        })
      );
      return;
    }

    dispatch(
      removeTodoFromStatus({ id: source.droppableId, todoId: draggableId })
    );
    const newTaskIds = Array.from(DestStatus.todos);
    newTaskIds.splice(destination.index, 0, draggableId);
    dispatch(
      UpdateTodoInStatusOrder({
        statusId: destination.droppableId,
        newOrder: newTaskIds,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          paddingInline: { xs: ".5rem", md: "2rem" },
          overflow: "auto",
          "& > *": {
            flexShrink: 0,
          },
        }}
        height="80%">
        {todoStatus.map((status) => {
          return <TodoStatus key={status.id} id={status.id} />;
        })}
        <Button
          variant="text"
          sx={{ alignSelf: "flex-start", color: "#ddd" }}
          onClick={() => setOpenDialog(true)}>
          <AddIcon />
          Add new status
        </Button>
      </Box>
      <AddStatusDialog open={openDialog} setOpen={setOpenDialog} />
    </DragDropContext>
  );
};

export default TodoStstusList;
