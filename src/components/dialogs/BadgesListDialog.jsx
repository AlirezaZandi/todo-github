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
import BadgesData from "../common/BadgesData";

const BadgdesListDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleAddBadge = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <form onSubmit={(e) => console.log(e)}>
        <DialogTitle>Badges</DialogTitle>
        <DialogContent>
          <BadgesData />
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default BadgdesListDialog;
