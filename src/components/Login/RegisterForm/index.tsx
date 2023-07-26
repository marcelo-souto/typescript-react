import React from "react";
import {
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import { useRegisterForm } from "./useRegisterForm";
import { LoadingButton } from "@mui/lab";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useUser } from "../../../queries/useUser";
import { Navigate } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const [visibilityOn, setVisibilityOn] = React.useState(false);

  const { handleSubmit, register, errors, onSubmit, isLoading, isSuccess } =
    useRegisterForm();
  const { user } = useUser();

  if (user) return <Navigate to="/dashboard" />;

  if (isSuccess) return <Navigate to="/login" />;

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
        Cadastre-se
      </Typography>

      <Typography variant="body2" color="grey.600" mb={4}>
        Olá, seja bem-vindo.
      </Typography>

      <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={2}>
        <TextField
          size="small"
          id="name"
          label="Nome"
          variant="outlined"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          {...register("name")}
        />
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
        Já tem uma conta? <Link href="/login">Faça login</Link>
      </Typography>
    </Stack>
  );
};
