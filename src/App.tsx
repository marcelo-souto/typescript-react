import React from "react";
import { CustomTheme } from "./styles/CustomTheme";
import { AppRoutes } from "./routes/Routes";
import { useUser } from "./queries/useUser";

export const App: React.FC = () => {
  
  useUser();

  return (
    <CustomTheme>
      <AppRoutes />
    </CustomTheme>
  );
};
