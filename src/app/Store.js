import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../components/CounterSlice";

export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
