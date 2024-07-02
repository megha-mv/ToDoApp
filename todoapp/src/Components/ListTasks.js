import React, { useState } from 'react';
import {StyledInput, StyledDivForTask, TaskStyledDiv, StyledTasksUl} from './style';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

const ListTasks = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  console.log(input);

  const handleClick=(e)=>{
    e.preventDefault();
    setTasks((prevTasks) => [input,...prevTasks])
    setInput('');
  }

  return (
    <StyledDivForTask>
        <h1>Enter your tasks</h1>
        <StyledInput placeholder='Enter your tasks...' value={input} onChange={(e)=>setInput(e.target.value)}></StyledInput>
        <Fab color="primary" aria-label="add" onClick={handleClick} size='small'>
        <AddIcon />
        </Fab>
        {tasks && tasks.map((task) =>{
            return(
                <>
                <StyledTasksUl>
                    <TaskStyledDiv>{task}</TaskStyledDiv>
                    <Fab enabled aria-label="like" size='small' style={{margin:'6px',color:'orange'}}>
                        <FavoriteIcon/>
                    </Fab>
                </StyledTasksUl>
                </>
            )
        })}
    </StyledDivForTask>
  )
}

export default ListTasks