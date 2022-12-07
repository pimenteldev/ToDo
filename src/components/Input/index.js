import React,{useState} from 'react';
import {v4 as newID} from 'uuid'

import './index.css';

function index(props) {
  const {newTask} = props
  const [inputText, setInputText] = useState("")
  const handleChange = (e) => {
    setInputText(e.target.value)
  } 
  const handleKey = (e) => {
    if (e.key === "Enter") {
      if(inputText!==null && inputText.length > 0){
        newTask({ 
          "id": newID(),
          "taskContent": inputText,
          "class": "item",
          "circle": "circle_item"
        })
        e.target.value = ""
        setInputText("")
      }
    }
  }
  return (
    <div className='div_input'>
      <input onChange={handleChange} type={props.type} placeholder={props.placeholder} className={props.class} onKeyPress={handleKey}/>
      <i className={props.circle}></i>
    </div>
  );
}

export default index;
