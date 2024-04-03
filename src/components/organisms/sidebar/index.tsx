import { Box, Hidden, Theme, Typography } from "@mui/material";
import LoginStatus from "../../molecules/loginStatus";
import ToggleTheme from "../../molecules/toggleTheme";
import NavList from "../../molecules/navList";
import {
  containerStyles,
  topSectionWrapperStyles,
  bottomSectionWrapperStyles,
} from "./styles";

const Sidebar = () => {
  return (
    <Box sx={containerStyles}>
      <Box sx={topSectionWrapperStyles}>
        <NavList />
      </Box>
      <Box sx={bottomSectionWrapperStyles}>
        <LoginStatus
          sx={{
            color: (theme: Theme) => theme.customValues.text.sidebar,
            borderColor: (theme: Theme) => theme.customValues.text.sidebar,
          }}
        />
        <ToggleTheme
          center
          sx={{ color: (theme: Theme) => theme.customValues.text.sidebar }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
