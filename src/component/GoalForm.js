import React from "react";

const GoalForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
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
        </div>
      </div>
    </div>
  );
};

export default GoalForm;
