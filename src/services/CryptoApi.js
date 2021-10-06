import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "cdef9fcd3amsh8cf4d3b1e9569b6p15bfc4jsn95ce22131036",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url , headers : cryptoApiHeader})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;