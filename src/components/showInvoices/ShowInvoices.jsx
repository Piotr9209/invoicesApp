import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoiceData } from "../../features/invoiceAppSlice/invoiceAppSlice";

export const ShowInvoices = () => {
  const dispatch = useDispatch();
  const invoiceData = useSelector((state) => state.invoiceData.invoiceData);

  useEffect(() => {
    dispatch(getInvoiceData());
  }, [dispatch]);
  return (
    <div>
      <p>Show Invoices</p>
      {console.log(invoiceData)}
    </div>
  );
};
