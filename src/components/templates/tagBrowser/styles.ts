import { Theme } from "@mui/material";

export const containerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.primary.light,
};
