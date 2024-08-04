// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense, updateExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

// export const loader = async ({ params }) => {
//   const id = params.id;
//   const expense = await getExpense(id);
//   return expense;
// };

export const action = async ({ params, request }) => {
  const id = params.id;
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (err) {
    return err;
  }

  await updateExpense(id, expenseData);

  return redirect("/expenses");
};
