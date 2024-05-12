import { createContext, useEffect, useState } from "react";

const ToDoContext = createContext();


export const ToDoCtxProvider = (props) => {

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

    useEffect(() => {
        localStorage.setItem("Task", JSON.stringify(itemsArray));
        // For storing the data into the localStorage by setItem by passing the name i.e, "Task", and to store the array in the form of string. We have to use the JSON.stringify() to convert it into string. What we have to convert i.e, the array where we storing the data with the help of useState i.e, itemsArray. 

        // And we know that useEffect render only first time ( or render once with blank [] as dependency) if the data updates then we have to pass the dependencies inside the Array.

    }, [itemsArray]);


    const taskValues = {
        textInput: textInput,
        setTextInput: setTextInput,
        itemsArray: itemsArray,
        addition: handlerOnAddBtn,
        subtraction: handlerOnDelBtn,
        removeAll: handlerOnRemoveAll,
    };


    return <ToDoContext.Provider value={taskValues}>
        {props.children}
    </ToDoContext.Provider>
};


export default ToDoContext;