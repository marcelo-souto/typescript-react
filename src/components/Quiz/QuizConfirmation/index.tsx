import {
  Button,
  Dialog,
  DialogActions,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface QuizConfirmationProps {
  open: boolean;
  onClose: DialogProps["onClose"];
}

export const QuizConfirmation: React.FC<QuizConfirmationProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      sx={{
        ".MuiDialog-paper": {
          padding: 3,
          borderRadius: 3
        },
      }}
    >
      <DialogTitle>Você tem certeza que deseja enviar?</DialogTitle>
      <DialogActions>
        <Button variant="contained" disableElevation>
          Enviar
        </Button>
        <Button variant="contained" disableElevation>
          Checar Respostas
        </Button>
      </DialogActions>
    </Dialog>
  );
};
