import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoToStatus } from "../store/todoStatus";
import { addTodo } from "../store/todo";

const AddTodoPopop = ({ open, setOpen, statusId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const id = v4();
    dispatch(addTodo({ id, description: title }));
    dispatch(addTodoToStatus({ id: statusId, todoId: id }));
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the Item title and click the add button
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todo-title"
            label="Todo Title"
            type="text"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={(e) => handleAddTodo(e)}
            type={"submit"}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTodoPopop;
