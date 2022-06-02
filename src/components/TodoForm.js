import React from 'react'
import { TodoContext } from '../TodoContext'
import '../css/TodoForm.css'
function TodoForm(){
 
  const [newTodoValue, setNewTodoValue ] = React.useState('') 

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    addTodo(newTodoValue)
    setOpenModal(false)

  }

  return (
    <form onSubmit={onSubmit}>
      <label>Introduzca un nuevo To DO </label>
        <textarea 
          value={newTodoValue}
          onChange={onChange}
          placeholder='Introduzca un nuevo To DO'
        >
        </textarea>
        <div className="TodoForm-buttonContainer">
          <button
          className="TodoForm-button TodoForm-button-cancel"
          type='button'
          onClick={onCancel}> Cancelar</button>
          <button  
          className="TodoForm-button TodoForm-button-add" 
          type='submit'
          > Anadir</button>
        </div>
     
    </form>
  )
}

export { TodoForm }