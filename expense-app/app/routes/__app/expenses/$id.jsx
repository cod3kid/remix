// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  const handleCloseHandler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={handleCloseHandler}>
      <ExpenseForm />
    </Modal>
  );
}
