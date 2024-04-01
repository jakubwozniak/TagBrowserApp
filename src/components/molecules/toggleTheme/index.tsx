import { Box, IconButton, SxProps, Theme, useTheme } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../../hooks/useColorMode";

interface ToggleThemeProps {
  sx?: SxProps<Theme>;
  center?: boolean;
}

const ToggleTheme = ({ sx, center }: ToggleThemeProps) => {
  const colorMode = useColorMode();
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...(center === true ? { textAlign: "center" } : {}),
        color: theme.palette.text.primary,
        ...sx,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ color: theme.palette.text.primary, ...sx }} />
        ) : (
          <Brightness4Icon sx={{ color: theme.palette.text.primary, ...sx }} />
        )}
      </IconButton>
    </Box>
  );
};

export default ToggleTheme;
