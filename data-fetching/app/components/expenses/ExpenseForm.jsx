import { Link, useActionData, useSubmit } from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationError = useActionData();
  const submit = useSubmit();

  const submitHandler = (e) => {
    e.preventDefault();

    // Perform your own validation
    console.log("meow");
    submit(e.target, {
      // action:'/expenses/add',
      method: "post",
    });
  };

  return (
    <form
      method="post"
      className="form"
      id="expense-form"
      onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required />
        </p>
      </div>
      <ul>
        {validationError &&
          Object.values(validationError).map((error) => {
            return <li key={error}>{error}</li>;
          })}
      </ul>
      <div className="form-actions">
        <button>Save Expense</button>
        <Link to="..">Cancel</Link>
      </div>
    </form>
  );
}

export default ExpenseForm;
