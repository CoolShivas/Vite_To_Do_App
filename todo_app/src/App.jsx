// import todo from "../public/pexels-karolina-grabowska-4195505.jpg";
// import ToDoLists from "./components/ToDoLists";
// import { useState } from "react";


// const App = () => {

//   const [textInput, setTextInput] = useState('');

//   // useState is a Hook (function) that allows you to have state variables in functional components. You have to pass the initial state to this function, and it returns a variables with the current state value (not necessarily the initial state) and another function to update this value ;

//   // Therefore, inside the useState() hook 'buy apple' is an initial state or passing the initial value to the useState.
//   // Whereas textInput is the current state variable that holds the initial state or value.

//   const [itemsArray, setItemsArray] = useState([]);
//   // Here, we have define the new useState hook to store the array of items whenever the user entered on the input field ;

//   const handlerOnInputText = (event) => {
//     setTextInput(event.target.value);
//     // Here, we are calling the function to set the data to the initial value or to fix inside the initial array or object whatever you have mention inside the useState hook;

//     // Here, we have used the event object as parameter to handlerOnInputText to be set by the setTextInput to target the value and fix it or to print that value with the help of onChange method inside the input tag that takes the handlerOnInputText as an reference or pointing to it for calling whenever it comes in contact. Do refresh yuu will see the hard coded data i.e, buy apple and if you enter inside the input tag you will get the values or you can print it on the console;

//     // console.log(event.target.value);
//   };

//   const handlerOnAddBtn = () => {
//     // Use of conditional rendering because previously the data is added on the list by clicking on the add button. But it is also adding empty string if you do not enter anything and hit add button it will add the empty string.
//     // So, to get rid of this we are using conditional rendering with alert;
//     if (!textInput) {
//       alert('Enter something to add')
//     }
//     else {
//       setItemsArray((prevItems) => {
//         return [...prevItems, textInput];
//       });
//     }
//     // Here, we are setting the itemsArray with the help of useState function;
//     // Now, setItemsArray taking the parameter as prevItems (or any name you can give I have mention the prevItems) i.e, the textInput that have the initial value. Therefore, setItemsArray will return the prevItems with the help of spread operator and textInput(as object or way of how to mention the data such as previously the instead of buy apple if ther were any car details it will be mention as an object with car colour, seats, wheels and many more) i.e, for setting the items in the same Array.
//     setTextInput("");
//     // Here, by using the add button clear the inputField after rendering the data ;
//   };

//   const handlerOnDelBtn = (idABC) => {
//     console.log('cross btn clicked');
//     // Getting the idABC from the onclick handler and pass it as an parameter to handlerOnAddBtn;
//     setItemsArray((prevItems) => {
//       // Performing the delete functionality on the prevItems that is already present inside the array;
//       return prevItems.filter((currElem, index) => {
//         return index !== idABC;
//         // With the help of index argument in the filter method to identify or match the index with id for deletion purpose;
//       })
//     })
//   };


//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <img src={todo} alt="image not found" style={{ width: "150px", height: "70px" }} />
//           <h1> To Do App </h1>
//           <br />
//           <input type="text" placeholder="add an item here" onChange={handlerOnInputText} value={textInput} />
//           {/* Here, we are using the value attribute for clearing the entered inputField after clicking on add button; */}
//           <button onClick={handlerOnAddBtn}> + </button>
//           <ol>
//             {/* <li> {textInput} </li> */}
//             {/* Passing the current state value with initial state i.e, "buy apple". */}
//             {itemsArray.map((arr, index) => {
//               return <ToDoLists key={index} idABC={index} arrABC={arr} handlerOnDelBtnABC={handlerOnDelBtn}></ToDoLists>
//               // Here, itemsArray will use the map method to set the data in the second useState hook in the form of an Array with the help of setItemsArray having the previous data and the way of previous data to be mention as;

//               /// // For Deletion purpose we are going to use the index paramater inside the map method and pass it as props to the onclick handler as idABC;
//             })}
//           </ol>
//         </div>
//       </div>

//     </>
//   )
// }

// export default App;





// /////////************************************************************************************************* */




// // Making the code shorter :-




// import todo from "../public/pexels-karolina-grabowska-4195505.jpg";
// import ToDoLists from "./components/ToDoLists";
// import { useState } from "react";


// const App = () => {

//   const [textInput, setTextInput] = useState('');

//   const [itemsArray, setItemsArray] = useState([]);


//   // const handlerOnInputText = (event) => {
//   //   setTextInput(event.target.value);
//   // };

//   // const handlerOnAddBtn = () => {
//   //   if (!textInput) {
//   //     alert('Enter something to add')
//   //   }
//   //   else {
//   //     setItemsArray((prevItems) => {
//   //       return [...prevItems, textInput];
//   //     });
//   //   }
//   //   setTextInput("");
//   // };

//   const handlerOnAddBtn = () => {
//     if (!textInput) {
//       alert("Please enter something.");
//     }
//     else {
//       setItemsArray([...itemsArray, textInput]);
//     }
//     setTextInput('');
//   };

//   const handlerOnDelBtn = (idABC) => {
//     setItemsArray((prevItems) => {
//       return prevItems.filter((currElem, index) => {
//         return index !== idABC;
//       })
//     })
//   };


//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <img src={todo} alt="image not found" style={{ width: "150px", height: "70px" }} />
//           <h1> To Do App </h1>
//           <br />
//           <input type="text" placeholder="add an item here" onChange={(e) => setTextInput(e.target.value)} value={textInput} />
//           <button onClick={handlerOnAddBtn}> + </button>
//           <ol>
//             {itemsArray.map((arr, index) => {
//               return <ToDoLists key={index} idABC={index} arrABC={arr} handlerOnDelBtnABC={handlerOnDelBtn}></ToDoLists>
//             })}
//           </ol>
//         </div>
//       </div>

//     </>
//   )
// }

// export default App;







/////////************************************************************************************************* */




// Making the delete code shorter :-




import todo from "../public/pexels-karolina-grabowska-4195505.jpg";
import ToDoLists from "./components/ToDoLists";
import { useState } from "react";


const App = () => {

  const [textInput, setTextInput] = useState('');

  const [itemsArray, setItemsArray] = useState([]);


  const handlerOnAddBtn = () => {
    if (!textInput) {
      alert("Please enter something.");
    }
    else {
      setItemsArray([...itemsArray, textInput]);
    }
    setTextInput('');
  };

  const handlerOnDelBtn = (idABC) => {
    const updatedArray = itemsArray.filter((currElem, index) => {
      return index !== idABC;
    })
    setItemsArray(updatedArray);
  };

  const handlerOnRemoveAll = () => {
    setItemsArray([]);
  };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <img src={todo} alt="image not found" style={{ width: "150px", height: "70px" }} />
          <h1> To Do App </h1>
          <br />
          <input type="text" placeholder="add an item here" onChange={(e) => setTextInput(e.target.value)} value={textInput} />
          <button onClick={handlerOnAddBtn}
            className="first_btn"
          > + </button>
          <ol>
            {itemsArray.map((arr, index) => {
              return <ToDoLists key={index} idABC={index} arrABC={arr} handlerOnDelBtnABC={handlerOnDelBtn}></ToDoLists>
            })}
          </ol>
          <button onClick={handlerOnRemoveAll} className="second_btn"> Remove All </button>
        </div>
      </div>

    </>
  )
}

export default App;