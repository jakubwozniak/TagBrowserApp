import { Box, SelectChangeEvent } from "@mui/material";
import SimpleList from "../../molecules/simpleList";
import { ReactNode } from "react";
import CustomNumberInput from "../../atoms/customNumberInput";
import CustomDropdown from "../../atoms/customDropdown";
import TagItem from "../../atoms/tagItem";
import PaginationComponent from "../../molecules/paginationComponent";

const sortFields = [
  { name: "", value: 0 },
  { name: "popular", value: 1 },
  { name: "name", value: 2 },
];
const sortDirections = [
  { name: "", value: 0 },
  { name: "asc", value: 1 },
  { name: "desc", value: 2 },
];

interface TagDataProps {
  quota_max: number;
  items: any;
  has_more: boolean;
  quota_remaining: number;
}

interface TagListProps {
  data: TagDataProps;
  currentItemsOnPagesInput: number;
  currentItemsOnPage: number;
  currentPageInput: number | undefined;
  currentPage: number;
  sortField: string;
  sortDirection: string;
  handleSortFieldChange: (
    event: SelectChangeEvent<string | number>,
    reactNode: ReactNode
  ) => void;
  handleSortDirectionChange: (
    event: SelectChangeEvent<string | number>,
    reactNode: ReactNode
  ) => void;
  handleItemsPerPageChange: (value: number | null | undefined) => void;
  handleCurrentPageInputChange: (value: number | null | undefined) => void;
}

const TagList = ({
  data,
  currentItemsOnPagesInput,
  currentItemsOnPage,
  currentPageInput,
  currentPage,
  sortField,
  sortDirection,
  handleSortFieldChange,
  handleSortDirectionChange,
  handleItemsPerPageChange,
  handleCurrentPageInputChange,
}: TagListProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          p: "16px",
          display: "flex",
          alignItems: "baseline",
          gap: "8px",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <CustomDropdown
          value={sortField}
          handleChange={(
            event: SelectChangeEvent<string | number>,
            reactNode: ReactNode
          ) => handleSortFieldChange(event, reactNode)}
          items={sortFields}
          text="Sort Field"
        />
        <CustomDropdown
          value={sortDirection}
          handleChange={(event, value) =>
            handleSortDirectionChange(event, value)
          }
          items={sortDirections}
          text="Sort Direction"
        />
        <Box sx={{ width: { sm: "150px", xs: "100%" } }}>
          <CustomNumberInput
            min={1}
            max={100}
            aria-label="page size input"
            placeholder="Page size"
            value={currentItemsOnPagesInput}
            onChange={(event, value) => handleItemsPerPageChange(value)}
          />
        </Box>
      </Box>
      {data && (
        <>
          <SimpleList direction="row" items={data.items} renderItem={TagItem} />
          <PaginationComponent
            currentPageInput={currentPageInput}
            handlePageChange={handleCurrentPageInputChange}
            totalPages={Math.ceil(50000 / currentItemsOnPage)}
          />
        </>
      )}
    </Box>
  );
};

export default TagList;
