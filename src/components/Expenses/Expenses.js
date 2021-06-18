import styles from "./Expenses.module.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
// import React from 'react';

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const onExpenseFilterHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    if (selectedFilter === "") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === selectedFilter;
    }
  });

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        selected={selectedFilter}
        onChangeFilter={onExpenseFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {/* {expenseContent} */}
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
