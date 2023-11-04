import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import FormView from "./pages/FormView.tsx";
import "./i18n.ts";
import "./index.css";
import Layout from "./component/global/Layout.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutError from "./component/global/LayoutError.tsx";
import CounterView from "./pages/CounterView.tsx";
import Tabs from "./pages/Tabs.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <LayoutError />,
    children: [
      {
        path: "",
        element: <CounterView />,
      },
      {
        path: "/form",
        element: <FormView />,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
