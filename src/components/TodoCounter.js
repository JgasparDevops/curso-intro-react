import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import '../css/TodoCounter.css'
function TodoCounter(){
  const { totalTodos, completedTodos} = useContext(TodoContext)
  return (
    <h2 className="TodoCounter" >Has Completado {completedTodos} de {totalTodos} ToDos</h2>
  )
}

export { TodoCounter }