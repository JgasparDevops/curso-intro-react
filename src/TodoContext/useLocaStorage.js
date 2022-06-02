import { useEffect, useState } from 'react'
function useLocalStorage(itenName, initialValue) {
  const [item, setItem ] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itenName)
        let parsedItem
      
      
        if(!localStorageItem){
          localStorage.setItem(itenName, JSON.stringify(initialValue))
          parsedItem = []
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem)
        setLoading(false)
      }catch(e){
        setError(e)
      }
      
    }, 3000)
  })
  
  const saveItem = (newItem) => {
    try{
     const stringifiedItem = JSON.stringify(newItem)
     localStorage.setItem(itenName, stringifiedItem)
     setItem(newItem)
    }catch(e){
     setError(e)
    }
   }
 
   return {
     item,
     saveItem,
     loading,
     error
   }
 }
 

  export default useLocalStorage