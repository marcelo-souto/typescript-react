import { FormControlLabel, Radio, Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

interface OptionProps {
  option: string;
  checked: boolean;
}

export const Option: React.FC<OptionProps> = ({ option, checked }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        padding: "22px 14px",
        borderRadius: 4,
        margin: 0,
        marginBottom: 3,
        border: "2px solid",
        transition: "all .3s",
        borderColor: checked ? "primary.main" : "#e3e3e3",
      }}
      component={FormControlLabel}
      control={<Radio />}
      value={option}
      label={option}
    ></Stack>
  );
};
