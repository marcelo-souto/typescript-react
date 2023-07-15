import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import React from "react";

interface CustomThemeProps {
  children: React.ReactNode;
}

export const CustomTheme: React.FC<CustomThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
