import logo from "./logo.svg";
import "./App.css";
import GoalForm from "./component/GoalForm.js";
import Goal from "./component/Goal.js";
import Ui from "./component/Ui.js";
function App() {
  return (
    <>
      <Ui>
        <GoalForm />
        <Goal />
      </Ui>
    </>
  );
}

export default App;
