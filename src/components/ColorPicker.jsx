import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Menu } from "@mui/material";

import { Circle, CheckCircle, ColorLens, Clear } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { updateTodoStatusColor } from "../store/todoStatus";

const ColorPicker = ({ statusId }) => {
  const color = useSelector((state) => {
    return state.todoStatus.find((status) => status.id === statusId).color;
  });

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          color:
            color === "default" ? "action.active" : color + ".contrastText",
        }}
        onClick={handleClick}>
        <ColorLens />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "primary" }))
          }>
          {color === "primary" ? (
            <CheckCircle color="primary" />
          ) : (
            <Circle color="primary" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(
              updateTodoStatusColor({ id: statusId, color: "secondary" })
            )
          }>
          {color === "secondary" ? (
            <CheckCircle color="secondary" />
          ) : (
            <Circle color="secondary" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "success" }))
          }>
          {color === "success" ? (
            <CheckCircle color="success" />
          ) : (
            <Circle color="success" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "error" }))
          }>
          {color === "error" ? (
            <CheckCircle color="error" />
          ) : (
            <Circle color="error" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "info" }))
          }>
          {color === "info" ? (
            <CheckCircle color="info" />
          ) : (
            <Circle color="info" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "warning" }))
          }>
          {color === "warning" ? (
            <CheckCircle color="warning" />
          ) : (
            <Circle color="warning" />
          )}
        </MenuItem>
        <MenuItem
          onClick={() =>
            dispatch(updateTodoStatusColor({ id: statusId, color: "default" }))
          }>
          <Clear color="default" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ColorPicker;
