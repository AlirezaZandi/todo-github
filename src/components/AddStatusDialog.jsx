import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { addTodoStatus } from "../store/todoStatus";
import ColorPicker from "./ColorPicker";

const AddStatusDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");

  const handleAddStatus = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a name");
      return;
    }
    dispatch(addTodoStatus({ name: title }));
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => handleAddStatus(e)}>
        <DialogTitle>Add Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the status title and click the add button
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="status-title"
            label="Status Title"
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
            onClick={(e) => handleAddStatus(e)}
            type={"submit"}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddStatusDialog;
