import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface DashboardTitleProps {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap>;
}

export const DashboardTitle: React.FC<DashboardTitleProps> = ({
  text,
  icon: Icon,
}) => {
  return (
    <Stack direction="row">
      <Icon color="primary" sx={{ width: 58, height: 58, marginRight: 1 }} />
      <Typography variant="h3" component="h2" color="grey.900" fontWeight={700}>
        {text}
      </Typography>
    </Stack>
  );
};
