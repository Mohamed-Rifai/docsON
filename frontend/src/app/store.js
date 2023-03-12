import { configureStore } from "@reduxjs/toolkit";

import hospitalReducer from './slices/authHospital'

export const store = configureStore({
  reducer: {
    hospitalAuth: hospitalReducer,
  },
});                              


