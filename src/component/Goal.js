import React from "react";

const Goal = (props) => {
  return (
    <ul className="list-group mt-5">
      {props.goalData.map((v) => (
        <li key={v.id} className="list-group-item">
          {v.goal}
        </li>
      ))}
    </ul>
  );
};

export default Goal;
