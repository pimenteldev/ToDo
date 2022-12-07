import React, { useContext } from 'react';
import './index.css';
import {ThemeContext} from '../../context/useContext'

function index(props) {
  const theme = useContext(ThemeContext)
    return (
        <div className={"banner banner-" + theme }>
          <div className="items">
            <span>TODO</span>
            {
              theme === "light" 
                ? <span onClick={()=>props.setTheme("dark")}><img src={"/icon-moon.svg"} /></span>
                : <span onClick={()=>props.setTheme("light")}><img src={"/icon-sun.svg"} /></span>
            }
            
          </div>
        </div>
      
      
  );
}

export default index;
