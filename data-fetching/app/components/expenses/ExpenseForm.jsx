import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useMatches,
  useNavigation,
  useParams,
  useSubmit,
} from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationError = useActionData();
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  // const expenseData = useLoaderData();
  const matches = useMatches();

  const params = useParams();
  const data = matches.find(
    (match) => match.id === "routes/__app/expenses"
  ).data;
  const expenseData = data.find((expense) => expense.id === params.id);

  if (params.id && !expenseData) {
    return <p>Error</p>;
  }
  const defaultValues = expenseData
    ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date,
      }
    : {
        title: "",
        amount: "",
        date: "",
      };

  const submitHandler = (e) => {
    e.preventDefault();

    // Perform your own validation

    submit(e.target, {
      // action:'/expenses/add',
      method: "post",
    });
  };

  return (
    <Form
      method="post"
      className="form"
      id="expense-form"
      onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValues.title}
        />
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
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={defaultValues.date.slice(0, 10)}
          />
        </p>
      </div>
      <ul>
        {validationError &&
          Object.values(validationError).map((error) => {
            return <li key={error}>{error}</li>;
          })}
      </ul>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Expense"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
