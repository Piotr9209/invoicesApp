import { configureStore } from "@reduxjs/toolkit";
import { invoiceAppSlice } from "../invoiceAppSlice/invoiceAppSlice";

const store = configureStore({
  reducer: {
    invoiceData: invoiceAppSlice.reducer,
  },
});

export default store;
