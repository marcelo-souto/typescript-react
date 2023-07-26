import { useUserQuizzes } from "../../../queries/useUserQuizzes";
import { Stack } from "@mui/material";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { Loading } from "../../Helpers/Loading";
import { Title } from "../../Global/Title";
import { DashboardQuizList } from "../QuizList";

export const UserQuizzes = () => {
  const { quizzes, isLoading } = useUserQuizzes();

  return (
    <Stack>
      <Title text="Meus Questionários" icon={TextSnippetOutlinedIcon} />

      {isLoading ? (
        <Loading />
      ) : (
        <DashboardQuizList quizzes={quizzes} canEdit={true} />
      )}
    </Stack>
  );
};
