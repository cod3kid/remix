// /expenses/analysis

import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { getExpense, getExpenses } from "~/data/expenses.server";
import { useLoaderData } from "@remix-run/react";

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();
  const hasExpenses = expenses.length;

  if (!hasExpenses) {
    return <p>No Expenses Found</p>;
  }
  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export const loader = async () => {
  const expenses = await getExpenses();
  return expenses;
};
