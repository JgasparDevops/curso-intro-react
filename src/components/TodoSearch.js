import { useContext } from 'react'
import '../css/TodoSearch.css'

import { TodoContext } from '../TodoContext'
function TodoSearch(){
  const {search, setSearch} = useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
     <input 
      className="TodoSearch" 
      placeholder="cebolla"
      value={search}
      onChange={onSearchValueChange}
    />
    </>
   
  )
}

export { TodoSearch }