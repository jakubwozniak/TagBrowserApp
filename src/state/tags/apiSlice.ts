import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/" }),
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: ({ order, sort, page, pageSize, site, accessToken, key }) => {
        let params = `tags?&site=${site}`;
        if (accessToken && key)
          params += `&accessToken=${accessToken}&key=${key}`;

        if (page) params += `&page=${page}`;
        if (pageSize) params += `&pageSize=${pageSize}`;
        if (order) params += `&order=${order}`;
        if (sort) params += `&sort=${sort}`;

        return params;
      },
    }),
  }),
});

export const { useGetAllTagsQuery } = tagsApi;
