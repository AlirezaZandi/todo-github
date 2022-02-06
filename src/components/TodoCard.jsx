import React from "react";
import { Button, Card, Typography, Box } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todo";
import { removeTodoFromStatus } from "../store/todoStatus";

import { Draggable } from "react-beautiful-dnd";
import Badges from "./common/Badges";

const TodoCard = ({ id, statusId, index }) => {
  const dispatch = useDispatch();

  const color = useSelector((state) => {
    return state.todoStatus.find((status) => status.id === statusId).color;
  });

  const TodoBadges = useSelector((state) => {
    try {
      return state.todo
        .find((todo) => todo.id === id)
        .badges.map((badgeId) => {
          return state.badge.find((badge) => badge.id === badgeId);
        });
    } catch (e) {
      return [];
    }
  });

  const todo = useSelector((state) =>
    state.todo.find((todo) => todo.id === id)
  );
  const handleDeleteTodo = () => {
    dispatch(removeTodoFromStatus({ id: statusId, todoId: id }));
    dispatch(removeTodo({ id }));
  };

  return (
    <Draggable draggableId={id} index={index} shouldRespectForcePress>
      {(provided) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            backgroundColor: color === "default" ? "grey.200" : color + ".dark",
            opacity: ".9",
            display: "flex",
            justifyContent: "space-between",
            cursor: "grab",
            color: color + ".contrastText",
          }}>
          <Box>
            <Typography variant="subtitle1" component={"h4"} sx={{ p: "1rem" }}>
              {todo.description}
              {"  "}
              <Box sx={{ "& > *": { marginRight: ".5rem" } }}>
                {TodoBadges.length > 0 &&
                  TodoBadges.map((badge) => (
                    <Badges
                      color={badge.color}
                      title={badge.description}
                      key={badge.id}
                    />
                  ))}
              </Box>
            </Typography>
          </Box>

          <Button
            aria-label="delete"
            onClick={handleDeleteTodo}
            sx={{ flex: "0 1" }}>
            <ClearIcon
              sx={{
                color:
                  color === "default"
                    ? "action.active"
                    : color + ".contrastText",
              }}
            />
          </Button>
        </Card>
      )}
    </Draggable>
  );
};

export default TodoCard;
