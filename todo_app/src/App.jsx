import { useState } from "react";


const App = () => {

  const [textInput, setTextInput] = useState('buy apple');

  // useState is a Hook (function) that allows you to have state variables in functional components. You have to pass the initial state to this function, and it returns a variables with the current state value (not necessarily the initial state) and another function to update this value ;

  // Therefore, inside the useState() hook 'buy apple' is an initial state or passing the initial value to the useState.
  // Whereas textInput is the current state variable that holds the initial state or value.

  const [itemsArray, setItemsArray] = useState([]);
  // Here, we have define the new useState hook to store the array of items whenever the user entered on the input field ;

  const handlerOnInputText = (event) => {
    setTextInput(event.target.value);
    // Here, we are calling the function to set the data to the initial value or to fix inside the initial array or object whatever you have mention inside the useState hook;

    // Here, we have used the event object as parameter to handlerOnInputText to be set by the setTextInput to target the value and fix it or to print that value with the help of onChange method inside the input tag that takes the handlerOnInputText as an reference or pointing to it for calling whenever it comes in contact. Do refresh yuu will see the hard coded data i.e, buy apple and if you enter inside the input tag you will get the values or you can print it on the console;

    // console.log(event.target.value);
  };

  const handlerOnAddBtn = () => {
    setItemsArray();
    // Here, we are setting the itemsArray with the help of useState function;
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do App </h1>
          <br />
          <input type="text" placeholder="add an item here" onChange={handlerOnInputText} />
          <button onClick={handlerOnAddBtn}> + </button>
          <ol>
            <li> {textInput} </li>
            {/* Passing the current state value with initial state i.e, "buy apple". */}
          </ol>
        </div>
      </div>

    </>
  )
}

export default App;