import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Autocomplete,
  TextField,
  DialogActions,
  Button,
  Box,
  Typography,
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
          <Box sx={{}}>
            <TextField
              autoFocus
              margin="dense"
              id="todo-title"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                marginBottom: "1rem",
                "& input": {
                  fontSize: "1.2rem",
                },
              }}
            />

            <TextField
              id="todo-more-info"
              label="More Info"
              fullWidth
              multiline
              rows={4}
              sx={{
                marginBottom: "1rem",
              }}
            />

            <Autocomplete
              id="combo-box-tag"
              options={["Bug", "Feature", "Enhancement", "Epic"]}
              fullWidth
              renderInput={(params) => (
                <TextField sx={{ width: "50%" }} {...params} label="Tags" />
              )}
            />
          </Box>
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
