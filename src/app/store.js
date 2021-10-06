import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/CryptoNewsApi";
import { configureStore }  from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
