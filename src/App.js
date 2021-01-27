import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";
import TaskState from "./context/TaskState";

function App() {
  return (
    <>
      <TaskState>
        <Header />
        <Todo />
      </TaskState>{" "}
    </>
  );
}

export default App;
