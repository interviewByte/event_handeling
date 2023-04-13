import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [isMouseOver, setMouseOver] = useState(false);

    function handelClick(){
        setHeadingText("Submitted");
    }
    function handelMouseOver(){
      setMouseOver(true);
    }
    function handelMouseOut(){
      setMouseOver(false)
    }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMouseOver===true?"black":"white"}}
      onClick={handelClick} 
      onMouseOver={handelMouseOver}
      onMouseOut={handelMouseOut}>Submit</button>
    </div>
  );
}

export default App;
