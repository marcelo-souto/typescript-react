import React from "react";
import { CustomTheme } from "./styles/CustomTheme";
import { AppRoutes } from "./routes/Routes";
import { useGetUser } from "./queries/useGetUser";

export const App: React.FC = () => {

  useGetUser()

  return (
    <CustomTheme>
      <AppRoutes />
    </CustomTheme>
  );
};
