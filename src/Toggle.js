import { useState } from "react";
import "./style.css";

const Toggle = () => {
    const [theme, setTheme] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonColor, setButtonColor] = useState("#ffffff");


    function handleclick(){
setTheme(theme==="white"?"#1b1b1b":"white");
setTextColor(textColor==="#1b1b1b"?"#ffa31a":"#1b1b1b");
setButtonColor(buttonColor==="#ffffff"?"#1b1b1b":"#ffffff");
    }
  return (
   <>
   <section style={{backgroundColor:theme,color:textColor}}>
    <button onClick={handleclick} style={{buttonStyle:buttonColor,color:textColor,border: `2px solid ${textColor}`}}>
        {theme==="#1b1b1b"?"Black Theme":"White Theme"}</button>
        <section className="content">
            <h1>Welcome To A <br />
            Real World</h1>
        </section>
        </section>
        
        
        </>
  )
}

export default Toggle