import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoiceData } from "../../features/invoiceAppSlice/invoiceAppSlice";

export const InvoicesMenu = () => {
  const invoiceData = useSelector((state) => state.invoiceData.invoiceData);
  const dispatch = useDispatch();

  const handleChangeSelectStatus = (e) => {
    if (e.target.value === "" || e.target.value === "all") {
      dispatch(getInvoiceData(`invoiceData/`));
    } else {
      dispatch(getInvoiceData(`invoiceData/?status=${e.target.value}`));
    }
  };

  return (
    <nav>
      <div>
        <div>
          <h1>Invoices</h1>
          {invoiceData.length > 0 ? (
            <p>There are {invoiceData.length} total invoices</p>
          ) : (
            <p>No invoices</p>
          )}
        </div>
        <div>
          <select name="invoice" onChange={handleChangeSelectStatus}>
            <option value="">Filter by status</option>
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div>
          <button>NEW INVOICE</button>
        </div>
      </div>
    </nav>
  );
};
