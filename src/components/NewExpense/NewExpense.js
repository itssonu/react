import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveHandler = (expenseFormData) => {
    props.onSave(expenseFormData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler} />
    </div>
  );
};

export default NewExpense;
