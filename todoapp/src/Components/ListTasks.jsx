import React, { useState } from 'react';
import {StyledInput, StyledDivForTask, TaskStyledDiv, StyledTasksUl} from './style';
import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import DropArea from './DropArea';

const ListTasks = ({title, isInputRequired, tasks, setTasks,setActiveCard}) => {
  const [input, setInput] = useState('');
  const [taskDone, setTaskDone] = useState(false);
  
  const handleClick=(e)=>{
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, input])
    setInput('');
  }

  return (
    <StyledDivForTask>
        <h1>{title}</h1>
        {isInputRequired &&    
        <>
        <StyledInput placeholder='Enter your tasks...' value={input} onChange={(e)=>setInput(e.target.value)}>
        </StyledInput>
        <Fab color="primary" aria-label="add" onClick={handleClick} size='small'>
            <AddIcon />
        </Fab>
        </>
        }
        {tasks && tasks.map((task, index) =>{
            return(
                <>
                <StyledTasksUl draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
                    <TaskStyledDiv key={index}>{task}
                    <Fab onClick={() => setTaskDone(!taskDone)} aria-label="Done" size='small' style={{margin:'6px',color: taskDone ? 'blue' : 'orange'}}>
                        <DoneIcon/>
                    </Fab>
                    </TaskStyledDiv>
                </StyledTasksUl>
                <DropArea/>
                </>
            )
        })}
    </StyledDivForTask>
  )
}

export default ListTasks