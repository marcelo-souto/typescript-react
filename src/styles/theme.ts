import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
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
    background: {
      default: grey["50"],
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      } as LinkProps,
    },
  },
});
