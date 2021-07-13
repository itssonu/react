import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

const GoalForm = (props) => {
  const goalInputref = useRef();

  const [error, setError] = useState("");

  const goalRegex = new RegExp("^[a-zA-Z]");

  const onSaveHandler = (e) => {
    const addGoal = goalInputref.current.value;
    e.preventDefault();
    if (addGoal.trim().length === 0) {
      setError({ message: "Goal can't be empty" });
      return;
    }
    if (!goalRegex.test(addGoal)) {
      setError({ message: "Goal can't be in number" });
      return;
    }

    const goalFormData = {
      id: Math.random().toString(),
      goal: addGoal,
    };

    props.singleGoalData(goalFormData);

    goalInputref.current.value = "";
  };

  const ErrorModal = () => {
    return (
      <div>
        <div
          className={
            "modal fade" + (error !== "" ? " show d-block" : " d-none")
          }
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invalid Input</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setError("")}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{error.message}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setError("")}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <form onSubmit={onSaveHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your Goal</label>
          <input
            type="text"
            className={`form-control ${error && "is-invalid"} `}
            id="goal"
            name="goal"
            placeholder="Enter Goal"
            ref={goalInputref}
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
      {ReactDOM.createPortal(
        <ErrorModal />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default GoalForm;
