import React,{useContext} from 'react';
import './index.css';
import Task from '../Task'
import {ThemeContext} from '../../context/useContext'

function index(props) {
  const {arrayTasks,clearListTask,deleteTask,completeTask,orderTask,optionActive} = props

  const theme = useContext(ThemeContext)

	const footerList = (tasks) => {
		if(tasks > 0){
			return (
				<li className={"list_task_footer list_task_footer_" + theme}>
					<div>{arrayTasks.length} items left</div>
					<span onClick={clearListTask}>Clear Completed</span>
				</li>
			)
		}
	}

  return (<>
	<div className={"list_task list_task_" + theme}>
    <ul>
      {
        arrayTasks.length > 0 
          ? arrayTasks.map( (task) => <Task task={task} key={task.id} deleteTask={deleteTask} completeTask={completeTask} />)
          : <li className='emptyTasks'>There are no tasks!</li>
			}

			{
				footerList(arrayTasks.length)
			}
			
    </ul>
  </div>
	<div className={"select_order select_order_" + theme}>
		<strong className={optionActive===1 ? "span_active" : ""} onClick={()=>orderTask("All")}>All</strong>
		<strong className={optionActive===2 ? "span_active" : ""} onClick={()=>orderTask("Active")}>Active</strong>
		<strong className={optionActive===3 ? "span_active" : ""} onClick={()=>orderTask("Completed")}>Completed</strong>
	</div>
	
	<div className='txt_footer' >
		Drag and drop to reorder list
	</div>

</>)}

export default index