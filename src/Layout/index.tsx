import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/templates/sidebar";
import { containerStyles } from "./styles";

interface LayoutProps {
  children: ReactNode;
  displaySidebar?: boolean;
  height?: string;
}

const Layout = ({ children, displaySidebar, height }: LayoutProps) => {
  return (
    <Box
      sx={{ ...containerStyles, ...(height != null ? { height: height } : {}) }}
    >
      {displaySidebar && <Sidebar />}
      <Box sx={{ width: "100%", overflowY: "auto", pr: { lg: "24px" } }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
