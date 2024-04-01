import { Box, Theme, Typography, useTheme } from "@mui/material";
import CustomOAuth2 from "../../molecules/customOAuth2";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface TagLoadingErrorComponentProps {
  error: FetchBaseQueryError | SerializedError;
}

const TagLoadingErrorComponent = ({ error }: TagLoadingErrorComponentProps) => {
  const theme = useTheme();
  if (error)
    if ("message" in error) {
      return <Box sx={{ p: "20px" }}>Error: {error.message}</Box>;
    } else if ("data" in error && (error.data as any).error_id !== 400) {
      console.log(error);
      let message = "to get more requests";
      if ((error.data as any).error_id === 403)
        message = "to get access to all pages";
      return (
        <Box sx={{ p: "20px" }}>
          <Box>
            <Typography
              color={
                theme.palette.mode === "dark"
                  ? theme.palette.text.primary
                  : theme.palette.text.primary
              }
            >
              Error: {(error.data as any).error_message}
            </Typography>
          </Box>
          <Box>
            <Typography
              color={
                theme.palette.mode === "dark"
                  ? theme.palette.text.primary
                  : theme.palette.text.primary
              }
            >
              <CustomOAuth2 /> {message}
            </Typography>
          </Box>
        </Box>
      );
    }
  // Fallback error message for other types of errors
  return (
    <Box sx={{ p: "20px" }}>Something went wrong. Please try again later.</Box>
  );
};

export default TagLoadingErrorComponent;
