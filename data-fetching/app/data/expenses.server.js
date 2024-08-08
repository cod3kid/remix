import { prisma } from "./database.server";

export const addExpense = async (expenseData) => {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (err) {
    throw Error("Failed to create an expense.");
  }
};

export const getExpenses = async () => {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return expenses;
  } catch (err) {
    throw Error("Failed to get the list of expenses.");
  }
};

export const getExpense = async (id) => {
  try {
    const expense = await prisma.expense.findFirst({
      where: {
        id,
      },
    });

    return expense;
  } catch (err) {
    throw Error("Failed to get an expense.");
  }
};

export const updateExpense = async (id, expenseData) => {
  try {
    const expense = await prisma.expense.update({
      where: {
        id,
      },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });

    return expense;
  } catch (err) {
    throw Error("Failed to update an expense.");
  }
};

export const deleteExpense = async (id) => {
  try {
    const expense = await prisma.expense.delete({
      where: {
        id,
      },
    });

    return expense;
  } catch (err) {
    console.log(err);
    throw Error("Failed to delete an expense.");
  }
};
