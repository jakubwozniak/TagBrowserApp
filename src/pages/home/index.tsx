import { Box, Typography } from "@mui/material";
import Layout from "../../Layout";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Layout displaySidebar>
      <Box>
        <Typography
          variant="h2"
          component="h2"
          fontSize={22}
          color={
            theme.palette.mode === "dark"
              ? theme.palette.text.primary
              : theme.palette.text.primary
          }
          paddingBottom={"20px"}
        >
          Home
        </Typography>
      </Box>
    </Layout>
  );
};

export default HomePage;
