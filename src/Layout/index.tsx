import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import { containerStyles } from "./styles";
import ResponsiveDrawer from "../components/templates/responsiveDrawer";

interface LayoutProps {
  children: ReactNode;
  displaySidebar?: boolean;
  height?: string;
  sx?: SxProps<Theme>;
}

const Layout = ({ children, displaySidebar, sx }: LayoutProps) => {
  return (
    <Box
      sx={{
        ...containerStyles,
        ...sx,
      }}
    >
      {displaySidebar === true ? (
        <ResponsiveDrawer>
          <Box
            sx={{
              width: "100%",
              overflowY: "auto",
              pr: { lg: "24px" },
              height: "100%",
            }}
          >
            {children}
          </Box>
        </ResponsiveDrawer>
      ) : (
        children
      )}
    </Box>
  );
};

export default Layout;
