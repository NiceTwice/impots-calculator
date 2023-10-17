import { createTheme } from "@mui/material/styles";

import { join, map } from "lodash";
import { breakpoints } from "./constants/breakpoints";
import colors from "./constants/colors";
import {
  CheckedIcon,
  RadioCheckedIcon,
  RadioIcon,
  UncheckedIcon,
} from "./constants/icons";
import { fontFamilies } from "./constants/typography";

export const pxToRem = (px: number): string => `${px / 16}rem`;

const toFontFamilyString = (strings: readonly string[]) => {
  return join(
    map(strings, (s) => `"${s}"`),
    ", "
  );
};

// declare module '@mui/material/styles' {
// interface BreakpointOverrides {
// xs: false; // removes the `xs` breakpoint
// sm: false;
// md: false;
// lg: false;
// xl: false;
// mobile: true; // adds the `mobile` breakpoint
// tablet: true;
// laptop: true;
// desktop: true;
// }
// }

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    fontFamily: toFontFamilyString(fontFamilies.default),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: { textTransform: "unset" },
    body1: {
      fontSize: pxToRem(13),
    },
  },
  // https://mui.com/system/getting-started/usage/#performance-tradeoffs
  breakpoints: { values: breakpoints },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 24 },
        sizeMedium: {
          height: pxToRem(48),
          padding: "16px 36px",
        },
        outlinedPrimary: { borderColor: colors.mediumGrey },
      },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0, square: true },
      styleOverrides: {
        root: {
          "&.Mui-expanded:before": { opacity: 1 }, // don't make separator transparent when expanded
          // add separator on last section
          "&:last-child:after": {
            content: '""',
            height: 1,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.lightGrey,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 13,
          paddingBottom: 13,
          "&.Mui-disabled": {
            // on section disabled,
            opacity: 0.22, // keep border opacity
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: { root: { paddingLeft: 0, paddingRight: 0 } },
    },
    MuiAppBar: {
      defaultProps: {
        position: "static",
        color: "secondary",
        elevation: 0,
      },
      styleOverrides: {},
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
          borderBottom: 1,
          borderBottomStyle: "solid",
          borderColor: colors.lightGrey,
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: <CheckedIcon />,
        icon: <UncheckedIcon />,
      },
      styleOverrides: {
        root: {
          "&.Mui-checked + div > .MuiTypography-root": {
            fontWeight: "bold",
            fontFamily: toFontFamilyString(fontFamilies.bold),
          },
        },
        colorPrimary: {
          color: colors.black,
          "&.Mui-checked": {
            color: colors.black,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          fontFamily: toFontFamilyString(fontFamilies.bold),
          color: "inherit",
          "&.Mui-checked": {
            color: "inherit",
          },
          "& + .MuiTypography-root": {
            fontWeight: "bold",
          },
        },
      },
      defaultProps: {
        icon: <RadioIcon />,
        checkedIcon: <RadioCheckedIcon />,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input:focus": { outline: 0 },
          "& textarea:focus": { outline: 0 },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          color: colors.darkGrey,
          transform: "translate(0, -1.5px) scale(1)",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "standard" },
    },
  },
});

export default theme;
