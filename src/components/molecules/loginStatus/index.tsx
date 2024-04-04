import { Box, SxProps, Theme, Typography } from "@mui/material";
import LogoutButton from "../../atoms/logoutButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { containerStyles } from "./styles";
import CustomOAuth2 from "../customOAuth2";

interface LoginStatusProps {
  sx?: SxProps<Theme>;
}
const LoginStatus = ({ sx }: LoginStatusProps) => {
  const userData = useSelector((state: RootState) => state.userData);

  return (
    <Box sx={containerStyles}>
      {userData.tagApiAccessToken ? (
        <>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ...sx,
            }}
          >
            <Typography
              sx={{ textWrap: "nowrap", fontSize: { lg: "16px", xs: "14px" } }}
            >
              Access token:
            </Typography>
            <Typography
              sx={{
                wordBreak: "break-all",
                fontSize: { lg: "12px", xs: "10px" },
              }}
            >
              {userData.tagApiAccessToken}
            </Typography>
          </Box>
          <LogoutButton sx={sx} />
        </>
      ) : (
        <CustomOAuth2 />
      )}
    </Box>
  );
};

export default LoginStatus;
