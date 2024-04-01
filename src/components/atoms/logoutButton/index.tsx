//

import { Button, SxProps, Theme, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  removeAccessToken,
} from "../../../state/userData/userDataSlice";
import { useEffect } from "react";

interface LogoutButtonProps {
  sx?: SxProps<Theme>;
}

/*const ToggleTheme = ({ toggleTextColor, center }: ToggleThemeProps) => {
  const colorMode = useColorMode();
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...(center === true ? { textAlign: "center" } : {}),
        ...(toggleTextColor === true
          ? { color: theme.palette.text.primary }
          : {}),
      }}
*/
const LogoutButton = ({ sx }: LogoutButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  return (
    <Button
      sx={{
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
        ...sx,
      }}
      onClick={async (event) => {
        try {
          /*let data = await fetch(
            `https://api.stackexchange.com/2.3/access-tokens/${userData}/invalidate`
          );
          console.log("data:", data);
          let json = await data.json();
          console.log("json:", json);*/
          dispatch(removeAccessToken());
        } catch (error) {
          console.error("Error:", error);
        }
      }}
      variant="outlined"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
