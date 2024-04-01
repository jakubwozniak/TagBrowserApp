import { Theme } from "@mui/material";

export const containerStyles = {
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.main,
  display: "flex",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  color: "white",
  padding: { xs: "24px", lg: "24px 0 24px 24px" },
  gap: 3,
  overflowY: "hidden",
  height: "100dvh",
  boxSizing: "border-box",
};
