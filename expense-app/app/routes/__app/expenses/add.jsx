// /expenses/add

import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function AddExpensesPage() {
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
