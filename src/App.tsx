import React from "react";
import { CustomTheme } from "./styles/CustomTheme";
import { AppRoutes } from "./routes/Routes";
import { useUser } from "./queries/useUser";
import { Stack } from "@mui/material";

export const App: React.FC = () => {
  useUser();

  return (
    <Stack justifyContent="center" minHeight="100vh" maxWidth={960} mx="auto">
      <CustomTheme>
        <AppRoutes />
      </CustomTheme>
    </Stack>
  );
};
