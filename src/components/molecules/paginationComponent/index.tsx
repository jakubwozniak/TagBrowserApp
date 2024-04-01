import { Pagination } from "@mui/material";
import { Box } from "@mui/material";

interface PaginationComponentProps {
  currentPageInput: number | undefined;
  handlePageChange: (value: number | null | undefined) => void;
  totalPages: number;
}

const PaginationComponent = ({
  currentPageInput,
  handlePageChange,
  totalPages,
}: PaginationComponentProps) => {
  return (
    <Box sx={{ p: "16px", display: "flex", justifyContent: "center" }}>
      <Pagination
        count={totalPages}
        page={currentPageInput}
        onChange={(event, value) => handlePageChange(value)}
        shape="rounded"
      />
    </Box>
  );
};

export default PaginationComponent;
