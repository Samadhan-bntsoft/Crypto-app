import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/CryptoNewsApi";
import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "../services/UserSliceApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    userSliceReducer,
  },
});
