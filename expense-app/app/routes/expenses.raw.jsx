// /expenses/raw

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

export const loader = () => {
  return DUMMY_EXPENSES;
};
