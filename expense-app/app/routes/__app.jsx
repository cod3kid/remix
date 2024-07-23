import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

function ExpensesAppLayout() {
  return <Outlet />;
}

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
export default ExpensesAppLayout;
