import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store/store";
import { ShowInvoices } from "./components/showInvoices/ShowInvoices";
import { InovicesMenu } from "./components/inovicesMenu/InovicesMenu";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ShowInvoices />
      <InovicesMenu />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
