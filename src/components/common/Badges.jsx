import { Chip } from "@mui/material";
import React from "react";

const Badges = ({ color, title }) => {
  return (
    <Chip
      size="small"
      label={title === "" ? "New Badge" : title}
      sx={{
        backgroundColor: color + ".light",
        color: color + ".contrastText",
        borderColor: color + ".dark",
        borderWidth: "2px",
      }}
    />
  );
};

export default Badges;
