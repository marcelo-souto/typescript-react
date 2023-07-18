import { styled, keyframes } from "@mui/material";

const animation = keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

export const Loading = styled("div")(({ theme }) => ({
  width: 52,
  height: 52,
  borderRadius: "50%",
  border: "12px solid",
  borderColor: theme.palette.primary.main,
  borderTopColor: "transparent",
  animation: `${animation} .5s linear infinite`,
  margin: "42px auto"
}));
