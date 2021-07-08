import "./App.css";
import GoalForm from "./component/GoalForm.js";
import Goal from "./component/Goal.js";
import Ui from "./component/Ui.js";
import React, { useState } from "react";
function App() {
  const initialGoalData = [
    {
      id: "goal1",
      goal: "first goal",
    },
    {
      id: "goal2",
      goal: "second goal",
    },
  ];

  const [goalData, setGoalData] = useState(initialGoalData);

  const addGoalHandler = (singleGoalData) => {
    // console.log(singleGoalData);
    setGoalData((prevGoalData) => {
      console.log(prevGoalData);
      return [singleGoalData, ...prevGoalData];
    });
  };

  return (
    <>
      <Ui>
        <GoalForm singleGoalData={addGoalHandler} />
        <Goal goalData={goalData} />
      </Ui>
    </>
  );
}

export default App;
