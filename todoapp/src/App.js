import ListTaskColumn from './Components/ListTaskColumn'
import {TaskStyledFirstDiv} from './Components/style'

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <TaskStyledFirstDiv>
      <ListTaskColumn/>
      </TaskStyledFirstDiv>
    </div>
  );
}

export default App;
