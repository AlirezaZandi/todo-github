import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodoToStatus } from "../store/todoStatus";
import { addTodo } from "../store/todo";
import SelectBadges from "./common/SelectBadges";

const AddTodoPopop = ({ open, setOpen, statusId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [selctedBadges, setSelectedBadges] = React.useState([]);
  const [moreInfo, setMoreInfo] = React.useState("");

  const badges = useSelector((state) => {
    return state.badge;
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const id = v4();
    const badgesIds = selctedBadges.map((badge) => badge.id);
    dispatch(addTodo({ id, description: title, badgesIds, moreInfo }));
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
              variant="outlined"
              value={moreInfo}
              onChange={(e) => setMoreInfo(e.target.value)}
            />

            <SelectBadges
              badges={badges}
              selectedBadges={selctedBadges}
              setSelectedBadges={setSelectedBadges}
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
