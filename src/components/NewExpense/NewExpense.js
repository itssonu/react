import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveHandler = (expenseFormData) => {
    props.onSave(expenseFormData);
  };

  const startEditingHandler = () => {
    setIsEdit(true);
  };

  const onCancel = () => {
    setIsEdit(false);
  };

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="new-expense">
      {isEdit && <ExpenseForm onSave={onSaveHandler} onCancel={onCancel} />}
      {!isEdit && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
