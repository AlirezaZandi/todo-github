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

const AddTodoPopop = ({ open, setOpen, setTodo, todos }) => {
  const [title, setTitle] = React.useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodo([...todos, newTodo]);
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => handleAddTodo(e)}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the todo title and click the add button
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
