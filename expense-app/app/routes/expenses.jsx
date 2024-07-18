import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Buy a Book",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Gym Membership",
    amount: 8.99,
    date: new Date().toISOString(),
  },
];

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: expensesStyles }];
};
