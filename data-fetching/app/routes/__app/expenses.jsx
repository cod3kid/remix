// /expenses => shared layout

import { Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}

export const loader = async ({ request }) => {
  const expenses = await getExpenses();
  return expenses;
};
