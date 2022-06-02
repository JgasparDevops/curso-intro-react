
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "../components";
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { Modal } from '../modal'
import { TodoForm } from "../components/TodoForm";


function Home(props) {
  const {error, loading, searchTodos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)
  return (
    <>
     <TodoCounter/>
     
     <TodoSearch/>
     
    
         <TodoList>
         {loading  && <p>Estamos Cargando, no desesperes</p>}
         {error && <p>Desesperate, hubo un error</p>}
         {(!loading && !searchTodos.length) && <p>Crea tu primer ToDO</p>}
         {searchTodos.map(todo =>(
           <TodoItem 
             key={todo?.text} 
             text={todo?.text} 
             completed={todo?.completed}
             onComplete={() => { completeTodo(todo.text)}}
             onDelete={() => { deleteTodo(todo.text)}}
           />
         ))}
         </TodoList>

        {!!openModal &&  
          <Modal>
           <TodoForm />
          </Modal>}
      
     <CreateTodoButton 
        setOpeModal={setOpenModal}
     />
    </>
  )
}


export default Home