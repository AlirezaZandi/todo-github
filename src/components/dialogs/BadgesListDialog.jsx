import React from "react";

import { Dialog, DialogTitle, DialogContent } from "@mui/material";

import BadgesData from "../common/BadgesData";

const BadgdesListDialog = ({ open, setOpen }) => {
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
