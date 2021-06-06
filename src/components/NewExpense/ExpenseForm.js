import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [addDate, setAddDate] = useState("");
  const titleChangeHandler = (e) => {
    setAddTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAddAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setAddDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const expenseFormData = {
      id: Math.random().toString(),
      title: addTitle,
      amount: addAmount,
      date: new Date(addDate),
    };
    props.onSave(expenseFormData);
    setAddTitle("");
    setAddAmount("");
    setAddDate("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={addTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={addAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={addDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
