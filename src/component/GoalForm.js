import React from "react";

const GoalForm = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Enter your Goal</label>
        <input
          type="text"
          className="form-control"
          id="goal"
          placeholder="Enter Goal"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default GoalForm;
