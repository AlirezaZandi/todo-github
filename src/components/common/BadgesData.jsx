import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import Badges from "./Badges";
import { IconButton } from "@mui/material";
import EditBadgeDialog from "../dialogs/EditBadgeDialog";
import { removeBadge } from "../../store/badges";
import { removeBadges } from "../../store/todo";

const BadgesData = () => {
  const badges = useSelector((state) => state.badge);
  const todos = useSelector((state) => state.todo);

  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [badgeId, setBadgeId] = React.useState("");

  const dispatch = useDispatch();

  const handleDeleteBadge = (badgeId) => {
    dispatch(removeBadge({ id: badgeId }));
    dispatch(removeBadges({ badgeId }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 400, overflow: "overlay", height: "100%" }}
          aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Badge</TableCell>
              <TableCell align="center">Selected in todos</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {badges.map((badge) => {
              return (
                <TableRow key={badge.id}>
                  <TableCell component="th" scope="row">
                    <Badges color={badge.color} title={badge.description} />
                  </TableCell>
                  <TableCell align="center">
                    {getNumberOfTodosInBadge(todos, badge.id)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        setBadgeId(badge.id);
                        setOpenEditDialog(true);
                      }}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDeleteBadge(badge.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <EditBadgeDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        badgeId={badgeId}
      />
    </>
  );
};

const getNumberOfTodosInBadge = (todos, badgeId) => {
  let counter = 0;
  todos.forEach((todo) => {
    if (!todo.badges) return 0;
    if (!todo.badges.length) return 0;
    if (todo.badges.includes(badgeId)) counter++;
  });
  return counter;
};

export default BadgesData;
