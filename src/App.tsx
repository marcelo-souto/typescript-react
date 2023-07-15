import React from "react";
import { CustomTheme } from "./styles/CustomTheme";
import { AppRoutes } from "./routes/Routes";

export const App: React.FC = () => {
  return (
    <CustomTheme>
      <AppRoutes />
    </CustomTheme>
  );
};
