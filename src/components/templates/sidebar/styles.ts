import { Theme } from "@mui/material";

export const containerStyles = {
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.primary.dark,
  padding: { xs: 2, lg: "16px 0" },
  borderRadius: 2,
  display: { xs: "none", lg: "flex" },
  flexDirection: { xs: "row", lg: "column" },
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  width: { lg: 200 },
  minWidth: { lg: 200 },
};

export const topSectionWrapperStyles = {
  display: "flex",
  flexDirection: { xs: "row", lg: "column" },
  gap: 5,
  alignItems: { xs: "center", ls: "start" },
  width: { lg: "100%" },
};

export const bottomSectionWrapperStyles = {
  maxWidth: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: { xs: "row", lg: "column" },
  gap: 2,
  color: (theme: Theme) => theme.customValues.text.sidebar,
};
