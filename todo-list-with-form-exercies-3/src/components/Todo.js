import React from 'react'

function Todo({todo}) { //properties är todo
  return (
    <li> {todo.task} </li>
  )
}

export default Todo