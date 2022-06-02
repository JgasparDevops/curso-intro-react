import { createContext, useState  } from "react";
import useLocalStorage from "./useLocaStorage";
const TodoContext = createContext()

function TodoProvider(props){

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage("TODOS_V1", [{text: 'picar cebolla', completed: false}])

  const [search, setSearch] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const completedTodos = todos.filter(t => t.completed === true ).length
  const totalTodos = todos.length

  let searchTodos = []

  if(!search.length >= 1){
    searchTodos = todos
  }else{
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)

    })
  }

  

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(t => t.text === text)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = true

    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(t => t.text === text)

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
  }

  // console.log('render ntes del use effect')

  // useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos])

  // console.log('render despues del use effect')

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completeTodo,
      search,
      setSearch,
      searchTodos,
      deleteTodo,
      completedTodos,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {props.children}
    </TodoContext.Provider>

  )
}
export { TodoContext, TodoProvider }