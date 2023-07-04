import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";

const store = configureStore({
  reducer: {
    global: GlobalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
