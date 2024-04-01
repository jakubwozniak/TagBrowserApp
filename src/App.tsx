import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}
