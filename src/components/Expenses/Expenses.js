import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
// import React from 'react';

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const onExpenseFilterHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    if (selectedFilter == "") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === selectedFilter;
    }
  });

  let expenseContent = <p>No expenses found.</p>;

  console.log(expenseContent);

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      // console.log(expense);
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedFilter}
        onChangeFilter={onExpenseFilterHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
