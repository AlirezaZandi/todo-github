import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Badges from "./Badges";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: "400px",
      width: "100%",
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectBadges({
  badges,
  selectedBadges,
  setSelectedBadges,
}) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedBadges(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ minWidth: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Badge</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedBadges}
          onChange={handleChange}
          fullWidth
          input={
            <OutlinedInput fullWidth id="select-multiple-chip" label="Badge" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Badges
                  color={value.color}
                  title={value.description}
                  key={value.id}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}>
          {badges.map((badge) => (
            <MenuItem
              sx={{ display: "inline-block" }}
              key={badge.id}
              value={badge}
              style={getStyles(badge, badges, theme)}>
              <Badges
                color={badge.color}
                title={badge.description}
                key={badge.id}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
