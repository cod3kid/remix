// /expenses/analysis

import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

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

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
