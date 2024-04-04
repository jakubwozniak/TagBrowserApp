import { Theme } from "@mui/material";

export const listContainerStyles = {
  width: "100%",
  boxSizing: "border-box",
};

export const listItemContainerStyles = {
  bgcolor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.main,
  m: "4px",
  width: {
    lg: "calc(20% - 8px)",
    md: "calc(25% - 8px)",
    xs: "calc(50% - 8px)",
  },
};

export const listItemTextStyles = {
  display: "flex",
  flexDirection: "column",
};
