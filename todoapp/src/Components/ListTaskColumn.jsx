import React, {useState} from 'react'
import ListTasks from './ListTasks';

const ListTaskColumn = () => {
  const [tasks, setTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  // const [taskDone, setTaskDone] = useState(false);

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row',width:'100%'}}>
        <ListTasks isInputRequired={true} title='Todo' tasks={tasks} setTasks={setTasks} setActiveCard={setActiveCard}/>
        <ListTasks isInputRequired={false} title='InProgress' setActiveCard={setActiveCard}/>
        <ListTasks isInputRequired={false} title='Done' setActiveCard={setActiveCard}/>
    </div>
  )
}

export default ListTaskColumn;