import Done from "./Components/Done";
import InProgress from "./Components/InProgress";
import ListTasks from "./Components/ListTasks";
import {TaskStyledFirstDiv} from './Components/style'

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <TaskStyledFirstDiv>
      <ListTasks/>
      <InProgress/>
      <Done/>
      </TaskStyledFirstDiv>
    </div>
  );
}

export default App;
