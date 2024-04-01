import { Box, Typography } from "@mui/material";
import Layout from "../../Layout";
import TagBrowser from "../../components/templates/tagBrowser";
import { useTheme } from "@mui/material/styles";
const TagListPage = () => {
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
          Tag List
        </Typography>
      </Box>
      <TagBrowser />
    </Layout>
  );
};

export default TagListPage;
