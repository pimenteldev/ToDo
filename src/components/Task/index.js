import React,{useContext} from 'react';
import './index.css';
import {ThemeContext} from '../../context/useContext'

function index(props) {
  const {task,id,deleteTask,completeTask} = props
  const theme = useContext(ThemeContext)
  const handleClick = (e) => {
    
    if(e.target.classList.contains('delete_task')){
      deleteTask(task.id)
    }else{
      completeTask(task)
    }
    e.stopPropagation()
  }

  return (
    <li className={task.class+ " item_" + theme} key={id} >
      <i className={task.circle+ " circle_item_active_"+theme} onClick={handleClick}></i>
      {task.taskContent}
      <span className="delete_task" onClick={handleClick}>X</span>
    </li>
);
}

export default index;
