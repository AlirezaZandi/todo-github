import { Box, Button } from "@mui/material";
import React from "react";
import TodoStatus from "./TodoStatus";

import AddIcon from "@mui/icons-material/Add";
import AddStatusDialog from "./AddStatusDialog";
import { useSelector, useDispatch } from "react-redux";
import { Reorder } from "framer-motion";
import {
  removeTodoFromStatus,
  UpdateTodoInStatusOrder,
  updateTodoStatusOrder,
} from "../store/todoStatus";

import { DragDropContext } from "react-beautiful-dnd";

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
      <Reorder.Group
        style={{
          width: "100%",
          margin: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
        axis="x"
        values={todoStatus}
        onReorder={(newOrder) => {
          dispatch(updateTodoStatusOrder({ newOrder }));
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "1rem",
            alignItems: "center",
            width: "100%",
            paddingInline: { xs: ".5rem", md: "2rem" },
            overflow: "overlay",
            listStyle: "none",
            height: { xs: "98%", md: "90%" },
            "& > *": {
              flexShrink: 0,
            },
          }}>
          {todoStatus.map((status) => {
            return <TodoStatus id={status.id} key={status.id} />;
          })}
          <Button
            variant="text"
            sx={{ alignSelf: "flex-start", color: "#ddd" }}
            onClick={() => setOpenDialog(true)}>
            <AddIcon />
            Add new status
          </Button>
        </Box>
      </Reorder.Group>
      <AddStatusDialog open={openDialog} setOpen={setOpenDialog} />
    </DragDropContext>
  );
};

export default TodoStstusList;
