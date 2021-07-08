import React, { useState } from "react";

const GoalForm = (props) => {
  const [addGoal, setAddGoal] = useState("");
  const [error, setError] = useState("");

  const goalChangeHandler = (e) => {
    setAddGoal(e.target.value);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();

    if (validateGoal(addGoal)) {
      const goalFormData = {
        id: Math.random().toString(),
        goal: addGoal,
      };

      props.singleGoalData(goalFormData);
    }

    setAddGoal("");
  };

  const validateGoal = (e) => {
    if (addGoal.trim().length === 0) {
      setError({ message: "Goal can't be empty" });
      return;
    }
    const goalRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    return true;
  };

  return (
    <>
      <form onSubmit={onSaveHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your Goal</label>
          <input
            type="text"
            className="form-control"
            id="goal"
            name="goal"
            placeholder="Enter Goal"
            value={addGoal}
            onChange={goalChangeHandler}
          />
          {error && (
            <span className="" style={{ color: "red" }}>
              {error.message}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default GoalForm;
