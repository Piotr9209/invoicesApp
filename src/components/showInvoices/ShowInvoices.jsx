import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoiceData } from "../../features/invoiceAppSlice/invoiceAppSlice";

export const ShowInvoices = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.invoiceData.invoiceData);

  useEffect(() => {
    dispatch(getInvoiceData("invoiceData/"));
  }, [dispatch]);
  return (
    <main>
      {invoiceData > 0
        ? invoiceData.map((invoice) => (
            <div key={invoice.id}>
              <span className="id-invoice">#{invoice.id}</span>
              <span>{invoice.paymentDue}</span>
              <span>{invoice.clientName}</span>
              <span>{invoice.total}</span>
              <span>{invoice.status}</span>
            </div>
          ))
        : "NOTHING INVOICE"}
    </main>
  );
};
