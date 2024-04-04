import { Box, CircularProgress, Grid } from "@mui/material";
import { loaderContainerStyles } from "./styles";

const LoaderComponent = () => {
  return (
    <Box sx={loaderContainerStyles}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Loading...
        </Grid>
        <Grid item xs={12}>
          <CircularProgress sx={{ color: "inherit" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoaderComponent;
