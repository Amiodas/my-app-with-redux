import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
