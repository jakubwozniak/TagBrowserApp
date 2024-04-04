import { Box, Typography, useTheme } from "@mui/material";
import CustomOAuth2 from "../../molecules/customOAuth2";
import { FallbackProps } from "react-error-boundary";

const TagLoadingErrorComponent = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  if (error)
    if (error.message) {
      return (
        <Box sx={{ p: "20px" }}>
          Error: {error.message}
          <Box>
            <button onClick={resetErrorBoundary}>Reset component</button>
          </Box>
        </Box>
      );
    } else if (error.cause && (error.cause as any).data.error_id !== 400) {
      let message = "to get more requests";
      if ((error.cause as any).data.error_id === 403)
        message = "to get access to all pages";
      return (
        <Box sx={{ p: "20px" }}>
          <Box>
            <Typography color="inherit">
              Error: {(error.cause as any).data.error_message}
            </Typography>
          </Box>
          <Box>
            <Typography color="inherit">
              <CustomOAuth2 onSuccess={resetErrorBoundary} /> {message}
            </Typography>
          </Box>
        </Box>
      );
    }
  // Fallback error message for other types of errors
  return (
    <Box sx={{ p: "20px" }}>
      Something went wrong. Please try again later.
      <Box>
        <button onClick={resetErrorBoundary}>Reset component</button>
      </Box>
    </Box>
  );
};

export default TagLoadingErrorComponent;
