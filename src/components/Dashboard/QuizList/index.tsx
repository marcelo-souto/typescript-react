import { Button, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { IQuiz } from "../../../api/api";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

interface DashboardQuizListProps {
  quizzes: IQuiz[] | undefined;
  canEdit?: boolean;
}

export const DashboardQuizList: React.FC<DashboardQuizListProps> = ({
  quizzes,
  canEdit = false,
}) => {
  return (
    <Stack
      mt={5}
      bgcolor={blueGrey[50]}
      borderRadius={3}
      padding={3}
      spacing={3}
    >
      {canEdit && (
        <Stack>
          <Button
            variant="contained"
            disableElevation
            sx={{ width: "max-content", alignSelf: "end" }}
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Criar novo
          </Button>
        </Stack>
      )}

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
          <Button
            href={`/quiz/${quiz.id}`}
            key={quiz.id}
            sx={{ backgroundColor: "#FFF", borderRadius: 3, padding: 3 }}
          >
            <Typography variant="h6" fontWeight={600} color="grey.700">
              {quiz.name}
            </Typography>
          </Button>
        ))}
    </Stack>
  );
};
