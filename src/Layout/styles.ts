import { Theme } from "@mui/material";

export const containerStyles = {
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  color: "white",
  gap: 3,
  overflowY: "hidden",
  height: "100dvh",
  boxSizing: "border-box",
} as any;
