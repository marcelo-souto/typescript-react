import { Button, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { IQuiz } from "../../api/api";

interface DashboardQuizListProps {
  quizzes: IQuiz[] | undefined;
}

export const DashboardQuizList: React.FC<DashboardQuizListProps> = ({
  quizzes,
}) => {
  return (
    <Stack mt={5} bgcolor={blueGrey[50]} borderRadius={2} padding={3} spacing={3}>
      <Stack>
        <Button
          variant="contained"
          disableElevation
          sx={{ width: "max-content", alignSelf: "end" }}
        >
          Criar novo
        </Button>
      </Stack>

      {!quizzes && (
        <Typography
          variant="h6"
          fontWeight={600}
          color="grey.700"
          textAlign="center"
        >
          Voce não tem questionários cadastrados ainda.
        </Typography>
      )}

      {quizzes &&
        quizzes.map((quiz) => (
          <Stack
            key={quiz.id}
            sx={{ backgroundColor: "#FFF", borderRadius: 2, padding: 3 }}
          >
            <Typography variant="h6" fontWeight={600} color="grey.700">
              {quiz.name}
            </Typography>
          </Stack>
        ))}
    </Stack>
  );
};
