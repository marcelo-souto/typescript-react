import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "../components/Helpers/Link";
import { LinkProps } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: blue["A400"],
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
