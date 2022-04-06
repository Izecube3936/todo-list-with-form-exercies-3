import React, {useState} from 'react'
 

/*Part 2: Form for adding new todo-items 
 * - Add a form with input field and a button
 * - Create a new state 'task' with default value '', that will be used for the controlled input field
 * - Create a new function handleChange(), that will be used for the controlled input field
 * - Add an onChange function on the controlled input field, that calls the function handleChange()
 * - Add an onSubmit event on the form, that calls the already defined function handleSubmit()
 * */



function Forms() {
  const [task, setTask] = useState('');
  const handleChange = (e) => {
    setTask(e.target.value);  //gör att man kan mata in text och kringgå ursprungsvärdet ('')
}

const handleSubmit = (e) => {
  e.preventDefault(); //Gör så att det man skriver inte raderas när man trycker på knappen
    /*form nedan har alltid onSubmit*/
    //The onchange event, below, occurs when the value of an element has been changed.
}

  return (
     <form onSubmit={handleSubmit}> 
    <input type="text" id="task" name="task"  
    value={task} onChange={handleChange}  />  
    <button>Klick me</button>
    </form>
  )
}

export default Forms