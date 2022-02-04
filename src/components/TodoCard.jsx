import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  IconButton,
  Typography,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

const TodoCard = ({ title, setTodos, id }) => {
  const handleDeleteTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <Card
      sx={{
        background: "#F8FAFC",
        display: "flex",
        justifyContent: "space-between",
      }}>
      <CardActionArea sx={{ p: "1rem" }}>
        <Typography variant="subtitle1" component={"h4"}>
          {title}
        </Typography>
      </CardActionArea>
      <Button
        color="error"
        aria-label="delete"
        onClick={handleDeleteTodo}
        sx={{ flex: 1 }}>
        <ClearIcon />
      </Button>
    </Card>
  );
};

export default TodoCard;
