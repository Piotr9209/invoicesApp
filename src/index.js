import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store/store";
import { ShowInvoices } from "./components/showInvoices/ShowInvoices";
import { InvoicesMenu } from "./components/invoicesMenu/invoicesMenu";
import { InvoicesNav } from "./components/invoicesNav/InvoicesNav.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <InvoicesNav />
      <InvoicesMenu />
      <ShowInvoices />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
