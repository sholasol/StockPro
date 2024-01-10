import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage/SearchPage";
import HomePage from "../pages/HomePage/HomePage";
import CompanyPage from "../pages/CompanyPage/CompanyPage";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "company", element: <CompanyPage /> },
    //   { path: "design-guide", element: <DesignGuide /> },
    //   {
    //     path: "company/:ticker",
    //     element: <CompanyPage />,
    //     children: [
    //       { path: "company-profile", element: <CompanyProfile /> },
    //       { path: "income-statement", element: <IncomeStatement /> },
    //       { path: "balance-sheet", element: <BalanceSheet /> },
    //       { path: "cashflow-statement", element: <CashflowStatement /> },
    //       // { path: "historical-dividend", element: <HistoricalDividend /> },
    //     ],
    //   },
    ],
  },
]);