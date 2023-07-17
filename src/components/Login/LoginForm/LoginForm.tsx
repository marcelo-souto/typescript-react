import React from "react";
import { useLoginForm } from "./useLoginForm";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

export const LoginForm: React.FC = () => {
  
  const [visibilityOn, setVisibilityOn] = React.useState(false);
  const { handleSubmit, register, errors, onSubmit, isLoading } =
    useLoginForm();

  return (
    <Stack
      maxWidth={340}
      height="100vh"
      justifyContent="center"
      my={0}
      mx="auto"
    >
      <Typography
        variant="h4"
        component="h1"
        color="grey.900"
        fontWeight={700}
        mb={1}
      >
        Login
      </Typography>
      <Typography variant="body2" color="grey.600" mb={4}>
        Olá, seja bem-vindo de volta.
      </Typography>

      <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
        <TextField
          size="small"
          id="email"
          label="Email"
          variant="outlined"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <TextField
          size="small"
          id="password"
          label="Senha"
          variant="outlined"
          type={visibilityOn ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setVisibilityOn(!visibilityOn)}
                >
                  {visibilityOn ? (
                    <VisibilityOffRoundedIcon />
                  ) : (
                    <VisibilityRoundedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          {...register("password")}
        />

        <LoadingButton
          type="submit"
          size="large"
          variant="contained"
          loading={isLoading}
          disableElevation
        >
          Enviar
        </LoadingButton>
      </Stack>
      <Typography variant="body2" color="grey.600" textAlign="center" mt={3}>
        Não tem conta? <Link href="/register">Cadastre-se</Link>
      </Typography>
      <Link href="/dashboard">Ir para dashvoard</Link>
    </Stack>
  );
};
