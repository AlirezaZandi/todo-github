import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import { Circle, CheckCircle } from "@mui/icons-material";
import Badges from "../common/Badges";

import { useDispatch } from "react-redux";
import { addBadge } from "../../store/badges";
import { v4 } from "uuid";

const BadgesDialog = ({ open, setOpen }) => {
  const [color, setColor] = useState("secondary");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddBadge = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Please enter a title for the badge");
      return;
    }
    dispatch(addBadge({ description: title, color, id: v4() }));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => console.log(e)}>
        <DialogTitle>Add Badge</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="dense"
            id="new-badge-title"
            label="Badge Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Box marginBottom={"1rem"}>
            <IconButton onClick={() => setColor("primary")}>
              {color === "primary" ? (
                <CheckCircle color="primary" />
              ) : (
                <Circle color="primary" />
              )}
            </IconButton>
            <IconButton onClick={() => setColor("secondary")}>
              {color === "secondary" ? (
                <CheckCircle color="secondary" />
              ) : (
                <Circle color="secondary" />
              )}
            </IconButton>
            <IconButton onClick={() => setColor("success")}>
              {color === "success" ? (
                <CheckCircle color="success" />
              ) : (
                <Circle color="success" />
              )}
            </IconButton>
            <IconButton onClick={() => setColor("error")}>
              {color === "error" ? (
                <CheckCircle color="error" />
              ) : (
                <Circle color="error" />
              )}
            </IconButton>
            <IconButton onClick={() => setColor("info")}>
              {color === "info" ? (
                <CheckCircle color="info" />
              ) : (
                <Circle color="info" />
              )}
            </IconButton>
            <IconButton onClick={() => setColor("warning")}>
              {color === "warning" ? (
                <CheckCircle color="warning" />
              ) : (
                <Circle color="warning" />
              )}
            </IconButton>
          </Box>
          <Box>
            <Typography variant="subtitle1">
              Preview: <Badges title={title} color={color} />
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddBadge} type={"submit"}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BadgesDialog;
