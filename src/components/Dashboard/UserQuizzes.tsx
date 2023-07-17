import { useUserQuizzes } from "../../queries/useUserQuizzes";
import { Stack, Typography } from "@mui/material";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import Dashboard from ".";
import { Loading } from "../Loading";

export const UserQuizzes = () => {
  const { quizzes, isLoading } = useUserQuizzes();

  return (
    <Stack>
      <Dashboard.Title
        text="Meus Questionários"
        icon={TextSnippetOutlinedIcon}
      />

      {isLoading ? <Loading /> : <Dashboard.QuizList quizzes={quizzes} />}
    </Stack>
  );
};
