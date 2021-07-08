import React, { useState } from "react";

const GoalForm = (props) => {
  const [addGoal, setAddGoal] = useState("");

  const goalChangeHandler = (e) => {
    setAddGoal(e.target.value);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();

    const goalFormData = {
      id: Math.random().toString(),
      goal: addGoal,
    };

    props.singleGoalData(goalFormData);

    setAddGoal("");
  };

  return (
    <form onSubmit={onSaveHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter your Goal</label>
        <input
          type="text"
          className="form-control"
          id="goal"
          placeholder="Enter Goal"
          onChange={goalChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default GoalForm;
