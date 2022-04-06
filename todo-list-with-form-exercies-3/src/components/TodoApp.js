import React, { useState } from 'react'
import Todo from './Todo';

/**
 * Part 1: Generate list (See generate-todo-list-solution-2 )
 * - generats a list from todos array below, with the array-method .map() 
 * - Refactor the code for listItems, into a new child component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Form for adding new todo-items 
 * - Add a form with input field and a button
 * - Create a new state 'task' with default value '', that will be used for the controlled input field
 * - Create a new function handleChange(), that will be used for the controlled input field
 * - Add an onChange function on the controlled input field, that calls the function handleChange()
 * - Add an onSubmit event on the form, that calls the already defined function handleSubmit()
 * 
 * Part 3: Styling
 * - Style the app, using CSS modules
 * 
 * Part 4 (hard): Refactor form
 * - Refactor the code for the form, into a new child component
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */






    function Message(props) {
        return <li>Det här är: {props.task}</li> 
        
      }
    
      function TodoApp() {
      const defaultTodos = [
        {id: 1, task: 'Syssla 1'},
        {id: 2, task: 'Syssla 2'},
        {id: 3, task: 'Syssla 3'},
        {id: 4, task: 'Syssla 4'},
        {id: 5, task: 'Syssla 5'}
      ];
        
        return (
         
        <ul>
            {
              defaultTodos.map(todo => <Todo key={todo.id}todo={todo} />) //Underkomponent, property, dynamiskt värde = 1:a todo efter .map
              
            }
              
        </ul>
          
        );
      }






/*
    const [todos, setTodos] = useState(defaultTodos);

    const handleSubmit = (e) => {
        e.preventDefault();

        // NOTE! Not the best way to generate a unique ID. 
        // There are libraries that are more suitable for this job
        const randomId = Math.random() * 1000;  

        const newTodo = {id: randomId, task: task}; // NOTE, the variable "task" is to be created from useState();

        // Using the spread operator to add a new element to an array, 
        // because its not allowed to change the state directly
        // The spread operator returns a new array instead of changing the original one
        setTodos([
            ...todos,
            newTodo
        ])
        return (
            <div>
            </div>
        )
    }
    */

    


export default TodoApp

