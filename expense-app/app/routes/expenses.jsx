import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared Component</p>
      <Outlet />
    </main>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
