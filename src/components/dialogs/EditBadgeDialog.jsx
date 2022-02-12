import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
import { editBadge } from "../../store/badges";

const BadgesDialog = ({ open, setOpen, badgeId }) => {
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const badge = useSelector((state) =>
    state.badge.find((badge) => badge.id === badgeId)
  );

  useEffect(() => {
    if (badge) {
      setColor(badge.color);
      setTitle(badge.description);
    }
  }, [badge, badgeId]);

  const handleEditBadge = (e) => {
    e.preventDefault();
    if (title === "") {
      alert("Please enter a title for the badge");
      return;
    }
    dispatch(editBadge({ description: title, color, id: badgeId }));
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => handleEditBadge(e)}>
        <DialogTitle>Edit Badge</DialogTitle>
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
          <Button variant="contained" onClick={handleEditBadge} type={"submit"}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BadgesDialog;
