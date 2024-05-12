import { useState } from "react";


const App = () => {

  const [textInput, setTextInput] = useState('buy apple');

  // useState is a Hook (function) that allows you to have state variables in functional components. You have to pass the initial state to this function, and it returns a variables with the current state value (not necessarily the initial state) and another function to update this value ;

  const handlerOnInputText = () => { };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do App </h1>
          <br />
          <input type="text" placeholder="add an item here" onChange={handlerOnInputText} />
          <button> + </button>
          <ol>
            <li> {textInput} </li>
          </ol>
        </div>
      </div>

    </>
  )
}

export default App;