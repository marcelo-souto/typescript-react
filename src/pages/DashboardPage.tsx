import { Stack, Typography } from "@mui/material";
import { useUser } from "../queries/useUser";
import { UserQuizzes } from "../components/Dashboard/UserQuizzes";

export const DashboardPage = () => {
  
  const { user } = useUser();

  return (
    <Stack maxWidth={960} mt={8}>
      {/* <Typography
        variant="h3"
        component="h1"
        fontWeight={700}
        color="grey.900"
        mb={3}
      >
        Dashboard
      </Typography>
      <Typography variant="h6" component="p" mb={4}>
        Boa tarde, {user?.name}
      </Typography> */}
      <UserQuizzes />
    </Stack>
  );
};
