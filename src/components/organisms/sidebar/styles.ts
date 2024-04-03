import { Theme } from "@mui/material";

export const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "calc(100% - 75px)",
};

export const topSectionWrapperStyles = {};

export const bottomSectionWrapperStyles = {
  maxWidth: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  color: (theme: Theme) => theme.customValues.text.sidebar,
};
