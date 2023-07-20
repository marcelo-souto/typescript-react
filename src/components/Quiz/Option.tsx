import { FormControlLabel, Radio, Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

interface OptionProps {
  option: string;
  checked: boolean
}

export const Option: React.FC<OptionProps> = ({ option, checked }) => {

  return (
    <Stack
      sx={{
        flexDirection: "row",
        padding: "18px 14px",
        borderRadius: 4,
        marginBottom: 2,
        border: "2px solid",
        transition: "all .3s",
        borderColor: checked ? "primary.main" : "#f0f0f0"
      }}
      component={FormControlLabel}
      control={<Radio />}
      value={option}
      label={option}
    ></Stack>
  );
};
