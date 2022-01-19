import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  invoiceData: [],
  loading: true,
  failed: false,
  success: false,
  newInvoice: false,
};
const url = "http://localhost:8000/";

const checkForError = (response) => {
  if (!response.ok) throw Error("ERROR" + response.statusText);
  return response.json();
};

export const getInvoiceData = createAsyncThunk(
  "invoice/getInvoiceData",
  async (id) => {
    return await fetch(url + id)
      .then(checkForError)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("FETCH_ERR: ", error);
      });
  }
);

export const invoiceAppSlice = createSlice({
  name: "invoiceAppSelected",
  initialState,
  reducers: {
    toggleNewInvoice: (state) => {
      state.newInvoice = !state.newInvoice;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInvoiceData.pending, (state) => {
      state.failed = false;
      state.loading = true;
    });
    builder.addCase(getInvoiceData.fulfilled, (state, action) => {
      state.loading = false;
      state.failed = false;
      state.success = true;
      state.invoiceData = action.payload;
    });
    builder.addCase(getInvoiceData.rejected, (state) => {
      state.failed = true;
    });
  },
});
