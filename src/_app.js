import React,{useState, useEffect} from 'react';
import './styles/app.css';
import Header from "./components/Header"
import Input from "./components/Input"
import ListTask from "./components/ListTask"
import { ThemeContext } from './context/useContext';

function App() {
  const initialTask = JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks, setTasks] = useState(initialTask)
  const [theme, setTheme] = useState('light')
  const [tasksOrder, setTaskOrder] = useState(tasks)
  const [optionActive, setOptionActive] = useState(1)

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setTaskOrder(JSON.parse(localStorage.getItem("tasks")))
  }, [tasks])

  const newTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id ))
  }

  const completeTask = (taskComplete) => {
    let updateTask = {}
    if(taskComplete.circle==="circle_item"){
      updateTask = {
        "id": taskComplete.id,
        "taskContent" : taskComplete.taskContent,
        "class" : "item item_active",
        "circle" : "circle_item_active",
      }
    }else{
      updateTask = {
        "id": taskComplete.id,
        "taskContent" : taskComplete.taskContent,
        "class" : "item item_checked",
        "circle" : "circle_item_check",
      }
    }
    

    setTasks(tasks.map(task => task.id === taskComplete.id ? updateTask : task ))
    orderTask("All")
  }
  
  const clearListTask = () => {
    setTasks([])
  }

  const orderTask = (option) => {
    if(option === "All"){
      setTaskOrder(tasks.map(task=> task))
      setOptionActive(1)
    }
    if(option === "Active"){
      setTaskOrder(tasks.filter(task=> task.class === "item item_active"))
      setOptionActive(2)
    }
    if(option === "Completed"){
      setTaskOrder(tasks.filter(task=> task.class === "item item_checked"))
      setOptionActive(3)
    }
  } 
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className={"wrapper wrapper_"+ theme}>
        <Header setTheme={setTheme} />
        <main className={"main_"+ theme}>
          <Input newTask={newTask} type="text" class={"inputPrimary input-" + theme} circle="circlePrimary" placeholder="Create a new todo..."/>
          <ListTask arrayTasks={tasksOrder} orderTask={orderTask} optionActive={optionActive} completeTask={completeTask} clearListTask={clearListTask} deleteTask={deleteTask} />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App