import { Stack, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

export const DashboardPage = () => {

  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(["user"])

  return (
    <Stack>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="body1">{user?.name}</Typography>
    </Stack>
  );
};
