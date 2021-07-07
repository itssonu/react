import logo from "./logo.svg";
import "./App.css";
import GoalForm from "./component/GoalForm.js";
import Goal from "./component/Goal.js";
import Ui from "./component/Ui.js";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Ui>
        <GoalForm />
        <Goal />
      </Ui>
    </>
  );
}

export default App;
