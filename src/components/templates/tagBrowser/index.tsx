import { Box, SelectChangeEvent, useTheme } from "@mui/material";
import TagList from "../../organisms/tagList";
import { containerStyles } from "./styles";
import { ReactNode, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { useGetAllTagsQuery } from "../../../state/tags/apiSlice";
import { RootState } from "../../../state/store";
import LoaderComponent from "../../atoms/loaderComponent";
import TagLoadingErrorComponent from "../../organisms/tagLoadingErrorComponent";

const TagBrowser = () => {
  const theme = useTheme();
  const [currentItemsOnPagesInput, setCurrentItemsOnPageInput] =
    useState<number>(5);
  const [currentItemsOnPage, setCurrentItemsOnPage] = useState<number>(5);
  const [currentPageInput, setCurrentPageInput] = useState<number | undefined>(
    1
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [sortField, setSortField] = useState<string>("");

  const [sortDirection, setSortDirection] = useState<string>("");

  const handleSortFieldChange = (
    event: SelectChangeEvent<string | number>,
    reactNode: ReactNode
  ) => {
    setSortField(event.target.value as string);
  };
  const handleSortDirectionChange = (
    event: SelectChangeEvent<string | number>,
    reactNode: ReactNode
  ) => {
    setSortDirection(event.target.value as string);
  };

  const debouncedSetCurrentItemsOnPage = useRef(
    debounce((newValue: number) => {
      setCurrentItemsOnPage(newValue);
    }, 500)
  ).current;

  const debouncedSetCurrentPage = useRef(
    debounce((newValue: number) => {
      setCurrentPage(newValue);
    }, 500)
  ).current;

  const handleItemsPerPageChange = (value: number | null | undefined) => {
    let newValue =
      value === undefined || value === null || value < 1 ? 1 : value;
    setCurrentItemsOnPageInput(newValue);
    debouncedSetCurrentItemsOnPage(newValue);
    setCurrentPageInput(1);
    setCurrentPage(1);
  };

  const handleCurrentPageInputChange = (value: number | null | undefined) => {
    let newValue =
      value === undefined || value === null || value < 1 ? 1 : value;
    setCurrentPageInput(newValue);
    debouncedSetCurrentPage(newValue);
  };

  const userData = useSelector(
    (state: RootState) => state.userData.tagApiAccessToken
  );
  const { data, error, isLoading } = useGetAllTagsQuery({
    sort: sortField,
    order: sortDirection,
    page: currentPage,
    pageSize: currentItemsOnPage,
    accessToken: userData,
    key: "I11Kfpo6wg5Hfr)ajeiWBA((",
    site: "stackoverflow",
  });

  useEffect(() => {
    console.log("tagApiAccessToken " + userData);
  }, [userData]);
  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log("New Tags:", data);
    }
    return () => {
      debouncedSetCurrentPage.cancel();
      debouncedSetCurrentItemsOnPage.cancel();
    };
  }, [
    data,
    error,
    isLoading,
    debouncedSetCurrentPage,
    debouncedSetCurrentItemsOnPage,
  ]);

  if (isLoading) return <LoaderComponent />;

  if (error) {
    return <TagLoadingErrorComponent error={error} />;
  }

  return (
    <Box sx={containerStyles}>
      <TagList
        data={data}
        currentItemsOnPagesInput={currentItemsOnPagesInput}
        currentItemsOnPage={currentItemsOnPage}
        currentPageInput={currentPageInput}
        currentPage={currentPage}
        sortField={sortField}
        sortDirection={sortDirection}
        handleSortFieldChange={handleSortFieldChange}
        handleSortDirectionChange={handleSortDirectionChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
        handleCurrentPageInputChange={handleCurrentPageInputChange}
      />
    </Box>
  );
};

export default TagBrowser;
